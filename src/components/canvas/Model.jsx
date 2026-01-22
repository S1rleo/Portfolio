import { useGLTF, Center } from '@react-three/drei';
import { useEffect } from 'react';

export default function Model() {
    // Loading the new model character_v2.gltf
    const modelUrl = `${import.meta.env.BASE_URL}models/character_v2.gltf`;
    const { scene } = useGLTF(modelUrl);

    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh && obj.material) {
                // Ensure reasonable material properties for the new model
                obj.material.roughness = Math.max(obj.material.roughness, 0.4);
            }
        });
    }, [scene]);

    return (
        <Center>
            <primitive object={scene} />
        </Center>
    );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/character_v2.gltf`);
