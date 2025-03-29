<script>
    function logout() {
        localStorage.removeItem("loggedIn"); // Remove login status
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to home
    }
</script>
