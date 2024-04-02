function r_e(id) {
    return document.querySelector(`#${id}`);
  };

  function img_type(event_type){
    if(event_type=="Speaker"){
      return('images/Speaker_Event_icon.png')
    };
    if(event_type=="Networking"){
      return('images/networking_icon.png')
    };
    if(event_type=='PD'){
      return('images/professional_development_icon.png')
    };
    if(event_type=='DEI'){
      return('images/DEI_icon.png')
    };
    if(event_type=='Fundraiser'){
      return('images/fundraiser_icon.png')
    };
    if(event_type=='Outreach'){
      return('images/community_outreach_icon.jpeg')
    };
  };

r_e("add_enter").addEventListener('click', () =>{
    console.log("enter clicked");
    let event_name = r_e('add_name').value;
    let event_type = r_e('add_dropdown').value;
    let event_date = r_e('add_date').value;
    let event_description = r_e('add_description').value;
    let image = img_type(event_type);

    let event = {
      name: event_name,
      type: event_type,
      date: event_date,
      description: event_description,
      image_id: image
    };
    console.log(event);

    db.collection('event library').add(event)
    .then(()=>{
      r_e("addeventform").reset();
    });

  });