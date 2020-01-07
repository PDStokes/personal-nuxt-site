<template>
    <main ref="threeCanvas" class="canvas" :class="{ 'space-bg' : !loading }">
        <div v-if="loading" class="loading"><div class="lds-hourglass" /></div>
        <div v-else class="welcome">
            <h1 class="title noselect">Welcome to the solar system</h1>
            <nuxt-link to="/missions" class="enter-button noselect">Enter</nuxt-link>
        </div>
    </main>
</template>

<script>
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DesaturateShader } from '../plugins/DesaturateShader';

export default {
    data () {
        return {
            scene: null,
            camera: null,
            renderer: null,
            composer: null,
            scenePolys: [],
            lineArr: [],
            objParent: null,
            animReq: null,
            loading: true,
            clock: new THREE.Clock(),
            trailLength: 100,
            planetCount: 75,
        };
    },
    head () {
        return {
            title: 'Paul Stokes',
        };
    },
    beforeDestroy () {
        cancelAnimationFrame(this.animReq);
    },
    mounted () {
        const width = this.$refs.threeCanvas.offsetWidth;
        const height = this.$refs.threeCanvas.offsetHeight;

        // Reduce planet count if on Mobile/Tablet
        if (width < 1024) {
            this.planetCount = 50;
        }

        // Initialize SCENE and CAMERA
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 200);
        this.camera.position.set(0, 0, 40);

        // Initialize RENDERER and add to DOM
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0xffffff, 0);
        this.renderer.setClearAlpha(0);
        this.$refs.threeCanvas.appendChild(this.renderer.domElement);

        // Initialize EffectComposer
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        const rgbShift = new ShaderPass(RGBShiftShader);
        rgbShift.uniforms[ 'amount' ].value = 0.0025;
        this.composer.addPass(rgbShift);

        const vignette = new ShaderPass(VignetteShader);
        vignette.uniforms[ 'offset' ].value = 1.3;
        this.composer.addPass(vignette);

        // Bloom pass
        const uBloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
        this.composer.addPass(uBloomPass);

        // Film grain pass
        const filmPass = new FilmPass(
            0.35,       // noiseIntensity
            0.25,       // scanlinesIntensity
            648,        // scanlinesCount
            false,      // grayscale
        );
        this.composer.addPass(filmPass);

        const desaturate = new ShaderPass(DesaturateShader);
        desaturate.uniforms[ 'saturation' ].value = 0.25;
        this.composer.addPass(desaturate);

        // Initialize AMBIENT LIGHT
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        // Initialize POINT LIGHTS
        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(0, 20, 5);
        this.scene.add(pointLight);

        const pointLightBounce = new THREE.PointLight(0xffffff, 0.35);
        pointLightBounce.position.set(0, -20, 0);
        this.scene.add(pointLightBounce);

        // Load skybox
        const loader = new THREE.CubeTextureLoader();
        const bgTexture = loader.load([
            require('../assets/images/spacebox/pos_x.jpg'),
            require('../assets/images/spacebox/neg_x.jpg'),
            require('../assets/images/spacebox/pos_y.jpg'),
            require('../assets/images/spacebox/neg_y.jpg'),
            require('../assets/images/spacebox/pos_z.jpg'),
            require('../assets/images/spacebox/neg_z.jpg'),
        ]);
        this.scene.background = bgTexture;

        // Initialize Geo
        this.objParent = new THREE.Group();
        this.spawnObjects(this.planetCount);

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.update();

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
            // Rotate scene
            this.objParent.rotation.x -= 0.001;
            this.objParent.rotation.y += 0.005;

            // Rotate each planet individually
            this.scenePolys.forEach((elem, index) => {
                elem.rotation.x += 0.01;
                elem.rotation.y += 0.0025;

                // Get current world position of planet
                const newDot = new THREE.Vector3();
                elem.getWorldPosition(newDot);

                // Get cooresponding line trail obj
                const line = this.lineArr[index][0];
                const lineRange = this.lineArr[index][1];

                // Set line trail to world position of planet obj
                // Increase draw range until array limit is hit
                // Then slice current array with new vals
                if (lineRange[1] === this.trailLength) {
                    const slicedSet = line.geometry.attributes.position.array;
                    slicedSet.set(slicedSet.slice(3), 0);
                    slicedSet.set([newDot.x, newDot.y, newDot.z], (lineRange[1] - 1) * 3);
                } else {
                    line.geometry.attributes.position.array.set([newDot.x, newDot.y, newDot.z], lineRange[1]++ * 3);
                    line.geometry.setDrawRange(lineRange[0], lineRange[1]);
                }

                line.geometry.attributes.position.needsUpdate = true;
            });
        },
        renderScene () {
            // this.renderer.render(this.scene, this.camera);
            const deltaTime = this.clock.getDelta();
            this.composer.render(deltaTime);
        },
        spawnObjects (max) {
            // Random pos/neg sign
            const plusMinus = () => {
                return Math.random() < 0.5 ? -1 : 1;
            };
            // Color min max
            const colorVal = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min);
            };
            // Line Vertex shader
            // Passes vertex attribute as index
            function vertexShader () {
                return `
                    attribute float vOrder;
                    varying float vOpacity;

                    void main() {
                        vOpacity = vOrder;

                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `;
            }
            // Line Fragment Shader
            // Dynamically sets opacity per vertex based on index
            function fragmentShader () {
                return `
                    uniform vec3 color;
                    uniform float opacity;
                    uniform float vertCount;

                    varying float vOpacity;

                    void main() {
                        gl_FragColor = vec4(color, opacity * (vOpacity / vertCount));
                    }
                `;
            }
            // Vertex order array
            // Creates 0 to X array, where X is max trail length
            const vOrder = new Float32Array(this.trailLength);
            vOrder.forEach((elem, index) => {
                vOrder.set([index + 1], index);
            });
            // Generates planets and lines based on max
            for (let i = 0; i <= max; i++) {
                // Initialize Random Location
                const x = plusMinus() * (Math.floor(Math.random() * (25 - 8) + 8));
                const y = plusMinus() * (Math.floor(Math.random() * (15 - 5) + 5));
                const z = plusMinus() * (Math.floor(Math.random() * (25 - 8) + 8));

                // Initialize Random Radius and Poly count
                const radius = (Math.random() * (0.9 - 0.15) + 0.15).toFixed(2);
                const detail = Math.floor(Math.random() * 3 + 1);

                // Initialize Random Color
                const color = new THREE.Color('hsl(' + colorVal(0, 358) + ', ' + colorVal(30, 55) + '%, ' + colorVal(50, 80) + '%)');

                // Initialize parent group, material, and geo
                const planet = new THREE.Group();
                const material = new THREE.MeshStandardMaterial({
                    color,
                    metalness: 0,
                    roughness: 1,
                    flatShading: true,
                });
                const geometry = new THREE.OctahedronGeometry(radius, detail);
                const poly = new THREE.Mesh(geometry, material);
                planet.add(poly);

                // Initialize Custom trail shader
                const uniforms = {
                    color: { type: 'color', value: color },
                    opacity: { type: 'float', value: 1.0 },
                    vertCount: { type: 'float', value: this.trailLength },
                };
                const shaderMaterial = new THREE.ShaderMaterial({
                    uniforms,
                    fragmentShader: fragmentShader(),
                    vertexShader: vertexShader(),
                    transparent: true,
                });

                // Initialize Line Geo
                const lineGeo = new THREE.BufferGeometry();

                // Initialize and add Buffer Attributes
                const verts = new Float32Array(this.trailLength * 3);
                verts.set([x, y, z], 0);
                lineGeo.addAttribute('position', new THREE.BufferAttribute(verts, 3));
                lineGeo.addAttribute('vOrder', new THREE.BufferAttribute(vOrder, 1));

                // Initialize Trail Line
                const line = new THREE.Line(lineGeo, shaderMaterial);
                line.geometry.setDrawRange(0, 1);
                this.lineArr.push([line, [0, 1]]);
                this.scene.add(line);

                // Initialize Planet Ring If True
                const ringCheck = Math.round(Math.random() * 10);
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

                // Set Planet position and add to parent group + poly list
                planet.position.set(x, y, z);
                this.scenePolys.push(planet);
                this.objParent.add(planet);
            }
            // LET THERE BE LIGHT
            const sunGeo = new THREE.SphereBufferGeometry(8, 20, 20);
            const sunMat = new THREE.MeshStandardMaterial({
                color: 0xf8f07c,
                metalness: 0,
                roughness: 1,
                flatShading: true,
                emissive: 0xf4e727,
                emissiveIntensity: 2.25,
            });
            const sun = new THREE.Mesh(sunGeo, sunMat);
            this.objParent.add(sun);
            this.scene.add(this.objParent);
        },
    },
};
</script>

<style lang="scss" scoped>
.canvas {
    width: 100%;
    height: 100vh;
    background-color: black;
    overflow-y: hidden;
}

.space-bg {
    background: black;
}

.welcome {
    color: white;
    position: absolute;
    font-family: $serif-font;
    font-size: 2rem;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    width: 100%;
    left: 0; right: 0;
    text-align: center;
    background: linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100% );

    @include bp(not-phone) {
        font-size: 3rem;
    }

    .title {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .enter-button {
        // border: 2px solid white;
        border-radius: 5px;
        padding: 10px 50px;
        background-color: rgba(0, 0, 0, 0.25);
        transition: background-color 0.25s;
        color: white;
        font-family: $sans-font;
        font-weight: bold;
        font-size: 2rem;

        &:hover {
            transition: background-color 0.25s;
            background-color: rgba(0, 0, 0, 0.45);
        }
    }
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
