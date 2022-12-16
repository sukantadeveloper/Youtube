import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context/ContextApi';
import { fetchData } from '../Utils/Api';
import { Box, Img, Flex, Text, Stack, Skeleton } from '@chakra-ui/react';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/video.css'
import VideoLength from '../ExtraElement/VideoLength';

function Recommendation() {
    const { loading, setLoading } = useContext(Context);
    const [recomendation, setrecomendation] = useState([]);
    const { id } = useParams();
    const fetchRecomendation = () => {
        setLoading(true);
        fetchData(`/video/related-contents/?id=${id}`)
            .then((res) => {
                setrecomendation(res.contents);
                setLoading(false);
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
                        <Link to={`/video/${ele.video?.videoId}`} key={Math.random()}>

                            <Flex width={'350px'} _hover={{ cursor: 'pointer' }} p='5px'>

                                {/* <Img p='10px' borderRadius={'20px'} w='250px' src={ele.video?.thumbnails[0]?.url} alt="" /> */}
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

                                    <Flex fontSize={'12px'} pl='10px' alignItems={'center'}>
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

                        </Link>

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