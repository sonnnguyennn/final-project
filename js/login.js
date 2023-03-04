function signIn (e){
    event.preventDefault();
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
        alert('logged in!')
    }
}
