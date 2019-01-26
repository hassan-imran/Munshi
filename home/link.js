

var products, stores;
if (!(localStorage.products && localStorage.stores)) {
    firebase.database().ref("products/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.products = JSON.stringify(snapshot.val());
        products = JSON.parse(localStorage.products);
    });
    firebase.database().ref("stores/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.stores = JSON.stringify(snapshot.val());
        stores = JSON.parse(localStorage.stores);
    });
}
else {
    products = JSON.parse(localStorage.products);
    stores = JSON.parse(localStorage.stores);
}

(() => {
    document.getElementById('signoutBtn').addEventListener('click', (e) => {
        firebase.auth().signOut().then(
            () => {
                window.location.href = '../index.html';
                alert("You have signed out!");
            }
        )
            .catch(
                (e) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                }
            )
    });
})();