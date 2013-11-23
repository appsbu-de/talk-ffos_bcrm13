function getConnection() {
    var connection = window.navigator.mozConnection,
        data = {
            online: connection.bandwidth,
            metered: connection.metered
        }

    return data;
}
