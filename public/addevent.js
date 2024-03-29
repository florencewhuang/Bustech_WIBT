function r_e(id) {
    return document.querySelector(`#${id}`);
  };


r_e("add_enter").addEventListener('click', () =>{
    console.log("enter clicked");
    let event_name = r_e('add_name').value;
    let event_type = r_e('add_dropdown').value;
    let event_date = r_e('add_date').value;
    let event_description = r_e('add_description').value;
    console.log(event_name,event_type, event_date, event_description);
  });