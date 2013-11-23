function activateAmbientLightEvent() {
    var resElement = document.querySelector("#results");
    window.ondevicelight = function (event) {
        // Read out the lux value
        var lux = event.value;
        resElement.innerHTML = "Lux: " + lux;
    };
}