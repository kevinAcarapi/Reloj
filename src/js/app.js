

function updateTime() {
    
        /* Get data */
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let dayWeek = date.getDay();
        let dayNumber = date.getDate();
        let monthNumber = date.getMonth();
        let yearNumber = date.getFullYear();

        /* Get Tags */
        let pDay = document.getElementById("day");
        let pNumberDate = document.getElementById("numberDate");
        let pMonth = document.getElementById("month");
        let pYear = document.getElementById("year");
        let pHours = document.getElementById("hours");
        let pMinutes = document.getElementById("minutes");
        let pSeconds = document.getElementById("seconds");
        let pAmpm = document.getElementById("ampm");

        /* Weekdays  */
        let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

        pDay.textContent = days[dayWeek];
        pNumberDate.textContent = dayNumber;

        /* Months */
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        pMonth.textContent = months[monthNumber];
        pYear.textContent = yearNumber;

        pHours.textContent = hour;
        pMinutes.textContent = minutes;

        /* transform the hour from 24 to 12 and we add the letters accordingly  */
        if (hour >= 12) {
            hour -= 12
            pAmpm.textContent = "PM";
        } else {
            pAmpm.textContent = "AM";
        }

        /* 00 at night was changed to 12 */
        if (hour == 0) {
            hour = 12
        }

        if (hour < 10) {
            pHours.textContent = "0" + hour;
        } else {
            pHours.textContent = hour;
        }

        if (minutes < 10) {
            pMinutes.textContent = "0" + minutes;
        } else {
            pMinutes.textContent = minutes;
        }

        if (seconds < 10) {
            pSeconds.textContent = "0" + seconds;
        } else {
            pSeconds.textContent = seconds;
        }

    };

updateTime();
setInterval(updateTime, 1000);

