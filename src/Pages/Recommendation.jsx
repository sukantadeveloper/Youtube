import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../Utils/Api';
import { Box, Img, Flex, Text, Stack, Skeleton } from '@chakra-ui/react';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/video.css'
import VideoLength from '../ExtraElement/VideoLength';

function Recommendation() {
    const [recomendation, setrecomendation] = useState([]);
    const { id } = useParams();
    const fetchRecomendation = () => {
        //   setLoading(true);
        fetchData(`video/related-contents/?id=${id}`)
            .then((res) => {
                setrecomendation(res.contents);
                console.log(res.contents);
                //   setLoading(false);
            }).catch((err) => {

            })
    }
    useEffect(() => {
        fetchRecomendation();
    }, [id])
    return (
        <div>

            {
                recomendation.length > 0 ?

                    recomendation.map((ele) => (
                        <> { ele.video?.thumbnails[0]?.url?  <Link to={`/video/${ele.video?.videoId}`} key={Math.random()}>
                            {/* big screen */}
                            <Flex display={{ base: "none", md: "flex", lg: "flex" }} width={'350px'} _hover={{ cursor: 'pointer' }} p='5px'>

                                <Box
                                    backgroundImage={ele.video?.thumbnails[0]?.url}
                                    p='10px' borderRadius={'10px'} w='50%'
                                    h='90px'
                                    display='flex'
                                    justifyContent={'flex-end'}
                                    alignItems='end'
                                >
                                    <VideoLength time={ele.video?.lengthSeconds} />


                                </Box>
                                <Box w='50%'>
                                    <span className='rec_video_title'>{ele.video?.title} </span>

                                    <Flex fontSize={'12px'} pl='10px' alignItems={'center'} w='max-content' m='auto'>
                                        <Text pr={'5px'}>   {ele.video?.author?.title}</Text>
                                        {ele.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                            <BsFillCheckCircleFill />
                                        )}
                                    </Flex>
                                    <Flex fontSize={'12px'} justifyContent={'space-around'}> <span>{`${abbreviateNumber(ele.video?.stats?.views, 2)} views`}</span>
                                        <Text fontWeight={'bold'}>.</Text>
                                        <span> {ele.video?.publishedTimeText}</span></Flex>
                                </Box>
                            </Flex>
                            {/* mobile view */}
                            <Box p={'10px'} display={{ base: "block", md: "none", lg: "none" }} width={'100%'} _hover={{ cursor: 'pointer' }}>

                                {/* <Box
                              
                                    backgroundImage={ele.video?.thumbnails[0]?.url}
                                    backgroundRepeat='no-repeat'
                                    backgroundSize="190%"
                                    p='5px' borderRadius={{ base: '2px', md: '15px', lg: '20px' }} w='300px'
                                    h={{ base: "150px", md: "150px", lg: "150px" }}
                                    display='flex'
                                    justifyContent={'flex-end'}
                                    alignItems='end'
                                >
                                    <VideoLength time={ele.video?.lengthSeconds} />


                                </Box> */}
                                <Img w='360px' h={{ base: "170px", md: "150px", lg: "150px" }} m={'auto'} src={ele.video?.thumbnails[0]?.url} />
                                <Flex p={'10px 10px 2px 5px '}> <Img borderRadius={'50%'} w='30px' h={'30px'} src={ele.video?.author?.avatar[0]?.url} />
                                    <Text fontSize={{ base: '12px', md: '12px', lg: '15px' }} className='video_title'>{ele.video?.title} </Text>
                                </Flex>
                                <Flex fontSize={'12px'} p='0px 50px 0px 55px' alignItems={'center'} w='max-content' m='auto'>
                                    <Text pr={'5px'}>   {ele.video?.author?.title}</Text>
                                    {ele.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill />
                                    )}
                                </Flex>
                                <Flex maxWidth='330px' fontSize={'12px'} p='0px 50px 0px 55px' justifyContent={'space-around'}> <Text>{`${abbreviateNumber(ele.video?.stats?.views, 2)} views`}</Text>


                                    <Text p="0px 5px 0px 5px" fontWeight={'bold'}>.</Text>
                                    <Text> {ele.video?.publishedTimeText}</Text>

                                </Flex>


                            </Box>

                        </Link> :""}</>

                    ))
                    : <Box>  <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>
                        <br />
                        <br />
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>
                        <br /><br />
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>

                        <br /><br />
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack></Box>
            }


        </div>
    );
}

export default Recommendation;