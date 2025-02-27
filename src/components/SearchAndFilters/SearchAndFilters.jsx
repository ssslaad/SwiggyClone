export function SearchAndFilters({
  filters,
  toggleTopRatedFilter,
  toggleLowPricedFilter,
  handleInputChange,
}) {
  const filterButtonStyle =
    "text-responsive p-2 rounded-full border-2 border-[#ddd] shrink-0 cursor-pointer";
  const mdSearchAndFilterScroll = `md:overflow-x-auto md:[&::-webkit-scrollbar]:h-1.75 md:[&::-webkit-scrollbar-thumb]:bg-[#f4c998]
             md:[&::-webkit-scrollbar-thumb]:rounded-full`;
  const toggledOnStyle = "text-white shadow-[0_3px_6px_#555]";

  return (
    <div
      className={`flex flex-col justify-start items-center text-sm gap-x-2 md:mb-2 md:text-md md:flex-row ${mdSearchAndFilterScroll}`}
    >
      <div className="w-full md:w-xs">
        <input
          className="w-full p-2 border-2 rounded-full border-[#ddd] shadow-[0_5_10_#f4c998] text-responsive"
          type="text"
          placeholder="Search Among Popular Restaurants"
          value={filters.searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`flex w-full md:w-6 m-2 pb-2 md:pb-0 gap-x-2 overflow-x-scroll md:overflow-visible [&::-webkit-scrollbar]:h-1.75
                 [&::-webkit-scrollbar-thumb]:bg-[#f4c998] [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        <button
          className={`${filterButtonStyle} ${
            filters.topRated ? `bg-[#b87426] ${toggledOnStyle}` : "bg-[#e0e0e0]"
          }`}
          onClick={toggleTopRatedFilter}
        >
          Top Rated (⭐4.3+)
        </button>

        <button
          className={`${filterButtonStyle} ${
            filters.lowPriced
              ? `bg-[#b87426] ${toggledOnStyle}`
              : "bg-[#e0e0e0]"
          }`}
          onClick={toggleLowPricedFilter}
        >
          Low Priced (Under 400 Rs/-)
        </button>

        <button
          className={`${filterButtonStyle} bg-[#e0e0e0]`}
          onClick={() => {}}
        >
          Filter Holder
        </button>
        <button
          className={`${filterButtonStyle} bg-[#e0e0e0]`}
          onClick={() => {}}
        >
          Filter Holder
        </button>
        <button
          className={`${filterButtonStyle} bg-[#e0e0e0]`}
          onClick={() => {}}
        >
          Filter Holder
        </button>
        <button
          className={`${filterButtonStyle} bg-[#e0e0e0]`}
          onClick={() => {}}
        >
          Filter Holder
        </button>
        <button
          className={`${filterButtonStyle} bg-[#e0e0e0]`}
          onClick={() => {}}
        >
          Filter Holder
        </button>
      </div>
    </div>
  );
}
