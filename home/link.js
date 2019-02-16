// the purpose of this file is to take the data, of the specific user, from the database and store it into variables for future use

var products, stores;
if (!(localStorage.products && localStorage.stores && localStorage.uname) || (localStorage.products == null || localStorage.stores == null || localStorage.uname == null)) {
    firebase.database().ref("products/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.products = JSON.stringify(snapshot.val());
        products = JSON.parse(localStorage.products);
    });
    firebase.database().ref("users/" + localStorage.token + "/name/").once('value').then((snapshot) => {
        localStorage.uname = snapshot.val();
        uname = localStorage.uname;
    })
    firebase.database().ref("stores/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.stores = JSON.stringify(snapshot.val());
        stores = JSON.parse(localStorage.stores);
    }).then(() => { window.location.reload(false); });
}
else {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    products = JSON.parse(localStorage.products);
    stores = JSON.parse(localStorage.stores);
}