const firebaseConfig = {
    apiKey: "AIzaSyASoupG_v1jypb7HYfwuxypOf4QDbRC1uA",
    authDomain: "smart-agri-guide.firebaseapp.com",
    projectId: "smart-agri-guide",
    storageBucket: "smart-agri-guide.appspot.com",
    messagingSenderId: "32060954309",
    appId: "1:32060954309:web:68ee3f978720c5f60c02ac",
    measurementId: "G-2D1D2GB2G6"
  };
  // Initialize Firebase
  const app =firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const email=document.getElementById("signup-emailid");
  const password=document.getElementById("signup-password");
  function Signup(){
   auth.createUserWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       // ...
   })
   .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
   });
}
   function Login(){
           auth.signInWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   // ...
})
.catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
});
}  