import React, {useContext, useRef, useState} from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Context from '../../store/Context';

const UserForm = () => {
  const [login, setLogIn] = useState(true); 
  const [error, setError] = useState(<></>);

  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(Context);

  const toggleHandler = () =>{
    setLogIn(prev=>!prev);
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    if(login){
        try{
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSNbeq9KlyPhl3JB44LQGZMmyfjgQNQus', {
            method:'POST',
            body:JSON.stringify({
                email:emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true
            }),
            headers:{
                'Content-Type':'application/json'
            }
            })
            const data = await res.json();
            
            if(res.ok){
              authCtx.userLogin(data.idToken, data.email);
              history.replace('/store');
            }else{
              throw new Error(data.error.errors[0].message)
            }

            emailRef.current.value = '';
            passwordRef.current.value = '';
        }catch(err){
            setError(<Alert variant='danger'>{err.message}</Alert>)
            setTimeout(()=>{setError(<></>)}, 2000)
        }
    }
    else{
      try{
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSNbeq9KlyPhl3JB44LQGZMmyfjgQNQus',{
          method:'POST',
          body:JSON.stringify({
            email:emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })

        const data = await res.json();
        
        if(!res.ok){  
          throw new Error(data.error.errors[0].message)
        }else{
          authCtx.userLogin(data.idToken, data.email)
          history.replace('/store');
        }

        emailRef.current.value = '';
        passwordRef.current.value = '';
        
      }catch(err){
        setError(<Alert variant='danger'>{err.message}</Alert>)
        setTimeout(()=>{setError(<></>)}, 2000)
      }
    }
  };
  
   return (
    <Container>
        <div className='w-50 mx-auto my-2'>
            {error}
        </div>
        <Form className='w-50 mx-auto p-2 my-2 shadow-lg rounded bg-dark text-light' onSubmit={submitHandler}>
            <h3 className='mx-auto my-2 w-25 border-bottom border-info text-center'>{login?'Login':'Signup'}</h3>
            <Form.Group className='mb-3'>
                <Form.Label>Your Email</Form.Label>
                <Form.Control type='email' id='email' ref={emailRef}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Your Password</Form.Label>
                <Form.Control type='password' id='password' ref={passwordRef}/>
            </Form.Group>
            <div className='my-2 w-100 text-center'>
                <Button  type='submit' variant='info' size='md'>{login?'Login':'Create Account'}</Button>
            </div>
            <div className='my-2 w-100 text-center'>
                <Button onClick={toggleHandler} size='sm' variant='outline-info'>{login?'Create new account':'Login with existing account'}</Button>
            </div>
        </Form>
    </Container>
  )
}

export default UserForm