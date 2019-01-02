
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

((e) => {
    document.getElementById('loginBtn').addEventListener("click", (e) => {
        var mail = document.getElementById('userMail').value;
        var pass = document.getElementById('userPass').value;
        firebase.auth().signInWithEmailAndPassword(mail, pass)
            .then((res) => {
                console.log(res.user.uid);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                
                console.log(errorCode, errorMessage);
                document.getElementById("loginErrorMsg").innerHTML = errorMessage;
            });
    });

    document.getElementById('signUpBtn').addEventListener("click", (e) => {
        var mail = document.getElementById('userMail').value;
        var pass = document.getElementById('userPass').value;
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
            .then((res) => {
                console.log(res.user.uid);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                
                console.log(errorCode, errorMessage);
                document.getElementById("signUpErrorMsg").innerHTML = errorMessage;
            });
    });

})();

