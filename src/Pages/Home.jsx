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
import VideoLength from '../ExtraElement/VideoLength';
function Home() {
    const { data, error, setData, loading } = useContext(Context);
    console.log(data, "q");
    console.log(data, "name");

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
            <Box w={{ base: "0%", md: "22%", lg: "22%" }} pl='15px'>
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
                                                    p='5px' borderRadius={'20px'} w='100%'
                                                    h={{ base: "200px", md: "150px", lg: "150px" }}
                                                    display='flex'
                                                    justifyContent={'flex-end'}
                                                    alignItems='end'
                                                >
                                                    <VideoLength time={ele.video?.lengthSeconds} />


                                                </Box>
                                                <Flex p={'10px'}> <Img borderRadius={'50%'} w='30px' h={'30px'} src={ele.video?.author?.avatar[0]?.url} />
                                                    <span className='video_title'>{ele.video?.title} </span>
                                                </Flex>
                                                <Flex fontSize={'12px'} p='0px 50px 0px 55px' alignItems={'center'}>
                                                    <Text pr={'5px'}>   {ele.video?.author?.title}</Text>
                                                    {ele.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                                        <BsFillCheckCircleFill />
                                                    )}
                                                </Flex>
                                                <Flex fontSize={'12px'} p='0px 50px 0px 55px' justifyContent={'space-around'}> <Text>{`${abbreviateNumber(ele.video?.stats?.views, 2)} views`}</Text>
                                                    <Text fontWeight={'bold'}>.</Text>
                                                    <span> {ele.video?.publishedTimeText}</span></Flex>
                                            </Box> </Link>

                                    ))

                                }


                            </SimpleGrid>
                            : <Flex h='100vh'>
                                <Box w='90%' margin={'auto'} >
                                    No internet
                                </Box> </Flex>}
                    </Box>
                }
            </Box>
            {/* } */}
        </Box>
    );
}

export default Home;