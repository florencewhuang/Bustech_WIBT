function r_e(id) {
    return document.querySelector(`#${id}`);
  };


r_e("add_enter").addEventListener('click', () =>{
    console.log("enter clicked");
    let event_name = r_e('add_name').value;
    let event_type = r_e('add_dropdown').value;
    let event_date = r_e('add_date').value;
    let event_description = r_e('add_description').value;

    let event = {
      name: event_name,
      type: event_type,
      date: event_date,
      description: event_description
    };
    console.log(event);

    db.collection('event library').add(event)
    .then(()=>{
      r_e("addeventform").reset();
    });

  });