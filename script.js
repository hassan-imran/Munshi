

document.getElementById("signUpButton").addEventListener("click",(e)=>{
    var a = document.getElementById("sign-in");
    var b = document.getElementById("sign-up");
    a.style.display = 'none';
    b.style.display = 'block';
    document.getElementById('loginButton').setAttribute("class", "nav-link");
    document.getElementById('signUpButton').setAttribute("class", "nav-link active");
})

document.getElementById("loginButton").addEventListener("click",(e)=>{
    var a = document.getElementById("sign-up");
    var b = document.getElementById("sign-in");
    a.style.display = 'none';
    b.style.display = 'block';
    document.getElementById('signUpButton').setAttribute("class", "nav-link");
    document.getElementById('loginButton').setAttribute("class", "nav-link active");
})