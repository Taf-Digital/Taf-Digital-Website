function HeroButtons() {
    return (
        <div className="flex flex-wrap gap-5 mt-10">

            <button
                className="
                    bg-cyan-500
                    hover:bg-cyan-400
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    shadow-lg
                    shadow-cyan-500/40
                "
            >
                Get a Quote
            </button>

            <button
                className="
                    border
                    border-cyan-500
                    hover:bg-cyan-500
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                "
            >
                View Portfolio
            </button>

        </div>
    );
}

export default HeroButtons;