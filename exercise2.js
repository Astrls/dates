const getDaysBetweenDates = (date1,date2) => {
    const convertToDays = (timestamp) => {
        return parseInt((timestamp / 1000)/60/60/24)
    }
    return convertToDays(date2) - convertToDays(date1)
}

const birthDay = new Date('1989-05-12')
const today = new Date()

document.getElementById("days-since-birth").innerText = `I've spent ${getDaysBetweenDates(birthDay,today)} days on this earth`



