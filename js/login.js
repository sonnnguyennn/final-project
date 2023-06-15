
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



// window.onload = (()=>{

//     let form = document.querySelector('#form');
//     console.log(form)
//     form.addEventListener("submit", signIn);
    
//     function signIn (e){
//         e.preventDefault();
//         // console.log("alo");
    
       
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('pass').value;
    
//         var user = localStorage.getItem(username);
//         var data = JSON.parse(user);
//         console.log(data);
//         console.log(user)
    
//         if (user == null){
//             alert('Wrong username or password!');
//         }
//         else if (username == data.username && password == data.password){
//             alert('Logged in!');
//             window.location.replace("https://sonnnguyennn.github.io/final-project/home/home.html");
//         }
//         else {
//             alert('Wrong username or password!');
//         }
//     }
// })



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAxmAEnBHjd9zH21v6MrCZJhDzjsHzAcwA",
    authDomain: "authentication-2b0c3.firebaseapp.com",
    databaseURL: "https://authentication-2b0c3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authentication-2b0c3",
    storageBucket: "authentication-2b0c3.appspot.com",
    messagingSenderId: "599652222705",
    appId: "1:599652222705:web:e33b4dfe4dc15544958b50"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  console.log(app);


  document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!");
      window.location.replace("https://sonnnguyennn.github.io/final-project/home/home.html");
    //   document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    //   alert(errorMessage);
    });		  		  
});
    
