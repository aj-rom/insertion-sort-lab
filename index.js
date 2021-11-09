function findMinAndRemove(array){
    let min = array[0]

    let i = 0
    array.forEach((e, idx) => {
        if (e < min) {
            min = e
            i = idx
        }
    })

    array.splice(i, 1)
    return min
}

function selectionSort(array){

    let sorted = []
    let min = array[0]

    while (array.length !== 0) {
        min = findMinAndRemove(array)
        sorted.push(min)
    }

    return sorted
}
