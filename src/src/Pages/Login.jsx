import { Box, Button, Center, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const initial = {
    password: '',
    username: '',
  }
  const [details, setDetails] = useState(initial);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setDetails({...details, [name]:value})
  }
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard');
  }
  const handleSubmit = () => {
    if(details.username==='' || details.password==='' ) {
      alert('please fill all details')
      return;
  }
    
    console.log(details, 'details')
    fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
    .then((res) => {
      {res.message && alert(res.message)}
      {res.error===false && alert('Login Successfull!')}
      {res.error===false && goToDashboard()}
      {res.token && localStorage.setItem('token', res.token)}
    })
    .catch((err) => {
    })
  }

  return (
    <Box w='50%' m='auto' border='1px solid gray' p='20px' mt='30px' borderRadius={'10px'}>
      <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input mb='10px' name='username' placeholder='' onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    mb='10px'
                    name='password'
                    onChange={handleInputChange}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Center><Input mt='30px' bg='teal' color='#fff' w='50%' onClick={handleSubmit} type={'submit'}/></Center>
    </Box>
  )
}
