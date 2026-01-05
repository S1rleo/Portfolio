import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_PATH = `${import.meta.env.BASE_URL}models/leotextures-compressed.glb`;

// Configure Draco decoder
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

function Model() {
    const { scene } = useGLTF(MODEL_PATH, true, true, (loader) => {
        loader.setDRACOLoader(dracoLoader);
    });
    const ref = useRef();

    // Auto-rotate the model
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Center>
            <primitive ref={ref} object={scene} scale={0.01} />
        </Center>
    );
}

export const Experience = () => {
    return (
        <>
            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <directionalLight position={[-5, 5, -5]} intensity={1} />

            {/* Model */}
            <Model />
        </>
    );
};

// Preload the model with Draco support
useGLTF.preload(MODEL_PATH, true, true, (loader) => {
    loader.setDRACOLoader(dracoLoader);
});

