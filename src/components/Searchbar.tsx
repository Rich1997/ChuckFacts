import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
    return (
        <div className="invisible-div w-full relative">
            <div className="absolute flex items-center justify-center mt-4 z-100 w-full overflow-auto">
                <div className="flex items-center gap-4 w-full md:w-[32rem] h-24 bg-[#ffd1a3] shadow-inner rounded-box">
                    <input
                        className="w-full h-full py-4 pl-8 bg-transparent focus:outline-none placeholder:text-[#6b3600]/70 text-[#6b3600]"
                        placeholder="Search for a fact..."
                    ></input>
                    <div className="pr-8 hover:opacity-50 text-[#6b3600] cursor-pointer">
                        <FaSearch />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
