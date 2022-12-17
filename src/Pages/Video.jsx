import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context/ContextApi';
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
function Video() {
    const { loading, setLoading } = useContext(Context);
    const [ViewDetails, SetViewDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchData(`/video/details/?id=${id}`)
            .then((res) => {
                SetViewDetails(res);
                // console.log(res,"Ayega")
            })
    }, [id])
    console.log(ViewDetails, 'view');

    return (

        <Box display={'flex'} ml={'30px'} pt='70px' w={'100%'} m='auto' justifyContent={'space-evenly'}>
            <Box width={'65%'} position='sticky' height='500px' >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                    controls
                    width="100%"
                    height={"100%"}
                    style={{ backgroundColor: "#000000" }}
                    playing={true}
                />
                <Box  h='155px'>
                    <Text fontSize='18px' fontWeight={'bold'} textAlign={'start'}>{ViewDetails?.title} </Text>

                    <Flex justifyContent={'space-between'}>
                        <Flex w='53%' display='flex' alignItems={'center'} >

                            <Img m='5px' borderRadius={'50%'} w='50px' h={'50px'} src={ViewDetails?.author?.avatar[0]?.url} />
                            <Box display={'block'} w='45%'>
                                <Flex fontSize={'18px'} p='5px' alignItems={'center'}>
                                    <Text fontWeight='bold' pr={'5px'}>   {ViewDetails?.author?.title}</Text>
                                    {ViewDetails?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill size={'12px'} />
                                    )}
                                </Flex>
                                <Text p='0px 5px 0px 5px' textAlign={'start'} fontSize={'12px'}> {ViewDetails?.author?.stats?.subscribersText}</Text>
                            </Box>
                            <Flex w='45%' justifyContent='space-between' >
                                <Text bg='#272727' _hover={{ cursor: "pointer" }} textAlign={'center'} borderRadius='15px' fontWeight={'medium'} p={'5px 20px 5px 20px'}> Join</Text>
                                <Text bg='white' _hover={{ cursor: "pointer" }} color={'black'} borderRadius='17px' fontWeight={'medium'} p={'5px 20px 5px 20px'}> Subscribe</Text>
                            </Flex>

                        </Flex>

                        <Flex w={'45%'}  alignItems={'center'} justifyContent='space-around'>
                            <Flex alignItems={'center'} bg={'#272727'} p='10px' h='36px' w='32%' justifyContent={'space-between'} _hover={{ cursor: "pointer" }} color={'white'} borderRadius='17px'>
                                <Flex alignItems={'center'} width='70px' >
                                    <BiLike size={'20px'} />
                                    <Text pl='5px' fontSize={'16px'}> {abbreviateNumber(ViewDetails?.stats?.likes, 2)}</Text>
                                </Flex>
                                <BiDislike size={'20px'} />
                            </Flex>
                            <Flex color={'white'} justifyContent={'space-around'} w='25%' alignItems={'center'}bg='#272727' p={'5px'} borderRadius='18px'>

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
            <Box width="25%" className='rec_parent' position={'sticky'} overflow='scroll' h={'100vh'} >
                <Recomendation />

            </Box>
        </Box>
    );
}

export default Video;