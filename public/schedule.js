function r_e(id) {
    return document.querySelector(`#${id}`);
  };

  r_e('testing').addEventListener('click', () =>{
    show_events()
  });


  function show_events(){
    db.collection("event library")
    .get()
    .then((data) => {
      let mydocs = data.docs;

      let html = ``;
      mydocs.forEach((doc) => {
        html += `
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
      });

      r_e('event_area').innerHTML = html;
    });
  };