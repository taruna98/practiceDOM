// set end date
const endDate = new Date("Mar 30, 2021 18:00:00").getTime();

// update countdown every 1 second
const timer = setInterval(function () {

    // get today date and time
    let now = new Date().getTime();

    // find the distance between now and the countdown date
    let dTime = endDate - now;

    // calculate remaining time
    const days = Math.floor(dTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dTime % (1000 * 60)) / 1000);

    // display the result in the element html
    document.getElementById("time").innerHTML = days + " Days ";
    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    // if the countdown is finish, show some text
    if (dTime < 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "TIME IS UP!";
        document.getElementById("timer").innerHTML = "~ ~ ~";
    }
}, 1000);
