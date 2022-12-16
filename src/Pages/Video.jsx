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

        <Box display={'flex'} ml={'30px'} pt='70px' w={'90%'} m='auto' justifyContent={'space-around'}>
            <Box width={'60%'} position='sticky' height='500px' >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                    controls
                    width="100%"
                    height={"100%"}
                    style={{ backgroundColor: "#000000" }}
                    playing={true}
                />
                <Box border={'1px solid red'} h='155px'>



                    <Text> {ViewDetails.description}</Text>




                </Box>

            </Box>
            <Box width="30%" className='rec_parent' position={'sticky'} overflow='scroll' h={'100vh'} >
                <Recomendation />

            </Box>
        </Box>
    );
}

export default Video;