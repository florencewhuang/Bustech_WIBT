auth.signOut();
function r_e(id) {
  return document.querySelector(`#${id}`);
}

var login_status = 0;

//Home Page
//Login
login = r_e("login");

modalBG = r_e("modalBG");

modalHome = r_e("modalHome");

modalnewAcct = r_e("modalnewAcct");

create_acct = r_e("create_acct");

const closeModal = document.getElementById("close-modal");

login.addEventListener("click", () => {
  console.log("login button clicked");
    if (login_status==1) {
      // User is signed in.
      login.innerHTML = "Login";
      console.log('In if statement');
      login_status=0;
    } else {
      // No user is signed in.
      r_e("signup_form").reset();
      modalHome.classList.add("is-active");
      console.log('In else statement');
    }
  });

modalBG.addEventListener("click", () => {
  modalHome.classList.remove("is-active");
});

r_e('signUp_btn').addEventListener('click', () => {
    let email = r_e('user_name').value;
    let password = r_e('main_pass').value;
    console.log("signup button clicked");
      auth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log("login_success");
        login_status=1;

    // reset the form
    r_e("signup_form").reset();

    // hide the modal
    modalHome.classList.remove("is-active");

    //change login button to sign out
    login.innerHTML = "Sign Out";
  });
});

