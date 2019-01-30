var config = {
    apiKey: "AIzaSyBTQ0TBdzYN9GnElEoZentEBiCmhAcbzMA",
    authDomain: "munshi-ims.firebaseapp.com",
    databaseURL: "https://munshi-ims.firebaseio.com",
    projectId: "munshi-ims",
    storageBucket: "munshi-ims.appspot.com",
    messagingSenderId: "123637093469"
};
firebase.initializeApp(config);

// this file initializes firebase and puts an event listener on the signout button

(() => {
    var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = '../401.html';
        }
        else {
            document.getElementById('signoutBtn').addEventListener('click', (e) => {
                unsubscribe();
                firebase.auth().signOut().then(
                    () => {
                        localStorage.clear();
                        alert("You have signed out!");
                        window.location.href = '../index.html';
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
        }
    });

})();