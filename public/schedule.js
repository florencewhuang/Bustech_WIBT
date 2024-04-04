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

      let html1 = ``;
      let html2 = ``;
      let html3 = ``;

      let doc_num = mydocs.length;

      let count = 1;
      for (let i = 0; i < mydocs.length; i++) {
        if(count == 1){
          html1 += print_event(mydocs[i])
        }
        if(count ==2){
          html2 += print_event(mydocs[i])
        }
        if(count == 3){
          html3 += print_event(mydocs[i])
        }

        if(count<3){
          count = count +1;
        }
        else{
          count = 1
        }
      };
      //console.log(mydocs.length);

      let html = 
      `<div class="columns">
      <div class="column" id="col1">${html1}</div>
      <div class="column">${html2}</div>
      <div class="column" id="col3">${html3}</div>
      </div>`
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

      r_e('event_area').innerHTML = html;
    });
  };

  function print_event(doc){
    return(`
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
    `)
  }