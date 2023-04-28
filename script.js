window.onload = function () {

    var minutes = 00;
    var seconds = 00;
    var tens = 00; 
    var appendMinutes = document.querySelector('#minutes');
    var appendTens = document.querySelector('#tens');
    var appendSeconds = document.querySelector('#seconds');
    var buttonStart = document.querySelector('#button-start');
    var buttonStop = document.querySelector('#button-stop');
    var buttonReset = document.querySelector('#button-reset');
    var Interval = 0 ;

    buttonStart.onclick = function(){

        clearInterval(Interval);
         Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer () {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 60){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9){
            appendMinutes.innerHTML = minutes;
        }

        clearInterval()
        
    }

    


}
