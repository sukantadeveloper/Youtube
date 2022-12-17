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
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {MdMic} from 'react-icons/md'

function Navbar() {
    const[searchbar,setSearchBar]=useState(false);
    const { setLoading, setData, search, setSearch, seError, error } = useContext(Context);
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

        fetchData(`search/?q=${search}`).
            then((res) => {
                setData(res.contents);
                setLoading(false);
                console.log("try");
            })
            .catch((error) => {
                seError(true);
                console.log("catch");
            })
    }, [search])

    console.log(error, "error");
    return (
        <div>


            <Flex zIndex={'10'} width={'100%'} position={'fixed'} bg='#0E0E0F' p='12px 25px' minWidth='max-content' alignItems='center' justifyContent={'space-between'} >
              {searchbar?"":
                <Box w={'25%'} display='flex' alignItems='center' >
                    <Box display={{ base: "none", md: "block", lg: "block" }} >   <HiOutlineBars3 size={'25px'} color='white' /> </Box>
                    <Link to='/'>    <Img w={{ base: "132px", md: "120px", lg: "128px" }} h={{ base: "20px", md: "20px", lg: "25px" }} pl={{ base: "-10px", md: "17px", lg: "17px" }} src="https://youtube-reactjs-clone-123.netlify.app/static/media/yt-logo.d6505fbc930734374cea.png" />
                    </Link>
                </Box>}

                {searchbar?<Box zIndex={'10'} w={'90%'} color='white' display={{ base: "flex", md: "block", lg: "block" }} alignItems='center' justifyContent={'space-between'}>
                   <BsFillArrowLeftCircleFill size={'20px'} bg='white' onClick={()=>setSearchBar(false)}/>
                    <Flex w='80%' bg='#121212' display={'flex'} alignItems={'center'} border='1px solid #888989' borderRadius={'25px'} >
                         
                        <Input h='40px' border={'none'} borderRadius={'25px 0px 0px 25px'} w='90%' type="text" onChange={handleChnage} ref={va} placeholder='Search' color={'#888888'} fontWeight='400' />
                        <Box _hover={{ cursor: 'pointer' }} borderRadius={'0px 25px 25px 0px'} p='0px 5px 0px 15px' display={'flex'} alignItems={'center'} bg={'#222222'} h='40px' w={'60px'}> <IoSearchOutline size={'20px'} /></Box>
                    </Flex>
                    <Text> <MdMic size={'22px'}/></Text>
                </Box>:""}


                <Box w={'50%'} display={{ base: "none", md: "block", lg: "block" }}>
                    <Flex bg='#121212' display={'flex'} alignItems={'center'} border='1px solid #888989' borderRadius={'25px'} >

                        <Input h='40px' border={'none'} borderRadius={'25px 0px 0px 25px'} w='90%' type="text" onChange={handleChnage} ref={va} placeholder='Search' color={'#888888'} fontWeight='400' />
                        <Box _hover={{ cursor: 'pointer' }} borderRadius={'0px 25px 25px 0px'} p='0px 5px 0px 15px' display={'flex'} alignItems={'center'} bg={'#222222'} h='40px' w={'10%'}> <IoSearchOutline size={'20px'} /></Box>
                    </Flex>
                </Box>

                {/* big screen */}
                <Box w={'25%'} display={{ base: "none", md: "block", lg: "block" }}>
                    <Flex ml={'40%'} justifyContent='space-around'  >
                        <BiVideoPlus size={'30px'} />
                        <IoIosNotificationsOutline size='30px' />
                        <VscAccount size='29px' />
                    </Flex>

                </Box>
                {/* mobile screen logo */}
                {searchbar?"":
                <Flex w='25%' display={{ base: "flex", md: "none", lg: "none" }} justifyContent='space-between'> 
                <IoSearchOutline size={'20px'} onClick={()=>setSearchBar(true)}/>
                  <VscAccount size='20px' />
                   </Flex>}
            </Flex>

        </div>
    );
}

export default Navbar;