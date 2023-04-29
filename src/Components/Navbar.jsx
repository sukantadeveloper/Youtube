import { Box, Button, ButtonGroup, Flex, Heading, Img, Input, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import '../Styles/navbar.css'
import { fetchData } from '../Utils/Api';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { VscAccount } from 'react-icons/vsc'
import { Link, Navigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdMic } from 'react-icons/md'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useDispatch, useSelector } from 'react-redux';
import { displayData, updateSearch } from '../Redux/Action';

function Navbar() {
    const { loading, data } = useSelector((state) => state.video);
    const { setsearch } = useSelector((state) => state.searchState);
    const [searchbar, setSearchBar] = useState(false);
    const {
        transcript,
        listening,
        resetTranscript
    } = useSpeechRecognition();
    const va = useRef("");
    // function debounce(fn, delay) {
    //     let id;
    //     return function () {
    //         clearTimeout(id);
    //         id = setTimeout(() => {
    //             fn();
    //         }, delay)
    //     }
    // }

    const handleChnage = (x => {


    })

    const handleClick = () => {
        if (va.current.value) {
            getdata();
        }
    }
    const handlepress = (e) => {
        if (va.current.value) {
            if (e.key == "Enter") {
                getdata();
            }
        }

    }

    const getdata = () => {
        dispatch(updateSearch(va.current.value));

        return <Navigate to='/' />
    }



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(displayData(setsearch));

    }, [setsearch])

    console.log(setsearch, "data");
    const record = (e) => {
       // SpeechRecognition.startListening({ continuous: true })
    }
    return (
        <div>


            <Flex zIndex={'10'} width={'99%'} position={'fixed'} bg='#0E0E0F' p='12px 25px' alignItems='center' justifyContent={'space-between'} >
                {searchbar ? "" :
                    <Box w={'25%'} display='flex' alignItems='center' >
                        <Box display={{ base: "none", md: "block", lg: "block" }} >   <HiOutlineBars3 size={'25px'} color='white' /> </Box>
                        <Link to='/'>    <Img w={{ base: "132px", md: "120px", lg: "128px" }} h={{ base: "20px", md: "20px", lg: "25px" }} pl={{ base: "-10px", md: "17px", lg: "17px" }} src="https://youtube-reactjs-clone-123.netlify.app/static/media/yt-logo.d6505fbc930734374cea.png" />
                        </Link>
                    </Box>}
                {/* mobile screen */}
                {searchbar ? <Box zIndex={'10'} w={'99%'} color='white' display={{ base: "flex", md: "block", lg: "block" }} alignItems='center' justifyContent={'space-between'}>
                    <BsFillArrowLeftCircleFill size={'20px'} bg='white' onClick={() => setSearchBar(false)} />
                    <Flex w='80%' bg='#121212' display={'flex'} alignItems={'center'} border='1px solid #888989' borderRadius={'25px'} >

                        <Input h='40px' border={'none'} borderRadius={'25px 0px 0px 25px'} w='90%' type="text" onChange={handleChnage} ref={va} placeholder='Search' color={'#888888'} fontWeight='400' />
                        <Box _hover={{ cursor: 'pointer' }} onClick={handleClick} borderRadius={'0px 25px 25px 0px'} p='0px 5px 0px 15px' display={'flex'} alignItems={'center'} bg={'#222222'} h='40px' w={'60px'}> <IoSearchOutline size={'20px'} /></Box>
                    </Flex>
                    <Text> <MdMic size={'22px'} onClick={record} /></Text>
                </Box> : ""}


                <Box w={'50%'} display={{ base: "none", md: "block", lg: "block" }}>
                    <Flex bg='#121212' display={'flex'} alignItems={'center'} border='1px solid #888989' borderRadius={'25px'} >

                        <Input h='40px' border={'none'} borderRadius={'25px 0px 0px 25px'} w='90%' type="text" onChange={handleChnage} onKeyPress={handlepress} ref={va} placeholder='Search' color={'#888888'} fontWeight='400' />
                        <Box _hover={{ cursor: 'pointer' }} onClick={handleClick} borderRadius={'0px 25px 25px 0px'} p='0px 5px 0px 15px' display={'flex'} alignItems={'center'} bg={'#222222'} h='40px' w={'10%'}> <IoSearchOutline size={'20px'} /></Box>
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
                {searchbar ? "" :
                    <Flex w='25%' display={{ base: "flex", md: "none", lg: "none" }} justifyContent='space-between'>
                        <IoSearchOutline size={'20px'} onClick={() => setSearchBar(true)} />
                        <VscAccount size='20px' />
                    </Flex>}
            </Flex>

        </div>
    );
}

export default Navbar;