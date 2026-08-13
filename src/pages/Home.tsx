import Navbar from "../components/layout/Navbar";
import TrustedTechnologies from "../components/technologies/TrustedTechnologies";
import Services from "../components/services/Services";

function Home() {
    return (
        <>
            <Navbar />

            {/* ================= HERO ================= */}

            <section
                id="home"
                className="
                    h-screen
                    flex
                    items-center
                    justify-center
                "
            >
                <div className="container text-center">

                    <h1
                        className="
                            text-7xl
                            lg:text-8xl
                            font-black
                            leading-none
                        "
                    >
                        WE BUILD.
                        <br />
                        WE SECURE.
                        <br />
                        <span className="text-cyan-400">
                            WE EMPOWER.
                        </span>
                    </h1>

                </div>
            </section>

            {/* Large spacing after Hero */}

            <div className="h-56"></div>

            {/* ================= TECHNOLOGIES ================= */}

            <TrustedTechnologies />

            {/* Large spacing after Technologies */}

            <div className="h-56"></div>

            {/* ================= SERVICES ================= */}

            <Services />

        </>
    );
}

export default Home;