import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context/ContextApi';
import { fetchData } from '../Utils/Api';
import { Box,  Img, Flex, Text } from '@chakra-ui/react';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/video.css'

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
                        <Link to={`/video/${ele.video.videoId}`}>
                            <Flex key={Math.random()} width={'350px'} _hover={{ cursor: 'pointer' }}>

                                <Img p='10px' borderRadius={'20px'} w='250px' src={ele.video?.thumbnails[0]?.url} alt="" />
                                <Box>
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
                    : "Sorry We are not found"
            }


        </div>
    );
}

export default Recommendation;