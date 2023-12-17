import Searchbar from "./Searchbar";

const Hero = () => {
    return (
        <section className="w-full h-2/3 bg-base-100 dark:text-[#ffeddb] text-[#572b00]">
            <div className="py-12 md:py-16 lg:py-20 w-full mx-auto max-w-4xl px-6 drop-shadow-lg">
                <div className="flex flex-col items-center">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black font-KlipanBlack bg-gradient-to-b from-[#de743b] to-[#e6af93] text-transparent bg-clip-text">
                        ChuckFacts
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight py-2 sm:py-3 md:py-4 lg:py-6">
                        Repository of Chuck Norris awesomeness
                    </div>
                    <Searchbar />
                </div>
            </div>
        </section>
    );
};

export default Hero;
