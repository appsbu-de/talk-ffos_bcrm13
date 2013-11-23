function activateDeviceorientation() {
    var resElement = document.querySelector("#results");
    window.ondeviceorientation = function (event) {
        var data = 'Z-Axis: ' + event.alpha + '<br>' +
                   'X-Axis: ' + event.beta + '<br>' +
                   'Y-Axis: ' + event.gamma;

        resElement.innerHTML = data;
    };

}