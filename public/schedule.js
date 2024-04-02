function r_e(id) {
    return document.querySelector(`#${id}`);
  };

  r_e('testing').addEventListener('click', () =>{
    print_data('IBM Speaker', '03/03/2024', 'This event will take place on Zoom at 5pm featuring Kristyn Arends from IBM. Please come prepared with questions to ask her!')

  });



  function print_data(title,date,desc){
    r_e('event_area').innerHTML =         
        `<div class="schedule-card">
        <div class="schedule-card-container">
          <div class="card-header">
            <h2 class="results-headers">${title}</h2>
          </div>
          <br />
          <h3 class="schedule-date" style="font-style: italic">
            Event Date: ${date}
          </h3>
          <br />
          <img
             src="images/Speaker_Event_icon.png"
            alt=""
            width="25%"
            height="40%"
            style="padding-top: 10px; padding-bottom: 10px"
          />
          <p>
          ${desc}
          </p>
        </div>
      </div>`
  };


  db.collection("event library").get().then((data) => {
    let mydocs = data.docs;

    let html = ``;
    mydocs.forEach((doc) => {

      let title = doc.data().name;

      html += `

      <div class="box" id="${doc.id}">

          <h1 class="subtitle has-text-weight-bold"> ${doc.data().title} 
            <span class="is-pulled-right is-clickable has-background-danger p-3" onclick = "deleteDoc('${
              doc.id
            }')" >X</span>
          
          </h1>
          <p>Added by: ${doc.data().added_by}</p>
          <p>${doc.data().desc}</p>        
      </div>
      
      `;
    });
    content.innerHTML = html;
  });

  function show_events(title, date, img, desc){
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
            <h2 class="results-headers">${title}</h2>
          </div>
          <br />
          <h3 class="schedule-date" style="font-style: italic">
            Event Date: ${date}
          </h3>
          <br />
          <img
             src=${img}
            alt=""
            width="25%"
            height="40%"
            style="padding-top: 10px; padding-bottom: 10px"
          />
          <p>
          ${desc}
          </p>
        </div>
      </div>
        
        `;
      });
      content.innerHTML = html;
    });
  }