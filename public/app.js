auth.signOut();
function r_e(id){
  return document.querySelector(`#${id}`);
};



//Home Page
//Login
login =  r_e('login');

modalBG = r_e('modalBG');

modalHome = r_e('modalHome');

modalnewAcct = r_e('modalnewAcct');

create_acct = r_e('create_acct');

login.addEventListener('click', () =>{
  modalHome.classList.add('is-active')
});

modalBG .addEventListener('click', () =>{
  modalHome.classList.remove('is-active')
});

create_acct.addEventListener('click', () => {
  modalHome.classList.remove('is-active')
  modalnewAcct.classList.add('is-active')
});
modalBG_new.addEventListener('click', () =>{
  modalnewAcct.classList.remove('is-active')
});

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

sign_in = r_c('signUp_btn');

sign_in.addEventListener('click', () => {

});

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });