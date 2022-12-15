import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(true);
  const [successAlert, setSuccessAlert] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    
    if(!email.includes('@') || email.length<=0 || fullName.length<=0 || phone.length<=0){
        setValid(false);
        setEmail('');
        setFullName('');
        setPhone('');
    }

    else{
        setValid(true);
        const contactData = {
            fullName:fullName,
            email:email,
            phone:phone,
        } 

        try{
            const res = await fetch('https://ecommerce-app-7640f-default-rtdb.firebaseio.com/contactData.json', {
                method: 'POST',
                body: JSON.stringify(contactData),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(!res.ok){
                throw new Error("Could not post your data");
            }
            
            setSuccessAlert(true);
            setTimeout(()=>{setSuccessAlert(false)}, 3000);
            setEmail('');
            setFullName('');
            setPhone('');
            
        }catch(err){
            console.log(err.message);
        }
    }
  };
  return (
    <Container>
      <h3 className="mx-auto bg-danger p-1 text-light w-25 text-center my-3">
        Contact Info
      </h3>
      <Form
        className="border border-danger w-50 mx-auto rounded my-2 p-2 "
        onSubmit={formSubmitHandler}
      >
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="e.g. John Doe" value={fullName} onChange={(e)=>{setFullName(e.currentTarget.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="e.g. johndoe@gmail.com" value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="text" placeholder="e.g. +91" value={phone} onChange={(e)=>{setPhone(e.currentTarget.value)}} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            {valid?`Your details will be kept confidential.`:`Please enter correct details`}
          </Form.Text>
        </Form.Group>

        <Button variant={valid?"primary":"danger"} type="submit">
          Submit Details
        </Button>
      </Form>
      {successAlert&&<Alert className="w-50 mx-auto" variant="success">Your contact info has been received!</Alert>}
    </Container>
  );
};

export default Contact;
