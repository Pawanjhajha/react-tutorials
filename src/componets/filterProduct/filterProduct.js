function FilterProduct(pops){
    function FilterValueChanged(event){
        console.log(event.target.value)
        pops.filterChanged(event.target.value)
    }
    return(
        <div className="filter-area">
            <select name='isAvailable' onChange={FilterValueChanged}>
                <option value='all'>All</option>
                <option value='available'>Available</option>
                <option value='unAvailable'>UnAvailable</option>
            </select>
        </div>
    )
}
export default FilterProduct;