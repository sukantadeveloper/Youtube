import { Box, Grid, GridItem, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import LeftMenuBar from '../Components/LeftMenuBar';
import { Context, loading } from '../Context/ContextApi';
import '../Styles/leftMenubar.css'
function Home({data}) {
    const { query, loading } = useContext(Context);
    console.log(query, "q");
    console.log(data,"name");
    return (
        <Box paddingTop={'75px'} display='flex' h={'100vh'}  w='100%'>
            <Box w={'22%'} pl='15px'>
                <LeftMenuBar />
            </Box>
            <Box w={'80%'} border='2px solid green'>
                  <SimpleGrid columns={[2, 3, 5]} spacing='10px' key={Math.random()} border='2px solid yellow'>
                    {loading ? <h1> Loading</h1> :
                        query ?

                            query.map((ele) => (

                                <Box width={'100%'} border='2px solid pink'>

                                    <Img w='100%' src={ele.video?.thumbnails[0]?.url} alt="" />
                                    <Text>{ele.video?.descriptionSnippet} </Text>
                                </Box>

                            ))
                            : ""
                    }
                     </SimpleGrid>
                     </Box>
         </Box>
    );
}

export default Home;