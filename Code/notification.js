var notificationData = {
    title: "Hallo #DCKA14!",
    body: "Schön hier!"
};

function showNotification() {
    // Firefox OS 1.1 and higher
    var notification = new Notification(notificationData.title, {
        body: notificationData.body
    });
    //notification.show();
}