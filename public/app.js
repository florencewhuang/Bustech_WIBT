function r_e(id) {
  return document.querySelector(`#${id}`);
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

        
//         //FIREBASE CODE
// let auth = firebase.auth();
// let db = firebase.firestore();

//Home Page
//Login
login = r_e("login");

modalBG = r_e("modalBG");

modalHome = r_e("modalHome");

modalnewAcct = r_e("modalnewAcct");

create_acct = r_e("create_acct");

const closeModal = document.getElementById("close-modal");

login.addEventListener("click", () => {
  r_e("signup_form").reset();
  modalHome.classList.add("is-active");
});

modalBG.addEventListener("click", () => {
  modalHome.classList.remove("is-active");
});

// r_e('signUp_btn').addEventListener('click', () => {
//   let email = r_e('user_name').value;
//   let password = r_e('main_pass').value;
//   console.log(email,password);
//   log_in(email, password);
//   });

  // function log_in(email, password){
  //   auth.signInWithEmailAndPassword(email, password).then((user) => {
  //     login.reset();
  //     modalHome.classList.remove("is-active");
  //     user_in = auth.currentUser.email;

  //   }).catch((error) =>{
  //     alert("invalid input")
  //     r_e('login').reset();
  //   });
  //   };

// create_acct.addEventListener('click', () => {
//   modalHome.classList.remove('is-active')
//   modalnewAcct.classList.add('is-active')
// });

// modalBG_new.addEventListener('click', () =>{
//   modalnewAcct.classList.remove('is-active')
// });

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// sign_in = r_c('signUp_btn');

// sign_in.addEventListener('click', () => {

// });

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });