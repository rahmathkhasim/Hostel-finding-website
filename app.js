function redirectToLogin() {
    window.location.href = "login.html"; 
  }
  
  const googleSignInButton = document.getElementById("googleSignInButton");
  
  googleSignInButton.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href="../dashboard.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
    });
  })