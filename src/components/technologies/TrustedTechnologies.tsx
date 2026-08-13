import TechnologyCard from "./TechnologyCard";
import { technologies } from "../../data/technologies";

function TrustedTechnologies() {
    return (
        <section
            id="technologies"
            className="container"
        >
            <div className="max-w-6xl mx-auto text-center">

    <h2 className="section-title">
        Trusted Technologies
    </h2>

    <p
        className="
            mt-8
            text-xl
            leading-9
            text-gray-400
        "
    >
        We build scalable software using modern technologies
        trusted by businesses across the world.
    </p>

</div>

 {/* Spacer */}
            <div className="h-24"></div>

            <div
                className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    xl:grid-cols-6
                    gap-10
                "
            >
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.name}
                        name={technology.name}
                        icon={technology.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default TrustedTechnologies;