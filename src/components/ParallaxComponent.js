import React from "react";

const ParallaxComponent = ({ marginTop, children, scrollSpeed }) => (

        <div
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                transform: 
                `scale(${1 / scrollSpeed}) 
                translateZ(-${1 / scrollSpeed - 1}px) 
                translateY(calc(${(1-scrollSpeed)*-50}vh + ${marginTop}))`,
                transformOrigin: "top",
                zIndex: -1,
                width: "100vw",
                // height:'160vh',
            }}
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100vw",
                }}
            >
                {children}
            </div>
        </div>
);

ParallaxComponent.defaultProps = {
    scrollSpeed: 1,
};

export default ParallaxComponent;
