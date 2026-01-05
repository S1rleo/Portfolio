import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const MODEL_PATH = `${import.meta.env.BASE_URL}models/leotextures-compressed.glb`;

function Model() {
    const { scene } = useGLTF(MODEL_PATH);
    const ref = useRef();

    // Auto-rotate the model
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5; // Adjust speed as needed
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

// Preload the model
useGLTF.preload(MODEL_PATH);
