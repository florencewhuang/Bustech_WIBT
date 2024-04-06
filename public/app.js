// key functions
function r_e(id) {
  return document.querySelector(`#${id}`);
}

// Load Home Page
r_e("homepage").addEventListener("click", () => {
  r_e(
    "content_page"
  ).innerHTML = `      <h1 class="title">WOMEN IN BUSINESS TECHNOLOGY</h1>
  <br />
  <br />
  <br />
  <div>
    <div class="columns">
      <div class="column" id="homeIMG">
        <img src="images/logo.png" alt="WIBT logo" />
      </div>

      <div class="column-section column">
        <h2 class="results">About Us</h2>
        <div class="eventlib-results">
          <div class="homecard-container">
            <h3 class="results-headers">Our Club</h3>
            <p>
              WIBT is a club at the University of Wisconsin-Madison. The
              club strives to increase female representation and break down
              barriers in the Business Technology industry, shaping the
              future environment for women entering the field. This is
              accomplished through different events held within the club.
            </p>
          </div>
          <div class="homecard-container">
            <h3 class="results-headers">Our Purpose</h3>
            <p>
              In creating this information systems database, having a
              resource where members can easily access events allows for an
              easy retrieval of information from past events which can be
              seen in the Event Libarary. Additionally, click the Schedule
              tab to see upcoming events.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
<br />`;
});

// Load Schedule Page
r_e("schedulepage").addEventListener("click", () => {
  r_e("content_page").innerHTML = `<h1 class="title">UPCOMING EVENTS</h1>
  <br />
  <br />
  <div id="event_area"> 
  </div>`;
  show_events();
});

// Load Event Lib Page
r_e("eventlibpage").addEventListener("click", () => {
  r_e(
    "content_page"
  ).innerHTML = `<h1 class="title">EVENT LIBRARY DATABASE SEARCH</h1>
  <br />

  <form class="eventlibform">
    <div class="eventlibform-row">
      <label class="eventlibsearchheading" for="textbox"
        >Event Keyword Search:</label
      >
      <input class="eventlibinput" type="text" id="textbox" name="textbox" />
    </div>

    <div class="eventlibform-row">
      <label class="eventlibsearchheading" for="dropdown">Event Type:</label>
      <select class="eventlibinput" id="dropdown" name="dropdown">
        <option value="option1">Any</option>
        <option value="option2">Speaker</option>
        <option value="option3">Networking</option>
        <option value="option4">Professional Development</option>
        <option value="option5">DEI</option>
        <option value="option6">Fundraiser</option>
        <option value="option7">Outreach</option>
      </select>
    </div>

    <div class="eventlibform-row">
      <label class="eventlibsearchheading" for="date">Select date:</label>
      <input class="eventlibinput" type="date" id="date" name="date" />
    </div>
  </form>
  <div class="submit-btn-container">
  <input class="eventlib-btn" id="submit_search" type="submit" value="Submit" />
</div>
  <br />
  <br />
  <h2 class="results" style="font-weight: bold">Results:</h2>
  <div class="eventlib-results" id="event_lib_results">
  </div>`;
  show_event_library();

  // Event Library Event Search Code
  r_e("submit_search").addEventListener("click", () => {
    console.log("event search submitted");
    let keyword_search = r_e("keyword_search").value;
    let event_type_search = r_e("typesearch_dropdown").value;
    let date_search = r_e("search_date").value;

    let searched_event = {
      keyword: keyword_search,
      type: event_type_search,
      date: date_search,
    };

    console.log(searched_event);
  });
});

// Load Add Events Page
r_e("addeventspage").addEventListener("click", () => {
  r_e("content_page").innerHTML = `<h1 class="title">EVENT INFORMATION</h1>
  <br />

  <form class="addeventform" id="addeventform">
    <div class="form-row">
      <div class="addeventform-row">
        <label class="addeventheading" for="textbox">Event Title:</label>
        <input
          class="addeventinput"
          type="text"
          id="add_name"
          name="textbox"
        />
      </div>

      <div class="addeventform-row">
        <label class="addeventheading" for="dropdown">Event Type:</label>
        <select class="addeventinput" id="add_dropdown" name="dropdown">
          <option value="Speaker">Speaker</option>
          <option value="Networking">Networking</option>
          <option value="PD">Professional Development</option>
          <option value="DEI">DEI</option>
          <option value="Fundraiser">Fundraiser</option>
          <option value="Outreach">Outreach</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="addeventform-row">
        <label class="addeventheading" for="date">Latest Event Date:</label>
        <br />
        <input class="dateinput" type="date" id="add_date" name="date" />
      </div>
    </div>

    <div class="form-row">
      <div class="addeventform-row">
        <label class="addeventheading" for="textbox"
          >Event Description:</label
        >
        <textarea
          style="width: 230%; height: 70%"
          id="add_description"
          class="addeventinput"
        ></textarea>
      </div>
    </div>
  </form>
  <br />
  <div class="submit-container">
    <button class="eventlib-btn" id="add_enter">Enter</button>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>`;

  // Add events to the Database
  function r_e(id) {
    return document.querySelector(`#${id}`);
  }

  function img_type(event_type) {
    if (event_type == "Speaker") {
      return "images/Speaker_Event_icon.png";
    }
    if (event_type == "Networking") {
      return "images/networking_icon.png";
    }
    if (event_type == "PD") {
      return "images/professional_development_icon.png";
    }
    if (event_type == "DEI") {
      return "images/DEI_icon.png";
    }
    if (event_type == "Fundraiser") {
      return "images/fundraiser_icon.png";
    }
    if (event_type == "Outreach") {
      return "images/community_outreach_icon.jpeg";
    }
  }

  r_e("add_enter").addEventListener("click", () => {
    let event_name = r_e("add_name").value;
    let event_type = r_e("add_dropdown").value;
    let event_date = r_e("add_date").value;
    let event_description = r_e("add_description").value;
    let image = img_type(event_type);

    let event = {
      name: event_name,
      type: event_type,
      date: event_date,
      description: event_description,
      image_id: image,
    };

    db.collection("event library")
      .add(event)
      .then(() => {
        r_e("addeventform").reset();
      });
  });
});

//Login Modal Functionality
auth.signOut();
var login_status = 0;

login = r_e("login");

modalHome = r_e("modalHome");

const closeModal = document.getElementById("close-modal");

login.addEventListener("click", () => {
  if (login_status == 1) {
    // User is signed in.
    login.innerHTML = "Login";
    console.log("In if statement");
    login_status = 0;
  } else {
    // No user is signed in.
    r_e("login_form").reset();
    modalHome.classList.add("is-active");
  }
});

closeModal.addEventListener("click", () => {
  modalHome.classList.remove("is-active");
});

r_e("login_reset").addEventListener("click", () => {
  r_e("login_form").reset();
});

r_e("signUp_btn").addEventListener("click", () => {
  let email = r_e("user_name").value;
  let password = r_e("main_pass").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      login_status = 1;

      // reset the form
      r_e("login_form").reset();

      // hide the modal
      modalHome.classList.remove("is-active");

      //change login button to sign out
      login.innerHTML = "Sign Out";
    })
    .catch((error) => {
      alert("Incorrect email or password");
      r_e("login_form").reset();
    });
});

// Get Todays Date Function
var today = new Date();
var day = String(today.getDate()).padStart(2, "0"); // Pad with leading zero if necessary
var month = String(today.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based, Pad with leading zero if necessary
var year = today.getFullYear();
var todayDate = year + "-" + month + "-" + day;

// Event Schedule Pulling From the Database
function show_events() {
  db.collection("event library")
    .where("date", ">=", todayDate)
    .get()
    .then((data) => {
      let mydocs = data.docs;

      let html1 = ``;
      let html2 = ``;
      let html3 = ``;

      let doc_num = mydocs.length;

      let count = 1;
      for (let i = 0; i < mydocs.length; i++) {
        if (count == 1) {
          html1 += print_event(mydocs[i]);
        }
        if (count == 2) {
          html2 += print_event(mydocs[i]);
        }
        if (count == 3) {
          html3 += print_event(mydocs[i]);
        }

        if (count < 3) {
          count = count + 1;
        } else {
          count = 1;
        }
      }

      let html = `<div class="columns">
    <div class="column" id="col1">${html1}</div>
    <div class="column">${html2}</div>
    <div class="column" id="col3">${html3}</div>
    </div>`;

      r_e("event_area").innerHTML = html;
    });
}

function print_event(doc) {
  return `
  <div class="schedule-card">
  <div class="schedule-card-container">
    <h2 class="event-title">${doc.data().name}</h2>
    <br />
    <h3 class="schedule-date" style="font-style: italic">
      Event Date: ${doc.data().date}
    </h3>
    <br />
    <img
       src= ${doc.data().image_id}
      alt=""
      width="25%"
      height="40%"
      style="padding-top: 10px; padding-bottom: 10px"
    />
    <p>
    ${doc.data().description}
    </p>
  </div>
</div>
  `;
}

// Event Library Pulling From the Database
function show_event_library() {
  db.collection("event library")
    .get()
    .then((data) => {
      let mydocs = data.docs;

      let html_event = ``;

      let doc_num = mydocs.length;

      let count = 1;
      for (let i = 0; i < mydocs.length; i++) {
        html_event += print_event_lib(mydocs[i]);
      }
      r_e("event_lib_results").innerHTML = html_event;
      // Edit & Delete Buttons in Event Library
      const editButtons = document.querySelectorAll(".edit-btn");
      const deleteButtons = document.querySelectorAll(".delete-btn");
      const editModal = document.getElementById("edit-modal");
      const deleteModal = document.getElementById("delete-modal");
      const EditcloseModal = document.getElementById("edit-close-modal");
      const DeletecloseModal = document.getElementById("delete-close-modal");

      editButtons.forEach((button) => {
        button.addEventListener("click", () => {
          editModal.classList.add("is-active");
        });
      });

      deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
          deleteModal.classList.add("is-active");
        });
      });

      EditcloseModal.addEventListener("click", () => {
        editModal.classList.remove("is-active");
      });

      DeletecloseModal.addEventListener("click", () => {
        deleteModal.classList.remove("is-active");
      });
    });
}

function print_event_lib(doc) {
  if (login_status == 1) {
    return `<div class="card-container">
  <div class="results-flex">
    <div class="event-flex">
      <h3 class="event-title">
        Event: <span id="event-title">${doc.data().name}</span>
      </h3>
      <h3 class="results-headers">
        Event Type: <span id="event-type-text">${doc.data().type}</span>
      </h3>
      <h3 class="results-headers">
        Latest Event Date: <span id="event-date-text">${doc.data().date}</span>
      </h3>
      <p id="event-description">
        ${doc.data().description}
      </p>
    </div>
    <div class="edit-delete-buttons">
      <button class="edit-btn" id="edit-button">Edit</button>
      <button class="delete-btn" id="delete-button">Delete</button>
    </div>
  </div>
</div>`;
  } else {
    return `<div class="card-container">
  <div class="results-flex">
    <div class="event-flex">
      <h3 class="event-title">
        Event: <span id="event-title">${doc.data().name}</span>
      </h3>
      <h3 class="results-headers">
        Event Type: <span id="event-type-text">${doc.data().type}</span>
      </h3>
      <h3 class="results-headers">
        Latest Event Date: <span id="event-date-text">${doc.data().date}</span>
      </h3>
      <p id="event-description">
        ${doc.data().description}
      </p>
    </div>
  </div>
</div>`;
  }
}
