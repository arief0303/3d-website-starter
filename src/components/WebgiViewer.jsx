import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck

} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

function WebgiViewer() {
    const canvasRef = useRef(null);

    const memorizedScrollAnimation = useCallback(
        (position, target, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        }, []
    );

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        const manager = await viewer.addPlugin(AssetManagerPlugin);

        const camera = viewer.scene.activeCamera;
        const postion = camera.position;
        const target = camera.target;

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

        window.scrollTo(0, 0)

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        };

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });

        memorizedScrollAnimation(postion, target, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
}

export default WebgiViewer;