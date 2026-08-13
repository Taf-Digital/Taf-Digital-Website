type Props = {
    title: string;
    description: string;
    icon: string;
};

function ServiceCard({
    title,
    description,
    icon
}: Props) {

    return (

        <article
            className="
                glass
                rounded-3xl
                p-10
                min-h-[340px]
                border
                border-white/10
                hover:border-cyan-400/40
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(0,191,255,0.25)]
                transition-all
                duration-500
                flex
                flex-col
                items-center
                text-center
            "
        >

            <div
                className="
                    text-6xl
                    mb-8
                "
            >
                {icon}
            </div>

            <h3
                className="
                    text-3xl
                    font-black
                    leading-tight
                    mb-6
                "
            >
                {title}
            </h3>

            <p
                className="
                    text-gray-400
                    text-lg
                    leading-9
                    max-w-xs
                "
            >
                {description}
            </p>

        </article>

    );

}

export default ServiceCard;