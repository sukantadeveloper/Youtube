import { Box, Button, ButtonGroup, Flex, Heading, Img, Input, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Context } from '../Context/ContextApi';
import '../Styles/navbar.css'
import { fetchData } from '../Utils/Api';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

function Navbar() {
    const { setLoading, setData, search, setSearch, seError } = useContext(Context);
    const va = useRef("");
    function debounce(fn, delay) {
        let id;
        return function () {
            clearTimeout(id);
            id = setTimeout(() => {
                fn();
            }, delay)
        }
    }

    const handleChnage = debounce(x => {
        getdata();
    }, 1000)


    const getdata = () => {
        setSearch(va.current.value);
    }

    useEffect(() => {
        setLoading(true);
        
        fetchData(`search/?q=${search}`).then((res) => {
            try {
                setData(res.contents);
                setLoading(false);
                console.log("try");
            } catch (error) {
                seError(true);
                console.log("catch");
            }

        })
    }, [search])
    return (
        <div>


            <Flex zIndex={'10'} width={'100%'} position={'fixed'} bg='#0E0E0F' p='12px 25px' minWidth='max-content' alignItems='center' >
                <Box w={'25%'} display='flex' alignItems='center' >
                    <HiOutlineBars3 size={'25px'} color='white' />
                    <Link to='/'>    <Img w={'128px'} h='25px' pl='19px' src="https://youtube-reactjs-clone-123.netlify.app/static/media/yt-logo.d6505fbc930734374cea.png" />
                    </Link>
                </Box>
                <Box w={'50%'} >
                    <Flex bg='#121212' display={'flex'} alignItems={'center'} border='1px solid #888989' borderRadius={'25px'} >

                        <Input h='40px' border={'none'} borderRadius={'25px 0px 0px 25px'} w='90%' type="text" onChange={handleChnage} ref={va} placeholder='Search' color={'#888888'} fontWeight='400' />
                        <Box _hover={{ cursor: 'pointer' }} borderRadius={'0px 25px 25px 0px'} p='0px 5px 0px 15px' display={'flex'} alignItems={'center'} bg={'#222222'} h='40px' w={'10%'}> <IoSearchOutline size={'20px'} /></Box>
                    </Flex>
                </Box>


                <Box w={'25%'}>
                    <Flex ml={'40%'} justifyContent='space-around'  >
                        <BiVideoPlus size={'30px'} />
                        <IoIosNotificationsOutline size='30px' />
                        <VscAccount size='29px' />
                    </Flex>
                </Box>
            </Flex>

        </div>
    );
}

export default Navbar;