function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var daysOfWeek = ["일", "월" ,"화", "수", "목", "금", "토"];
    var dayOfWeek = daysOfWeek[now.getDay()];
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');


    var timeString = `${hours}:${minutes}:${seconds}`;
    var dateString = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;

    const secondDegree = seconds * 6;
    const minuteDegree = minutes * 6;
    const hourDegree = hours * 15
    document.getElementById('secondSlice').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minuteSlice').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hourSlice').style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClock, 1000);

updateClock();