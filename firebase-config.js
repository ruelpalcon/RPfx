<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHZIUnGP7JLpQJ3oWrdb1tgI-8AI9VmJo",
    authDomain: "rpfx-b7288.firebaseapp.com",
    projectId: "rpfx-b7288",
    storageBucket: "rpfx-b7288.firebasestorage.app",
    messagingSenderId: "592595389242",
    appId: "1:592595389242:web:a7d9baa7748086b29f5e03"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
console.log("✅ Firebase is connected successfully!");
