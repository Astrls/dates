let usToggle = false;

const refreshTime = () => {
  //Get current time
  let now = new Date();

  //Split current time in an array
  let nowArr = String(now).split(" ");

  //Extract different elements to add to page
  let nowDay = nowArr[0];
  let nowDayDate = nowArr[2];
  let nowMonth = nowArr[1];
  let nowYear = nowArr[3];
  let nowHour = nowArr[4].slice(0, -6);
  let nowMin = nowArr[4].slice(2, 6);
  let nowHourMin = nowArr[4].slice(0, -2);
  let nowSec = nowArr[4].slice(6);

  //Add the text to the HTML elements
  document.getElementById("day").innerText = nowDay;
  document.getElementById("day-date").innerText = nowDayDate;
  document.getElementById("month").innerText = nowMonth;
  document.getElementById("year").innerText = nowYear;

  if (usToggle && nowHour > 12) {
    document.getElementById("eu-hour").innerText = nowHour - 12 + nowMin;

    //Add a span element to the seconds to make them smaller
    let secStyle = document.createElement("span");
    secStyle.setAttribute("id", "seconds");
    document.getElementById("eu-hour").append(secStyle);
    document.getElementById("seconds").innerText = nowSec;
    noonStatus = document.createElement("span");
    noonStatus.setAttribute("id", "noon-status");
    document.getElementById("eu-hour").append(noonStatus);
    noonStatus.innerText = " PM";
  } else if(usToggle && nowHour <= 12){
    document.getElementById("eu-hour").innerText = nowHour - 12 + nowMin;

    //Add a span element to the seconds to make them smaller
    let secStyle = document.createElement("span");
    secStyle.setAttribute("id", "seconds");
    document.getElementById("eu-hour").append(secStyle);
    document.getElementById("seconds").innerText = nowSec;
    noonStatus = document.createElement("span");
    noonStatus.setAttribute("id", "noon-status");
    document.getElementById("eu-hour").append(noonStatus);
    noonStatus.innerText = " AM";
  }
  else {
    document.getElementById("eu-hour").innerText = nowHour + nowMin;

    //Add a span element to the seconds to make them smaller
    let secStyle = document.createElement("span");
    secStyle.setAttribute("id", "seconds");
    document.getElementById("eu-hour").append(secStyle);

    document.getElementById("seconds").innerText = nowSec;
  }
};
setInterval(refreshTime, 1000);

document.querySelector(".time").addEventListener("click", () => {
  if (!usToggle) {
    return (usToggle = true);
  } else {
    return (usToggle = false);
  }
});

let usFormat = document.createElement("div");
usFormat.classList.add("us-hour");
usFormat.style.display = "none";
