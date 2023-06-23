
const getDateInFuture = (hours) => {
    const now = new Date();
    timeStamp = hours*60*60*1000;
    now.getTime();
    let future = timeStamp + now.getTime();
    return new Date(future)
}

document.getElementById("future").innerText=(getDateInFuture(80000))

const numInput = document.getElementById("hours-input")
const futureDate = document.getElementById("date-future")


let showFutureDate = () => {
    if(numInput.value > 0) {
    let dateInFuture = getDateInFuture(numInput.value)
    futureDate.innerText=dateInFuture;}
}

numInput.addEventListener("keyup",(ev) => {
    showFutureDate();
})

numInput.addEventListener("click",(e) => {
    showFutureDate();
})