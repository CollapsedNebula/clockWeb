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
    const hourDegree = hours * 30;
    document.getElementById('secondSlice').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minuteSlice').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hourSlice').style.transform = `rotate(${hourDegree}deg)`;
}

var darkModeValue = 0
function darkMode() {
    if (darkModeValue === 0) { //Light Mode
        document.getElementById('darkMode').style.transform = 'translate(10%, -50%)';
        document.getElementById('sun').style.opacity = 0;
        document.getElementById('moon').style.opacity = 1;
        document.getElementById('darkMode').style.backgroundColor = '#ccc';
        document.getElementById('darkModeContainer').style.backgroundColor = '#efefef';
        document.getElementById('lore').style.color = '#fff';
        document.body.style.backgroundColor = '#000000';
        document.getElementById('secondChart').style.borderColor = '#efefef';
        document.getElementById('minuteChart').style.borderColor = '#efefef';
        document.getElementById('hourChart').style.borderColor = '#efefef';
        darkModeValue = 1;
    }
    else if (darkModeValue === 1) { //Dark Mode
        document.getElementById('darkMode').style.transform = 'translate(-110%, -50%)';
        document.getElementById('sun').style.opacity = 1;
        document.getElementById('moon').style.opacity = 0;
        document.getElementById('darkMode').style.backgroundColor = '#efefef';
        document.getElementById('darkModeContainer').style.backgroundColor = '#ccc';
        document.getElementById('lore').style.color = '#000';
        document.body.style.backgroundColor = '#fff';
        document.getElementById('secondChart').style.borderColor = '#ccc';
        document.getElementById('minuteChart').style.borderColor = '#ccc';
        document.getElementById('hourChart').style.borderColor = '#ccc';
        darkModeValue = 0;
    }
}

setInterval(updateClock, 1000);

updateClock();