<template>
    <main ref="threeCanvas" class="canvas">
        <div v-if="loading" class="loading"><div class="lds-hourglass" /></div>
    </main>
</template>

<script>
import * as THREE from 'three';

export default {
    data () {
        return {
            scene: null,
            camera: null,
            renderer: null,
            scenePolys: [],
            lineArr: [],
            objParent: null,
            animReq: null,
            loading: true,
            trailLength: 100,
            planetCount: 100,
        };
    },
    beforeDestroy () {
        cancelAnimationFrame(this.animReq);
    },
    mounted () {
        const width = this.$refs.threeCanvas.offsetWidth;
        const height = this.$refs.threeCanvas.offsetHeight;

        // Initialize SCENE and CAMERA
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        this.camera.position.set(0, 0, 30);

        // Initialize RENDERER and add to DOM
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x111111);
        this.$refs.threeCanvas.appendChild(this.renderer.domElement);

        // Initialize AMBIENT LIGHT
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        // Initialize POINT LIGHTS
        const pointLight = new THREE.PointLight(0xffffff, 0.75);
        pointLight.position.set(0, 20, 5);
        this.scene.add(pointLight);

        const pointLightBounce = new THREE.PointLight(0xffffff, 0.2);
        pointLightBounce.position.set(0, -20, 0);
        this.scene.add(pointLightBounce);

        // Initialize Geo
        this.objParent = new THREE.Group();
        this.spawnObjects(this.planetCount);

        // Start animation and render
        this.runScene();
    },
    methods: {
        stop () {
            cancelAnimationFrame(this.animReq);
        },
        runScene () {
            this.loading = false;
            const anim = () => {
                this.animReq = requestAnimationFrame(anim);
                this.updateScene();
                this.renderScene();
            };
            this.animReq = requestAnimationFrame(anim);
        },
        updateScene () {
            this.objParent.rotation.x -= 0.0025;
            this.objParent.rotation.y += 0.005;
            this.scenePolys.forEach((elem, index) => {
                elem.rotation.x += 0.01;
                elem.rotation.y += 0.0025;

                const newDot = new THREE.Vector3();
                elem.getWorldPosition(newDot);

                const line = this.lineArr[index][0];
                const lineRange = this.lineArr[index][1];

                if (lineRange[1] === this.trailLength) {
                    const slicedSet = line.geometry.attributes.position.array;
                    slicedSet.set(slicedSet.slice(3), 0);
                    slicedSet.set([newDot.x, newDot.y, newDot.z], (lineRange[1] - 1) * 3);
                } else {
                    line.geometry.attributes.position.array.set([newDot.x, newDot.y, newDot.z], lineRange[1]++ * 3);
                }

                line.geometry.setDrawRange(lineRange[0], lineRange[1]);
                line.geometry.attributes.position.needsUpdate = true;
            });
        },
        renderScene () {
            this.renderer.render(this.scene, this.camera);
        },
        spawnObjects (max) {
            const plusMinus = () => {
                return Math.random() < 0.5 ? -1 : 1;
            };
            const colorVal = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min);
            };
            function vertexShader () {
                return `
                    varying float vOpacity;

                    void main() {
                        vOpacity = gl_VertexID;

                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `;
            }

            function fragmentShader () {
                return `
                    uniform vec3 color;
                    uniform float opacity;
                    uniform float vertCount;

                    varying float vOpacity;

                    void main() {
                        gl_FragColor = vec4(color, opacity - vOpacity / vertCount);
                    }
                `;
            }
            const uniforms = {
                color: { type: 'color', value: new THREE.Color(0xff0000) },
                opacity: { type: 'float', value: 1.0 },
                vertCount: { type: 'int', value: this.trailLength },
            };
            for (let i = 0; i <= max; i++) {
                // Initialize Plane
                const x = plusMinus() * (Math.floor(Math.random() * 20));
                const y = plusMinus() * (Math.floor(Math.random() * 20));
                const z = plusMinus() * (Math.floor(Math.random() * 20));
                const radius = (Math.random() * (0.9 - 0.15) + 0.15).toFixed(2);
                const detail = Math.floor(Math.random() * 3 + 1);
                const color = new THREE.Color('hsl(' + colorVal(0, 358) + ', ' + colorVal(55, 80) + '%, ' + colorVal(50, 80) + '%)');
                const ringCheck = Math.round(Math.random() * 10);
                const planet = new THREE.Group();
                const verts = new Float32Array(this.trailLength * 3);
                const material = new THREE.MeshStandardMaterial({
                    color,
                    metalness: 0,
                    roughness: 1,
                    flatShading: true,
                });

                const geometry = new THREE.OctahedronGeometry(radius, detail);
                const poly = new THREE.Mesh(geometry, material);
                planet.add(poly);

                const shaderMaterial = new THREE.ShaderMaterial( {
                    uniforms,
                    fragmentShader: fragmentShader(),
                    vertexShader: vertexShader(),
                });

                const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
                const lineGeo = new THREE.BufferGeometry();
                verts.set([x, y, z], 0);
                lineGeo.addAttribute('position', new THREE.BufferAttribute(verts, 3));
                const line = new THREE.Line(lineGeo, lineMat);
                line.geometry.setDrawRange(0, 1);
                this.lineArr.push([line, [0, 1]]);
                this.scene.add(line);

                if (ringCheck < 4 && radius > 0.5) {
                    const ringGeo = new THREE.TorusGeometry(1, 0.15, 2, 20);
                    const ringMat = new THREE.MeshStandardMaterial({
                        color,
                        metalness: 0,
                        roughness: 1,
                        flatShading: true,
                    });
                    const ring = new THREE.Mesh(ringGeo, ringMat);
                    planet.add(ring);
                }

                planet.position.set(x, y, z);
                this.scenePolys.push(planet);
                this.objParent.add(planet);
            }
            this.scene.add(this.objParent);
        },
    },
};
</script>

<style lang="scss" scoped>
.canvas {
    width: 100%;
    height: 100vh;
    background-color: #111111;
    overflow-y: hidden;
}
.loading {
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    width: fit-content;
    left: 0; right: 0;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 6px;
  box-sizing: border-box;
  border: 26px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>
