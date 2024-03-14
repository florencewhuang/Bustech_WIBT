const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");
const editModal = document.getElementById("edit-modal");
const closeModal = document.getElementById("close-modal");
const eventDetails = document.getElementById("event-details");

editButton.addEventListener("click", () => {
  editModal.classList.add("is-active");
});

closeModal.addEventListener("click", () => {
  editModal.classList.remove("is-active");
});

deleteButton.addEventListener("click", () => {
  // Implement your delete logic here, for now, just hide the event details
  eventDetails.style.display = "none";
});

document
  .getElementById("edit-event-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const editedTitle = document.getElementById("edit-event-title").value;
    const editedType = document.getElementById("edit-event-type").value;
    const editedDate = document.getElementById("edit-event-date").value;
    const editedDescription = document.getElementById(
      "edit-event-description"
    ).value;

    document.getElementById("event-title-text").textContent = editedTitle;
    document.getElementById("event-type-text").textContent = editedType;
    document.getElementById("event-date-text").textContent = editedDate;
    document.getElementById("event-description").textContent =
      editedDescription;

    editModal.classList.remove("is-active");
  });
