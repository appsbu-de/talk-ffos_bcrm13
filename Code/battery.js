function getBatteryInfo() {
    var battery = navigator.battery,
        info = {
            charging: battery.charging,
            chargingTime: parseInt(battery.chargingTime / 60, 10),
            dischargingTime: parseInt(battery.dischargingTime / 60, 10),
            level: Math.round(battery.level * 100)
        };

    return info;
}
