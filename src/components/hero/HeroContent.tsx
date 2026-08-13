import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <span
                className="
                    uppercase
                    tracking-[5px]
                    text-cyan-400
                    font-semibold
                "
            >
                Software • Mobile • Cloud • Cybersecurity
            </span>

            <h1
                className="
                    mt-6
                    text-5xl
                    md:text-6xl
                    xl:text-7xl
                    font-black
                    leading-tight
                "
            >
                WE BUILD.

                <br />

                <span className="text-cyan-400">
                    WE SECURE.
                </span>

                <br />

                <span className="text-red-500">
                    WE EMPOWER.
                </span>

            </h1>

            <p
                className="
                    mt-8
                    max-w-xl
                    text-gray-300
                    leading-8
                    text-lg
                "
            >
                Taf Digital develops bespoke software,
                enterprise web applications,
                cloud solutions,
                AI-powered systems,
                cybersecurity services,
                and mobile applications
                for businesses of every size.
            </p>

            <HeroButtons />

        </motion.div>
    );
}

export default HeroContent;