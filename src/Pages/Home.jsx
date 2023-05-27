import { Box, Center, Flex, Grid, GridItem, Img, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import LeftMenuBar from '../Components/LeftMenuBar';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/leftMenubar.css'
import { Link } from 'react-router-dom';
import VideoLength from '../ExtraElement/VideoLength';
import { useDispatch, useSelector } from 'react-redux';
function Home() {
    const { loading, data, error } = useSelector((state) => state.video);
    // const {setsearch}=useSelector((state)=>state.searchState)
    const dispatch = useDispatch();


    if (loading) {
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
                /> </Box> </Flex>
    }
    if (error) {
        return (
            <Box bg={'white'} h='100vh' display={'grid'} placeContent='center'>
                <Img h='50vh' src="https://my.tradeinvalet.com/Content/Images/Error_Image.gif" /> </Box>

        )

    }


    return (
        <Box paddingTop={'75px'} display='flex' w='99%' >
            <Box w={{ base: "0%", md: "25%", lg: "20%" }} >
                <LeftMenuBar />
            </Box>
            <Box w={{ base: "100%", md: "70%", lg: "80%" }} m='auto'    >
                {loading ? <Flex h='100vh'>
                    <Box w='90%' margin={'auto'} >
                        <Spinner
                            thickness='14px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                            width='205px'
                            height='205px'
                        /> </Box> </Flex> :
                    <Box w='100%'>
                        {data.length > 0 ?
                            <SimpleGrid columns={[1, 2, 2, 4]} spacing='15px' >
                                {
                                    data.map((ele) => (
                                        <Box key={ele.video?.thumbnails[0]?.url + Math.random()}> 
                                    { ele.video?.thumbnails[0]?.url? 
                                         <Link to={`/video/${ele.video?.videoId}`} key={Math.random()}>
                                            <Box width={'97%'} m='auto' _hover={{ cursor: 'pointer' }}  >

                                                <Box
                                                    backgroundImage={ele.video?.thumbnails[0]?.url}
                                                    p='5px' borderRadius={{ base: '2px', md: '15px', lg: '15px' }} w='100%'
                                                    h={{ base: "170px", md: "150px", lg: "150px" }}
                                                    display='flex'
                                                    justifyContent={'flex-end'}
                                                    alignItems='end'
                                                >
                                                    <VideoLength time={ele.video?.lengthSeconds} />


                                                </Box>
                                                <Flex p={'10px'}> <Img borderRadius={'50%'} w='30px' h={'30px'} src={ele.video?.author?.avatar[0]?.url} />
                                                    <Text fontSize={{ base: '12px', md: '12px', lg: '15px' }} className='video_title'>{ele.video?.title} </Text>
                                                </Flex>
                                                <Flex fontSize={'12px'} p='0px 50px 0px 55px' alignItems={'center'} w='max-content' m='auto'>
                                                    <Text pr={'5px'}>   {ele.video?.author?.title}</Text>
                                                    {ele.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                                        <BsFillCheckCircleFill />
                                                    )}
                                                </Flex>
                                                <Flex fontSize={'12px'} w='max-content' justifyContent={'space-around'} m='auto'>

                                                    <Text>{`${abbreviateNumber(ele.video?.stats?.views, 2)} views`}</Text>


                                                    <Text p="0px 5px 0px 5px" fontWeight={'bold'}>.</Text>
                                                    <Text> {ele.video?.publishedTimeText}</Text>

                                                </Flex>


                                            </Box>

                                        </Link> :"" }</Box>

                                    ))

                                }


                            </SimpleGrid>
                            : <Flex h='100vh'>
                                <Box w='90%' margin={'auto'} >
                                    No internet
                                </Box> </Flex>}
                    </Box>
                }
                {/* <Flex position={'sticky'} bg='red' bottom={'0px'} >
                    <Box _hover={{
                        cursor: "pointer",
                        background: "#272727",
                        color: "white",
                    }}>
                        <Box p={'10px 10px 10px 30px'} display='block' alignItems={'center'} value="Home"
                            onClick={() => Category("New")} >
                           <Box>  <AiFillHome size='25px' /></Box>
                            <Text > Home</Text>
                        </Box>
                    </Box>

                    <Box _hover={{
                        cursor: "pointer",
                        background: "#272727",
                        color: "white",


                    }}>
                        <Box p={'10px 10px 10px 30px'} display='block' alignItems={'center'} onClick={() => Category("Shorts")}>
                            <RxVideo size={'25px'} />
                            <Text > Shorts</Text>
                        </Box>
                    </Box>


                    <Box _hover={{
                        cursor: "pointer",

                        color: "white",

                    }}>
                        <Box p={'10px 10px 10px 30px'} display='block' alignItems={'center'} onClick={() => Category("Trending")}>
                            <MdLocalFireDepartment size={'25px'} />
                            <Text > Trending</Text>
                        </Box>

                    </Box>


                    <Box _hover={{
                        cursor: "pointer",

                    }}>
                        <Box p={'10px 10px 10px 30px'}  textAlign='center' border={'1px solid black'} alignItems={'center'} onClick={() => Category("Films")}>
                            <FiFilm size={'25px'}  border={'1px solid black'}/>
                            <Text display={'block'} w={'50px'} margin='auto'> Films</Text>
                        </Box>
                    </Box>

                </Flex> */}
            </Box>
            {/* } */}
        </Box>
    );
}

export default Home;