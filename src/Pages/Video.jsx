import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Utils/Api';
import ReactPlayer from 'react-player'
import { Box, Link, Img, Flex, Text } from '@chakra-ui/react';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import {HiDownload} from 'react-icons/hi'
import '../Styles/video.css'
import Recomendation from './Recommendation';
import { useDispatch, useSelector } from 'react-redux';
import { viewDetailsFetch } from '../Redux/Action';
function Video() {
   const {ViewDetails}=useSelector((state)=>state.viewState)
    const dispatch=useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(viewDetailsFetch(id));
    }, [id])
    return (

        <Box display={{base:"block", md:"flex", lg:"flex"}} ml={'30px'} pt={{base:"35px", md:"75px", md:"75px"}} w={'100%'} m='auto' justifyContent={'space-evenly'}>
            <Box width={{base:"100%", md:"65%", lg:"65%"}} position={{base:"fixed", md:"static", lg:"sticky"}}  height={{base:"250px", md:"500px", lg:"500px"}} >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                    controls
                    width="100%"
                    height={"100%"}
                    style={{ backgroundColor: "#000000" }}
                    playing={true}
                />
                <Box  bg='#0E0E0F'  p='7px'>
                    <Text fontSize={{base:"12px", md:"15px", lg:"18px"}} fontWeight={'bold'} textAlign={'start'}>{ViewDetails?.title} </Text>

                    <Flex justifyContent={'space-between'}>
                        <Flex w={{base:"100%", md:"53%", lg:"53%"}} display='flex' alignItems={'center'} >

                            <Img m='5px' borderRadius={'50%'}  w={{base:"30px", md:"40px", lg:"50px"}} h={{base:"30px", md:"40px", lg:"50px"}} src={ViewDetails?.author?.avatar[0]?.url} />
                            <Box display={'block'} w='45%'>
                                <Flex fontSize={{base:"10px", md:"15px", lg:"18px"}} p='5px' alignItems={'center'}>
                                    <Text fontWeight='bold' pr={'5px'}>   {ViewDetails?.author?.title}</Text>
                                    {ViewDetails?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill size={'12px'} />
                                    )}
                                </Flex>
                                <Text p='0px 5px 0px 5px' w='max-content' textAlign={'start'} fontSize={'12px'}> {ViewDetails?.author?.stats?.subscribersText}</Text>
                            </Box>
                            <Flex  w='45%'  justifyContent='space-between'  >
                                <Text display={{base:"none", md:"flex", lg:"flex"}} bg='#272727' _hover={{ cursor: "pointer" }} textAlign={'center'} borderRadius='15px' fontWeight={'medium'} p={'5px 20px 5px 20px'}> Join</Text>
                                <Text bg='white' _hover={{ cursor: "pointer" }} color={'black'} borderRadius='17px' fontWeight={'medium'} p={'5px 20px 5px 20px'}> Subscribe</Text>
                            </Flex>

                        </Flex>

                        <Flex w={'45%'}  alignItems={'center'} justifyContent='space-around' display={{base:"none", md:"flex", lg:"flex"}}>
                            <Flex alignItems={'center'} bg={'#272727'} p='10px' h='36px' w='32%' justifyContent={'space-between'} _hover={{ cursor: "pointer" }} color={'white'} borderRadius='17px'>
                                <Flex alignItems={'center'} width='70px' >
                                    <BiLike size={'20px'} />
                                    <Text pl='5px' fontSize={'16px'}> {abbreviateNumber(ViewDetails?.stats?.likes, 2)}</Text>
                                </Flex>
                                <BiDislike size={'20px'} />
                            </Flex>
                            <Flex  color={'white'} justifyContent={'space-around'} w='25%' alignItems={'center'}bg='#272727' p={'5px'} borderRadius='18px'>

                                <RiShareForwardLine />
                                <Text> Share</Text>

                            </Flex>
                            <Flex color={'white'} justifyContent={'space-around'} w='30%' alignItems={'center'}bg='#272727' p={'5px'} borderRadius='18px'>

                                <HiDownload />
                                <Text> Download</Text>

                            </Flex>
                        </Flex>
                    </Flex>

                </Box>

            </Box>
            <Box pt={{base:"340px", md:"0px", lg:"0px"}} overflow='scroll' h='100vh' width={{base:"100%", md:"25%", lg:"25%"}} className='rec_parent' >
                <Recomendation />

            </Box>
            {/* mobile */}
            {/* <Box pt={{base:"310px", md:"0px", lg:"0px"}} overflow='scroll' h='100vh' width={{base:"100%", md:"25%", lg:"25%"}} className='rec_parent' >
                <Recomendation />

            </Box> */}
        </Box>
    );
}

export default Video;