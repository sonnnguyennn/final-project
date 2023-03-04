
// let form = document.querySelector('#form');
// console.log(form)
// form.addEventListener("submit", signIn);


// function signIn (e){
//     e.preventDefault();
//     // console.log("alo");

//     var email = document.getElementById('email').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('pass').value;

//     var user = localStorage.getItem(username);
//     var data = JSON.parse(user);
//     console.log(data);

//     if (user = null){
//         alert('wrong username!');
//     }
//     else if (username == data.username && pass == data.password){
//         alert('logged in!');
//         window.location.replace("https://sonnnguyennn.github.io/final-project/home/home.html");
//     }
//     else {
//         alert('wrong password!');
//     }
// }
window.onload = (()=>{

    let form = document.querySelector('#form');
    console.log(form)
    form.addEventListener("submit", signIn);
    
    function signIn (e){
        e.preventDefault();
        // console.log("alo");
    
       
        var username = document.getElementById('username').value;
        var password = document.getElementById('pass').value;
    
        var user = localStorage.getItem(username);
        var data = JSON.parse(user);
        console.log(data);
        console.log(user)
    
        if (user == null){
            alert('wrong username!');
        }
        else if (username == data.username && password == data.password){
            alert('logged in!');
            window.location.replace("https://sonnnguyennn.github.io/final-project/home/home.html");
        }
        else {
            alert('wrong password!');
        }
    }
})
    
