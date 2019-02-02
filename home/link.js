// the purpose of this file is to take the data, of the specific user, from the database and store it into variables for future use

var products, stores;
if (!(localStorage.products && localStorage.stores) || (localStorage.products == null || localStorage.stores == null)) {
    firebase.database().ref("products/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.products = JSON.stringify(snapshot.val());
        products = JSON.parse(localStorage.products);
    });
    firebase.database().ref("stores/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.stores = JSON.stringify(snapshot.val());
        stores = JSON.parse(localStorage.stores);
    }).then(()=>{window.location.reload(false);});
}
else {
    document.getElementById("content").style.display = "block";
    document.getElementById("loader").style.display = "none";
    products = JSON.parse(localStorage.products);
    stores = JSON.parse(localStorage.stores);
}

