(function() {
    var secondsInpt = window.document.getElementById("alarm-seconds");
    var alarmBtn = window.document.getElementById("alarm-button");

    alarmBtn.addEventListener("click", function() {
        window.setTimeout(function() {
            if (window.navigator.mozNotification) {
                var notif = window.navigator.mozNotification.createNotification("¡Alerta!", "Ya paso el tiempo", "http://localhost:8000/hacka.png");
                notif.show();
                window.navigator.vibrate(1000);
            } else {
                alert("Ya paso el tiempo!");
            }
        }, secondsInpt.value * 1000);
    }, false);

    var installer = new WebInstaller("http://localhost:8000/alarm.webapp");
    var installBtn = document.getElementById("install");
     
    installBtn.addEventListener("click", function() {
        installer.install();
    }, false);

})();
