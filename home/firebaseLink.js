

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