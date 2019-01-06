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

    /*var user = firebase.auth().currentUser;
    console.log(firebase.auth().currentUser);

    if (!user) {
        window.location.href = '../401.html';
    }
    else {
    }*/

    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = '../401.html'
        }
    });

})();