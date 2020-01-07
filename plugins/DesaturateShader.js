/* eslint-disable indent */
const DesaturateShader = {

    uniforms: {
        'tDiffuse': { value: null },
        'saturation': { value: 0 },
    },

    vertexShader: [

        'varying vec2 vUv;',

        'void main() {',
            'vUv = uv;',
            'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}',

    ].join('\n'),

    fragmentShader: [

        'uniform sampler2D tDiffuse;',
        'uniform float saturation;',

        'varying vec2 vUv;',

        'vec3 rgb2hsv(vec3 c) {',
            'vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);',
            'vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));',
            'vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));',

            'float d = q.x - min(q.w, q.y);',
            'float e = 1.0e-10;',
            'return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);',
        '}',

        'vec3 hsv2rgb(vec3 c) {',
            'vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);',
            'vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);',
            'return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);',
        '}',

        'void main() {',

            'gl_FragColor = texture2D( tDiffuse, vUv );',

            'vec3 fragRGB = gl_FragColor.rgb;',
            'vec3 fragHSV = rgb2hsv(fragRGB);',
            'fragHSV.y = fragHSV.y - saturation;',
            'fragRGB = hsv2rgb(fragHSV);',

            'gl_FragColor.rgb = fragRGB;',

        '}',

    ].join('\n'),

};

export { DesaturateShader };
