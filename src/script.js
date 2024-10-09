
  function sendEmail(event){
    event.preventDefault();
  
    console.log(
      "button cliked"
    )
    const formData = new FormData(event.target);
    const paramsObj = {
      username: formData.get('username'),
      email:formData.get('email'),
      message: formData.get('message'),
      subject: formData.get('subject'), 
      phone: formData.get('phone')
    };
  
  
  
  
  
    emailjs.send(serviceId, templateId, paramsObj)
      .then((response)=>{ 
      document.getElementById('username').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('phone').value = "";
    
        alert("Email sent")
        console.log(response)
      
  
  
      })
      .catch((error)=>{
        console.log(error)
        alert("Couldn't send email check your Network connection ")
      })
  
  
    
  
    
  
  }
  