
function getNotifications(){

    if( !("Notification" in window)) {
        console.log('Navegador não suporta notificações');
    } else if ( Notification.permission === "granted") {
        const notify = new Notification('Estamos chegando no final do curso. o/');
    } else if ( Notification.permission !== "denied") {
        Notification.requestPermission( function(permission){
            if(permission === "granted"){
                const notify = new Notification('Bora, Bill!');
            }
        })
    }

} 