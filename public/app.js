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
  <input class="eventlib-btn" type="submit" value="Submit" />
</div>
  <br />
  <br />
  <h2 class="results" style="font-weight: bold">Results:</h2>
  <div class="eventlib-results">
    <div class="card-container">
      <div class="results-flex">
        <div class="event-flex">
          <h3 class="event-title">
            Event: <span id="event-title">Coffee & Bagels Social</span>
          </h3>
          <h3 class="results-headers">
            Event Type: <span id="event-type-text">Networking</span>
          </h3>
          <h3 class="results-headers">
            Latest Event Date: <span id="event-date-text">02/25/2024</span>
          </h3>
          <p id="event-description">
            For this event we catered bagels and coffee from Einstein Bros
            Bagels. We also did a speed networking activity with pre-written
            questions that you had to ask one another depending on what you
            and your partner's die landed on.
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn" id="edit-button">Edit</button>
          <button class="delete-btn" id="delete-button">Delete</button>
        </div>
      </div>
    </div>
        <div class="card-container">
          <div class="results-flex">
            <div class="event-flex">
              <h3 class="event-title">Event: Dragonfly Hot Yoga</h3>
              <h3 class="results-headers">Event Type: Fundraiser</h3>
              <h3 class="results-headers">Latest Event Date: 03/01/2024</h3>
              <p>
                This fundraiser is a one hour introductory hot yoga class from
                7:00 - 8:00 PM. Members can attend the event by paying $15 and
                filing out the sign up form on Flare. Members are also welcome
                to invite others outside of the club as well but they must
                also pay the fee and sign up appropriately.
              </p>
            </div>
            <div class="edit-delete-buttons">
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="results-flex">
            <div class="event-flex">
              <h3 class="event-title">Event: Adobe Event</h3>
              <h3 class="results-headers">Event Type: Speaker</h3>
              <h3 class="results-headers">Latest Event Date: 02/18/2024</h3>
              <p>
                This speaker event featured Sadie, a senior here at UW who has
                had an interesting journey that has lead her into tech sales
                with Adobe. She will be talking about how various sales
                concepts apply to our everday lives. Additionally, she will
                share her story on overcoming obstacles and making difficult
                career choices that have led her to speak with us today.
              </p>
            </div>
            <div class="edit-delete-buttons">
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

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

  editButtons.forEach((button) => console.log("yay"));

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
});

//Login Modal Functionality
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

// Event Schedule Pulling From the Database
// r_e("testing").addEventListener("click", () => {
//   show_events();
// });

function show_events() {
  db.collection("event library")
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
      //console.log(mydocs.length);

      let html = `<div class="columns">
    <div class="column" id="col1">${html1}</div>
    <div class="column">${html2}</div>
    <div class="column" id="col3">${html3}</div>
    </div>`;
      // mydocs.forEach((doc) => {
      //   html += `
      //   <div class="schedule-card">
      //   <div class="schedule-card-container">
      //     <div class="card-header">
      //       <h2 class="results-headers">${doc.data().name}</h2>
      //     </div>
      //     <br />
      //     <h3 class="schedule-date" style="font-style: italic">
      //       Event Date:${doc.data().date}
      //     </h3>
      //     <br />
      //     <img
      //        src= ${doc.data().image_id}
      //       alt=""
      //       width="25%"
      //       height="40%"
      //       style="padding-top: 10px; padding-bottom: 10px"
      //     />
      //     <p>
      //     ${doc.data().description}
      //     </p>
      //   </div>
      // </div>
      //   `;
      // });

      r_e("event_area").innerHTML = html;
    });
}

function print_event(doc) {
  return `
  <div class="schedule-card">
  <div class="schedule-card-container">
    <div class="card-header">
      <h2 class="results-headers">${doc.data().name}</h2>
    </div>
    <br />
    <h3 class="schedule-date" style="font-style: italic">
      Event Date:${doc.data().date}
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
