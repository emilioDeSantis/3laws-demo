import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
    const videoRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [firstLoad, setFirstLoad] = useState(false)

    const videoTimeMapping = (input) => {
        const times = [0, 2.1, 4.2, 4.6, 9];
        const pauses = [0.6, 2, 1.5, 0.5, 10];

        for (let i = 0; i < times.length; i++) {
            const elapsedPauseTime = pauses
                .slice(0, i)
                .reduce((a, b) => a + b, 0);
            if (input < times[i] + elapsedPauseTime + pauses[i]) {
                if (input < times[i] + elapsedPauseTime) {
                    return input - elapsedPauseTime;
                } else {
                    return times[i];
                }
            }
        }

        return 0;
    };

    useEffect(() => {
        setFirstLoad(true)
        // initialize scroll event
        window.onscroll = () => {
            setScrollPosition(window.pageYOffset);
            if (videoRef.current) {
                // calculate scroll percentage and update video time
                const scrollPos = window.pageYOffset;
                const maxScrollPos =
                    document.body.scrollHeight - window.innerHeight;
                const scrollPercent = scrollPos / 140;

                videoRef.current.currentTime = videoTimeMapping(scrollPercent);
                // videoRef.current.currentTime = scrollPercent;
            }
        };

        return () => {
            // cleanup function to remove scroll event when component is unmounted
            window.onscroll = null;
        };
    }, []);

    return (
        <div style={{
            color: 'white',
        }}>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <video
                    ref={videoRef}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src="/vid3.mp4"
                    type="video/mp4"
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1vw 8vw",
                    backgroundColor: "transparent",
                    color: "white",
                    zIndex: 1000,
                }}
            >
                <div>
                    <h1
                        style={{
                            color: "#00FFFF",
                            fontWeight: "black",
                            lineHeight: "90%",
                            fontSize: "2.6vw",
                        }}
                    >
                        3<span style={{ color: "white" }}>LAWS</span>
                    </h1>
                    <p
                        style={{
                            color: "white",
                            letterSpacing: "0.3em",
                            fontSize: "1.3vw",
                        }}
                    >
                        ROBOTICS
                    </p>
                </div>
                <div
                    style={{
                        color: "grey",
                        display: "flex",
                        gap: "4vw",
                    }}
                >
                    <button style={{ fontSize: "1vw" }}>Home</button>
                    <button style={{ fontSize: "1vw" }}>Tech</button>
                    <button style={{ fontSize: "1vw" }}>Contact</button>
                    <button style={{ fontSize: "1vw" }}>About</button>
                </div>
            </div>
            <div
                style={{
                    width: "100vw",
                    height: "3000px",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    paddingLeft: "6vw",
                    width: "30vw",
                }}
            ></div>

            <div
                style={{
                    position: "fixed",
                    left: "8vw",
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: scrollPosition <= 50 ? '100%' : 0,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >
                <h2
                    style={{
                        marginTop: '1vw',
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "800",
                        fontSize: "3.6vw",
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        lineHeight: '111%',
                        width: '24vw',
                    }}
                >
                    Navigate Unhindered
                </h2>
                <div
                    style={{
                        marginTop: '1.4vw',
                        width: "6vw",
                        height: "2px",
                        background: '#6687FF',
                        borderRadius: '100vw'
                    }}
                />
                <p
                    style={{
                        marginTop: '3vw',
                        fontFamily: "Inter, sans-serif",
                        color: "#fffc",
                        fontSize: "1.1vw",
                        letterSpacing: '0.03em',
                        lineHeight: '195%',
                        width: "30vw",
                        fontWeight: '300',
                    }}
                >
                    Experience a world unhindered by obstacles with 3Laws' cutting-edge collision avoidance algorithm.
                </p>

                <p
                    style={{
                        marginTop: '1.6vw',
                        fontFamily: "Inter, sans-serif",
                        color: "#fff9",
                        fontSize: "1vw",
                        letterSpacing: '0.03em',
                        lineHeight: '195%',
                        width: "30vw",
                        fontWeight: '300',
                    }}
                >
                   Paired with our advanced live metrics, gain unmatched control and insight into every robotic maneuver.
                </p>
                <div style={{
                        marginTop: '5vw',
                    background: '#6687FF',
                    fontWeight: "400",
                    fontSize: "0.9vw",
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBlock: '1vw',
                    borderRadius: '3px',
                    width: '20vw',

                }}>Schedule a Consultation→</div>
            </div>
            <NumberedTitle
                number={1}
                title="Unexpected Obstacle"
                text="In a dynamic world, robots encounter barriers blocking there ideal path."
                color="#FFC875"
                scrollPosition={scrollPosition}
                scrollStart={380}
                scrollEnd={580}
            />
            <NumberedTitle
                number={2}
                title="Dangerous Collision"
                text="Hazardous and costly collisions can be avoided with ease using 3Laws’ state of the art collision avoidance algorithm."
                color="#FF6661"
                scrollPosition={scrollPosition}
                scrollStart={950}
                scrollEnd={1150}
            />
            <NumberedTitle
                number={3}
                title="optimal path"
                text="Our product allows your robot to avoid obstacles while still reaching its goal ensuring the safety of your robot and everyone and everything around it."
                color="#66FFFE"
                scrollPosition={scrollPosition}
                scrollStart={1880}
                scrollEnd={100000}
            />

        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: '#000',
                opacity: firstLoad ? 0 : 1,
                transition: 'opacity 2s ease-in-out',
            }}
        />
        </div>
    );
}

const NumberedTitle = ({
    number,
    title,
    text,
    color,
    scrollPosition,
    scrollStart,
    scrollEnd,
}) => {
    return (
            <div
                style={{
                    position: "fixed",
                    left: "8vw",
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: scrollPosition >= scrollStart && scrollPosition <= scrollEnd ? '100%' : 0,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >
                <h1
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "200",
                        fontSize: "2vw",
                    }}
                >
                    {number.toString().padStart(2, "0")}
                </h1>
                <h2
                    style={{
                        marginTop: '1vw',
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "800",
                        fontSize: "2.8vw",
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        lineHeight: '111%',
                        width: '24vw',
                    }}
                >
                    {title}
                </h2>
                <div
                    style={{
                        marginTop: '3vw',
                        width: "6vw",
                        height: "2px",
                        background: color,
                        borderRadius: '100vw'
                    }}
                />
                <p
                    style={{
                        marginTop: '2vw',
                        fontFamily: "Inter, sans-serif",
                        color: "#fffb",
                        fontSize: "1vw",
                        letterSpacing: '0.03em',
                        lineHeight: '195%',
                        width: "24vw",
                    }}
                >
                    {text}
                </p>
            </div>
    );
};
