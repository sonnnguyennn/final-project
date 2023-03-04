function signIn (e){
    e.preventDefault();
    console.log("alo");
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if (user = null){
        alert('wrong username!');
    }
    else if (username == data.username && pass == data.password){
        alert('logged in!');
        window.location.replace("https://sonnnguyennn.github.io/final-project/home/home.html");
    }
    else {
        alert('wrong password!');
    }
}
