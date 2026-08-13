import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

function Services() {
    return (
        <section
            id="services"
            className="container py-36"
        >
            {/* Header */}
            <div
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >
                <span
                    className="
                        text-cyan-400
                        uppercase
                        tracking-[8px]
                        text-sm
                        font-bold
                    "
                >
                    WHAT WE DO
                </span>

                <h2
                    className="
                        text-6xl
                        lg:text-7xl
                        font-black
                        mt-4
                    "
                >
                    Our Services
                </h2>

            {/* Spacer */}
            <div className="h-5"></div>

                <p
                    className="
                        mt-8
                        max-w-4xl
                        text-xl
                        leading-10
                        text-gray-400
                    "
                >
                    Taf Digital delivers bespoke software development,
                    cloud solutions, cybersecurity services and digital
                    transformation for startups, SMEs, enterprises and
                    government organisations.
                </p>
            </div>

            {/* Spacer */}
            <div className="h-24"></div>

            {/* Cards */}
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-10
                "
            >
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;