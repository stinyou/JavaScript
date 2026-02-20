function updateClock() {
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = document.getElementById("clock");

    let newHours;
    let isAM;
    
    if (hours == 0) {
        newHours = 12;
        isAM = true;
    }
    else if (hours >= 13) {
        newHours = hours - 12;
        isAM = false;
    }
    else {
        newHours = hours;
        isAM = true;
    }

    time.textContent = (
        (newHours < 10 ? "0" + newHours.toString() : newHours.toString()) + ":" +
        (minutes < 10 ? "0" + minutes.toString() : minutes.toString()) + ":" +
        (seconds < 10 ? "0" + seconds.toString() : seconds.toString()) +
        (isAM ? " AM" : " PM")
    );
}

updateClock();
setInterval(updateClock, 1000);
