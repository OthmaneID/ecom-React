import Particles from "react-tsparticles";

const App = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
    );
};