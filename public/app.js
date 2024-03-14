function r_e(id) {
  return document.querySelector(`#${id}`);
}

//Home Page
//Login
login = r_e("login");

modalBG = r_e("modalBG");

modalHome = r_e("modalHome");

modalnewAcct = r_e("modalnewAcct");

create_acct = r_e("create_acct");

const closeModal = document.getElementById("close-modal");

login.addEventListener("click", () => {
  modalHome.classList.add("is-active");
});

closeModal.addEventListener("click", () => {
  modalHome.classList.remove("is-active");
});
