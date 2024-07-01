
const utcTimeElement = document.querySelector('#utcTime');
const dayOfWeekElement = document.querySelector('#dayOfWeek');
function updateTimeAndDay() {

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];

    utcTimeElement.textContent = utcTime;
    dayOfWeekElement.textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);

updateTimeAndDay();
