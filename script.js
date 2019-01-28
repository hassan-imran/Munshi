// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTQ0TBdzYN9GnElEoZentEBiCmhAcbzMA",
    authDomain: "munshi-ims.firebaseapp.com",
    databaseURL: "https://munshi-ims.firebaseio.com",
    projectId: "munshi-ims",
    storageBucket: "munshi-ims.appspot.com",
    messagingSenderId: "123637093469"
};
firebase.initializeApp(config);

document.getElementById("signUpButton").addEventListener("click", (e) => {
    var a = document.getElementById("sign-in");
    var b = document.getElementById("sign-up");
    a.style.display = 'none';
    b.style.display = 'block';
    document.getElementById('loginButton').setAttribute("class", "nav-link");
    document.getElementById('signUpButton').setAttribute("class", "nav-link active");
});

document.getElementById("loginButton").addEventListener("click", (e) => {
    var a = document.getElementById("sign-up");
    var b = document.getElementById("sign-in");
    a.style.display = 'none';
    b.style.display = 'block';
    document.getElementById('signUpButton').setAttribute("class", "nav-link");
    document.getElementById('loginButton').setAttribute("class", "nav-link active");
});

// Login for firebase

var firebaseRef = firebase.database();

((e) => {
    document.getElementById('loginBtn').addEventListener("click", (e) => {
        var mail = document.getElementById('userMail').value;
        var pass = document.getElementById('userPass').value;
        firebase.auth().signInWithEmailAndPassword(mail, pass)
            .then((res) => {
                //console.log(res.user.uid);
                localStorage.token = res.user.uid;
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
                document.getElementById("loginErrorMsg").innerHTML = errorMessage;
            });
    });

    document.getElementById('signUpBtn').addEventListener("click", (e) => {
        var newMail = document.getElementById('newUserMail').value;
        var newPass = document.getElementById('newUserPass').value;
        var newName = document.getElementById('newUserName').value;
        firebase.auth().createUserWithEmailAndPassword(newMail, newPass)
            .then((res) => {
                var userId = res.user.uid;
                localStorage.token = res.user.uid;
                firebaseRef.ref("users/").child(userId).set({
                    name: newName,
                    email: newMail,
                    password: newPass
                })
                firebaseRef.ref("products/").child(localStorage.token).update({
                    "Sample": {
                        "barcode": "1234567891011",
                        "cp": "200",
                        "date": "2019-1-1",
                        "description": "nice sample",
                        "discount": "5",
                        "manufacturer": "abc manufacturers",
                        "mp": 247,
                        "profit": 47,
                        "sold": 4,
                        "sp": "260",
                        "stock": 10
                    }
                });
                firebaseRef.ref("stores/").child(localStorage.token).update({
                    "City Branch": {
                        "address": "C-123, Block D, New York, USA",
                        "products": {
                            "Sample": {
                                "date": "2019-1-1",
                                "sold": 4,
                                "stock": "10"
                            }
                        }
                    }
                });
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
                document.getElementById("signUpErrorMsg").innerHTML = errorMessage;
            });
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "home/index.html";
        }
    })

})();

