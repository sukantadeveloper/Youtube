import { Box, Button, Center, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Registration = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const initial = {
        name: '',
        email: '',
        password: '',
        username: '',
        description: '',
        mobile: ''
    }
    const [details, setDetails] = useState(initial);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setDetails({...details, [name]:value})
    }
    const navigate = useNavigate();
    const handleGo =() => {
        navigate('/login')
    }
    const handleSubmit = () => {
        if(details.name==='' || details.username==='' || details.password==='' || details.mobile==='' || details.description==='' || details.email==='') {
            alert('please fill all details')
            return;
        }
        console.log(details, 'details')
        fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            {res.error===false && res.message && alert(res.message)}
            {res.error===true ? alert(res.message) : handleGo()}
        }).catch((err) => {
            console.log(err);
        })
    }


  return (
    <Box w='50%' m='auto' border='1px solid gray' p='20px' mt='30px' borderRadius={'10px'}>
        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input mb='10px' name='name' onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input  type='email' name='email' mb='10px' onChange={handleInputChange} />
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
        <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input mb='10px' name='username' placeholder='' onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Mobile</FormLabel>
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input mb='10px' type='number' name='mobile' placeholder='phone number' onChange={handleInputChange} />
            </InputGroup>
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Input name='description' type={'text'} onChange={handleInputChange} />
        </FormControl>
        <Center><Input mt='30px' bg='teal' color='#fff' w='50%' onClick={handleSubmit} type={'submit'}/></Center>
    </Box>
  )
}
