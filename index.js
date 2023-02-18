//document.addEventListener("DOMContentLoaded", function() {
    const timeOutput = document.querySelector('.time')
    const secOutput = document.querySelector('.sec')
    const ampmOutput = document.querySelector('.ampm')
    const monthOutput = document.querySelector('.month')
    const dayOfWeekOutput = document.querySelector('.dayofweek')
    const dayOutput = document.querySelector('.day')

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];
    // Add 0 if it's one digit number time
    function formatTime(val){
        if (val < 10){
            return "0";
        }else{
            return "";
        }
    }

    // Function that makes the Clock TICK!
    function clock(){
        console.log(timeOutput, secOutput, ampmOutput, monthOutput, dayOfWeekOutput, dayOutput);

        // Get the date
        const d = new Date();

        // Time variables
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();

        // Output weekday month, day name
        dayOfWeekOutput.innerHTML = weekday[
            d.getDay()
        ];
        monthOutput.innerHTML = months[d.getMonth()];
        dayOutput.innerHTML = d.getDate();

        //Formatting and displaying time
        const time = formatTime(h) + h + ":" + formatTime(m) + m;
        const sec = formatTime(s) + s;
        const ampm = h >= 12? 'PM': 'AM';
        
        // Output time
        timeOutput.innerHTML = time;
        secOutput.innerHTML = sec;
        ampmOutput.innerHTML = ampm;
    }

    // update every second
    setInterval(clock, 1000);
//});
