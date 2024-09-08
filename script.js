// Handle Google Sign-In
window.onload = function() {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleSignIn"),
        { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt(); // Optional
};

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Send the token to your backend for verification and sign-in
}

// Handle Apple Sign-In (Requires Backend setup with Apple Developer Account)
document.getElementById("appleSignIn").addEventListener("click", function() {
    // Redirect to your backend or handle Apple sign-in logic
    window.location.href = "/apple-auth";
});
