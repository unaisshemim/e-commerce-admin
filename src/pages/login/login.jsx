
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import {login } from '../../Redux/apiCalls'


const Container = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #0e9696;




`;
const Wrapper = styled.div`
width:30%;
height: 50%;
padding: 20px;
display:flex;
border:1.5px solid teal;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
`;
const Title = styled.h1`
text-align:center`;
const Form = styled.form`
width:100%;
display:flex;
flex-direction:column;
`;
const Input = styled.input`
font-size:15px;
padding:5px;
margin:5px 0`;
const Button = styled.button`
padding: 10px;
font-size: 15px;
font-weight: 600;
margin: 5px 0;
background-color: #cfc9c9;
&:disabled{
    background-color: grey;
    cursor:not-allowed;
}
`;
const Link = styled.a`
text-decoration: underline;
margin: 5px 0;
cursor: pointer;
font-weight: 350;

`;
const Error=styled.span`
color:red;
font-size:12px;
`

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {isFetching,error}=useSelector(state=>state.user)

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        login(dispatch,{email,password})
    }
    
    
 
    return (
        <Container>
          <Wrapper>
              <Form >
                  <Title>Sign In </Title>
                  <Input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  <Input placeholder="password"  type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                  <Button onClick={(e)=>{handleSubmit(e)}} disabled={isFetching}>Sign In</Button>
                   {error && <Error>something went wrong .....</Error>}
                  <Link>Create new account</Link>
                  <Link>Forgot password</Link>

              </Form>
          </Wrapper>
        </Container>
    )
}

export default Login