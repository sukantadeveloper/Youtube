import React from 'react'
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box border='1px solid #dddde0' p='10px 20px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'><Link to={'registration'}>Registration</Link></Button>
                <Button colorScheme='teal'><Link to={'login'}>Login</Link></Button>
            </ButtonGroup>
        </Flex>
    </Box>
  )
}
