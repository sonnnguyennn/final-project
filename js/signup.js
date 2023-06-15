
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
      
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAxmAEnBHjd9zH21v6MrCZJhDzjsHzAcwA",
//   authDomain: "authentication-2b0c3.firebaseapp.com",
//   databaseURL: "https://authentication-2b0c3-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "authentication-2b0c3",
//   storageBucket: "authentication-2b0c3.appspot.com",
//   messagingSenderId: "599652222705",
//   appId: "1:599652222705:web:e33b4dfe4dc15544958b50"
// };
      
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import {getDatabase, ref, set, child, get}
//     from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js"

// const db = getDatabase();


// const first = document.getElementById('first-name');
// const last = document.getElementById('last-name');
// const email = document.getElementById('email');
// const pass = document.getElementById('pass');


// function Validation(){

// }



// window.onload = (()=>{

// let form = document.querySelector('#form');
// console.log(form)
// form.addEventListener("submit", signUp);

// function signUp (e){
//     e.preventDefault();
//     // console.log("alo");
//     var email = document.getElementById('email').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('pass').value;

//     var user = {
//         email: email,
//         username: username,
//         password: password,
//     };
    
//     var json = JSON.stringify(user);
//     localStorage.setItem(username, json)
//     alert("User added!")
//     window.location.replace('https://sonnnguyennn.github.io/final-project/authentication/sign-in.html');
// }
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



  document.getElementById("submit").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      window.location.replace("https://sonnnguyennn.github.io/final-project/authentication/sign-in.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
  });

