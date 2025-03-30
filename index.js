// Import Firebase authentication from firebase-config.js
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Check if a user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.email);
        document.getElementById("authStatus").innerText = `Logged in as: ${user.email}`;
    } else {
        console.log("No user logged in.");
        document.getElementById("authStatus").innerText = "Not logged in";
    }
});

// Logout function
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});
