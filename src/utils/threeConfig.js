import * as THREE from 'three';

export function applyRendererConfig(gl) {
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.NoToneMapping;
    gl.toneMappingExposure = 1;
    gl.physicallyCorrectLights = true;
}
