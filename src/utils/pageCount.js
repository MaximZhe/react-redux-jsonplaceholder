export function getTotalPageCount (totalCountPage, limit){
    return Math.ceil(totalCountPage / limit)
}

export function pagesArray(totalPages){
    let result= [];
    for(let i = 0; i < totalPages; i++){
        result.push(i+1)
    }
    return result
}

