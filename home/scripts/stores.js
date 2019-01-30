


(() => {
    document.getElementById("addNewStoreBtn").addEventListener('click', (e) => {

    })
})()

var a = document.getElementById("store-details");
//var b = 0;
for (let name in stores) {
    a.innerHTML += `<div class="card" style="width: 18rem;"><div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${stores[name].address}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <a href="">
                        <li class="list-group-item">Products low on stock: 2</li>
                    </a>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-secondary" onclick="storeInfo('${name}')" data-toggle="modal" data-target="#viewStoreInfo">View</button>
                    <button type="button" class="btn btn-primary" onclick="editStore('${name}')">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="deleteStore('${name}')">Remove</button>
                </div>
            </div></div>`;
};

function storeInfo(sName) {
    document.getElementById("storeInfoHead").innerHTML = sName;
    var x = stores[sName];
    document.getElementById("store-info").innerHTML = `
            <li><b>Address: </b>${x.address}</li>
            <li><b>Total Products: </b>${Object.keys(x.products).length}</li>`;
};

function addNewStore() {
    var newStore = {
        [$('#branch').val()]: {
            'address': document.getElementById('address').value,
            'products': 0
        }
    };
    Object.assign(stores, newStore);
    localStorage.stores = JSON.stringify(stores);
    firebase.database().ref("/stores/" + localStorage.token).update(stores).then(() => window.location.reload(false));
}

function editStore(name) {
    document.getElementById("addNewStoreBtn").click();
    var x = stores[name];
    $('#branch')[0].value = name;
    $('#address')[0].value = x.address;

    document.getElementById("confirm-add-store").addEventListener("click", editStorelistenerFunction)
}

var editStorelistenerFunction = (e) => {
    delete stores[name];
    localStorage.stores = JSON.stringify(stores);
    firebase.database().ref("/stores/" + localStorage.token).set(stores)
};

function deleteStore(name) {
    delete stores[name];
    localStorage.stores = JSON.stringify(stores);
    firebase.database().ref("/stores/" + localStorage.token).set(stores).then(() => window.location.reload(false));
};

function clearModal() {
    $('#branch')[0].value = '';
    $('#address')[0].value = '';
    document.getElementById("confirm-add-store").removeEventListener("click", editStorelistenerFunction)
}
