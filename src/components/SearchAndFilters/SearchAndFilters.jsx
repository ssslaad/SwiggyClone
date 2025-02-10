import styles from '../Body/body.module.css';

export function SearchAndFilters({
    filters,
    toggleTopRatedFilter,
    toggleLowPricedFilter,
    handleInputChange
}){
    return (
        <div className={styles.body}>

            <div className={styles.searchAndFilter}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search Among Popular Restaurants" value={filters.searchQuery} onChange={handleInputChange} />
                </div>

                <div className={styles.verticalSeparator}></div>

                <div className={styles.filters}>
                    <button className={filters.topRated ? styles.toggledOn : ``}
                     onClick={toggleTopRatedFilter}>Top Rated (⭐4.3+)</button>
                    <button className={filters.lowPriced ? styles.toggledOn : ``}
                     onClick={toggleLowPricedFilter}>Low Priced (Under 400 Rs/-)</button>
                </div>
            </div>
            
           

        </div>
    );
}