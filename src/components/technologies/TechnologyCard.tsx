type Props = {
    name: string;
    icon: string;
};

function TechnologyCard({ name, icon }: Props) {
    return (
        <div
            className="
                glass
                rounded-3xl
                min-h-[170px]
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-6
                border
                border-white/10
                hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(0,191,255,0.20)]
                transition-all
                duration-500
            "
        >
            <span className="text-6xl">
                {icon}
            </span>

            <h3 className="text-2xl font-bold">
                {name}
            </h3>
        </div>
    );
}

export default TechnologyCard;