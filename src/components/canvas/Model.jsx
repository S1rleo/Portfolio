import { useGLTF, Center } from '@react-three/drei';
import { useEffect } from 'react';

export default function Model() {
    // Reverting to optimized GLB and using ?v=5 to force refresh
    const modelUrl = `${import.meta.env.BASE_URL}models/character.optimized.glb?v=5`;
    const { scene } = useGLTF(modelUrl);

    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh && obj.material) {
                obj.material.roughness = Math.max(obj.material.roughness, 0.45);
            }
        });
    }, [scene]);

    return (
        <Center>
            <primitive object={scene} />
        </Center>
    );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/character.optimized.glb?v=5`);
