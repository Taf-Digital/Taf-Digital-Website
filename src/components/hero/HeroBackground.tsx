function HeroBackground() {
    return (
        <>
            {/* Blue Glow */}
            <div
                className="
                    absolute
                    top-16
                    left-0
                    h-96
                    w-96
                    rounded-full
                    bg-cyan-500/20
                    blur-[140px]
                    -z-10
                "
            />

            {/* Red Glow */}
            <div
                className="
                    absolute
                    bottom-10
                    right-0
                    h-[28rem]
                    w-[28rem]
                    rounded-full
                    bg-red-500/20
                    blur-[160px]
                    -z-10
                "
            />
        </>
    );
}

export default HeroBackground;