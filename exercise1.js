let date = new Date();

const anchDate = date.toLocaleString("en-US", {timeZone: "America/Anchorage"});
const reyDate = date.toLocaleString("en-US", {timeZone: "Europe/London"})
const spDate = date.toLocaleString("en-US", {timeZone: "Europe/Moscow"})
const bxDate = date.toLocaleString("en-US", {timeZone: "Europe/Brussels"})


document.getElementById("anchorage").innerText = `Anchorage (USA) - ${anchDate}`
document.getElementById("reykjavik").innerText = `Reykjavik - ${reyDate}`
document.getElementById("st-petersburg").innerText = `St. Petersburg - ${spDate}`
document.getElementById("brussels").innerText = `Brussels - ${bxDate}`
