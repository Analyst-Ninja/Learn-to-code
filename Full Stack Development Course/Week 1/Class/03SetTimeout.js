function getSum(first, last){
    count = 0
    for (let i = first; i <= last; i++){

        count += i
    }

    return count
}


function printToScreen() {
    console.log( ` 10 seconds have passed. Get the medicine pls. `);
}

const sec = 1000

setTimeout(printToScreen, sec)

console.log(getSum(1,100))