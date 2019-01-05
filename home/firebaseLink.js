var config = {
    apiKey: "AIzaSyBTQ0TBdzYN9GnElEoZentEBiCmhAcbzMA",
    authDomain: "munshi-ims.firebaseapp.com",
    databaseURL: "https://munshi-ims.firebaseio.com",
    projectId: "munshi-ims",
    storageBucket: "munshi-ims.appspot.com",
    messagingSenderId: "123637093469"
};
firebase.initializeApp(config);

(() => {
    document.getElementById('signoutBtn').addEventListener('click', (e) => {
        firebase.auth().signOut().then(
            () => {
                window.location.href= '../index.html';
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
    })
})();