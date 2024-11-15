import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState(
    {
      fullname:'',
      phone:'',
      email:'',
      msg:''
    }
  );
  const InputEvent = (event) =>{
     const {name, value } = event.target;
     setData((preVal) =>{
      return {
        ...preVal,
        [name]: value,
      }
     })
  }
  
  const formSubmit  = (e) =>{
       e.preventDefault();
       alert(
        `My name is ${data.fullname}. My mobile number is ${data.phone}, and email is ${data.email}, here is what i want to say  ${data.msg}`
      );
  }


  return (
<>
    <div className="my-5">
      <h1 className="text-center">Contect Us</h1>
    </div>
    <div className="container contact_div">
    <div className="col-md-6 col-10 max-auto">
      <form onSubmit={ formSubmit }>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
 name="fullname"
 value={data.fullname}
 onChange={InputEvent}
  placeholder="Enter your name" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" 
  class="form-control" 
  id="exampleFormControlInput1" 
 name="phone"
 value={data.phone}
 onChange={InputEvent}
  placeholder="Mobile number" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
 name="email"
 value={data.email}
 onChange={InputEvent}
  placeholder="name@example.com" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1" 
   name="msg"
 value={data.msg}
 onChange={InputEvent}
  placeholder="name@example.com" 
   rows="2"></textarea>
  </div>
  <button class="btn btn-outline-primary" type="submit">
      Button
      </button>
</form>
    </div>
    </div>
   
</>
 
  );
}

export default Contact;