// Time
let hrs = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');
let message = document.getElementById('message');

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();

    message.innerHTML = displayMessage(currentTime.getHours());
}, 1000);

// Date
setInterval(() => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDate = new Date();

    document.getElementById('date').innerHTML = (dayNames[currentDate.getDay()] + ", " + currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear());
}, 1000);

// Display message
const displayMessage = (hrs) => {
    if (hrs >= 0 && hrs <= 7) {
        return "Es hora de descansar. Apaga y sigue mañana";
    } else if (hrs > 7 && hrs <= 12) {
        return "Buenos días, desayuna fuerte y a darle al código";
    } else if (hrs > 12 && hrs <= 14) {
        return "Echa un rato más pero no olvides comer";
    } else if (hrs > 14 && hrs <= 16) {
        return "Espero que hayas comido";
    } else if (hrs > 16 && hrs <= 18) {
        return "Buenas tardes, el último empujón";
    } else if (hrs > 18 && hrs <= 22) {
        return "Esto ya son horas extras, piensa en parar pronto";
    } else {
        return "Buenas noches, es hora de pensar en parar y descansar";
    }
}

message.innerHTML = displayMessage(new Date().getHours());





