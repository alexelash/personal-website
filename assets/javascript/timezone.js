(function() {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/London'
    };
    
    function setTime() {
        const date = new Date();
        const timeForMe = date.toLocaleTimeString('en-GB', options);
    
        function checkTimeAvailability(time) {
            if (date != "Invalid Date") return "it’s " + time + " where I am";
             else return;
        };

        const printTime = checkTimeAvailability(timeForMe);
        document.getElementById("-js-cta-timezone-time").innerHTML = printTime;
    }

    setTime();

    setInterval(setTime, 1000);
})()
