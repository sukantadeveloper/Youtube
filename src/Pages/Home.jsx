import { Box, Center, Flex, Grid, GridItem, Img, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import LeftMenuBar from '../Components/LeftMenuBar';
import { Context, loading } from '../Context/ContextApi';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/leftMenubar.css'
import { useEffect } from 'react';
import { fetchData } from '../Utils/Api';
import { Link } from 'react-router-dom';
function Home() {
    const { data, error, setData, loading } = useContext(Context);
    console.log(data, "q");
    console.log(data, "name");
    // useEffect(()=>{
    //     fetchData();
    // })

    return (
        <Box paddingTop={'75px'} display='flex' w='100%'>
            <Box w={'22%'} pl='15px'>
                <LeftMenuBar />
            </Box>
            <Box w={'80%'}  >
                {error ? "Error" : ""}
                {loading ?
                    <Flex h='100vh'>
                        <Box w='90%' margin={'auto'} >
                            <Spinner
                                thickness='14px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                                width='205px'
                                height='205px'
                            /> </Box> </Flex> : ""}

                <SimpleGrid columns={[2, 3, 4]} spacing='10px' key={Math.random()} >
                    {
                        data.length > 0 ?

                            data.map((ele) => (
                                <Link to={`/video/${ele.video.videoId}`}>
                                    <Box key={Math.random()} width={'100%'} _hover={{ cursor: 'pointer' }}>

                                        <Img p='10px' borderRadius={'20px'} w='100%' src={ele.video?.thumbnails[0]?.url} alt="" />
                                        <Flex p={'10px'}> <Img borderRadius={'50%'} w='30px' h={'30px'} src={ele.video?.author?.avatar[0]?.url} />
                                            <span className='video_title'>{ele.video?.title} </span>
                                        </Flex>
                                        <Flex fontSize={'12px'} p='0px 50px 0px 55px' alignItems={'center'}>
                                            <Text pr={'5px'}>   {ele.video?.author?.title}</Text>
                                            {ele.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                                <BsFillCheckCircleFill />
                                            )}
                                        </Flex>
                                        <Flex fontSize={'12px'} p='0px 50px 0px 55px' justifyContent={'space-around'}> <span>{`${abbreviateNumber(ele.video?.stats?.views, 2)} views`}</span>
                                            <Text fontWeight={'bold'}>.</Text>
                                            <span> {ele.video?.publishedTimeText}</span></Flex>
                                    </Box> </Link>

                            ))
                            : "Sorry We are not found"
                    }


                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Home;