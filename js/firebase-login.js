// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAd0LQTwxPLj3hK0mMHR2gAXvbqPs2EzE",
  authDomain: "simac-app-154ee.firebaseapp.com",
  projectId: "simac-app-154ee",
  storageBucket: "simac-app-154ee.firebasestorage.app",
  messagingSenderId: "1024681256590",
  appId: "1:1024681256590:web:98cdb8843310aa48e70bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submitting
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  alert(6)

  // login inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Welcome " + email)
    window.location.href = "loggedin.php";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})