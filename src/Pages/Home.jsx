import { Box, Center, Flex, Grid, GridItem, Img, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import LeftMenuBar from '../Components/LeftMenuBar';
import { Context, loading } from '../Context/ContextApi';
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import '../Styles/leftMenubar.css'
import { useEffect } from 'react';
import { RxVideo } from 'react-icons/rx'
import { AiFillHome } from "react-icons/ai";
import { fetchData } from '../Utils/Api';
import { Link } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';
import { MdLocalFireDepartment } from 'react-icons/md';
import VideoLength from '../ExtraElement/VideoLength';
function Home() {
    const { data, error, setSearch, setData, loading } = useContext(Context);
    console.log(data, "q");
    console.log(data, "name");

    const Category = (e) => {
        setSearch(e);
    }

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
    console.log(loading);
    if (error) {
        return (
            <Img h='100vh' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc70c43b-aeca-448a-a158-0f8e7c281a0d/dceqwb1-a75b8ac9-8340-45bb-8049-4883b81baa3c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNzBjNDNiLWFlY2EtNDQ4YS1hMTU4LTBmOGU3YzI4MWEwZFwvZGNlcXdiMS1hNzViOGFjOS04MzQwLTQ1YmItODA0OS00ODgzYjgxYmFhM2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xmt2peugw4IY64xOXTkc3Q1IFo5T861ncwbHc1E4rhM" />

        )

    }


    return (
        <Box paddingTop={'75px'} display='flex' w='100%'>
            <Box w={{ base: "0%", md: "22%", lg: "22%" }} >
                <LeftMenuBar />
            </Box>
            <Box w={{ base: "100%", md: "80%", lg: "80%" }} >
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
                            <SimpleGrid columns={[1, 3, 4]} spacing='15px' w='98%' >
                                {
                                    data.map((ele) => (
                                        <Link to={`/video/${ele.video?.videoId}`} key={Math.random()}>
                                            <Box width={'100%'} _hover={{ cursor: 'pointer' }}>

                                                <Box
                                                    backgroundImage={ele.video?.thumbnails[0]?.url}
                                                    p='5px' borderRadius={{ base: '2px', md: '15px', lg: '20px' }} w='100%'
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
                                                <Flex fontSize={'12px'} p='0px 50px 0px 55px' alignItems={'center'}>
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

                                        </Link>

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