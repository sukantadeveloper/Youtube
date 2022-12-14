import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { Context, loading } from '../Context/ContextApi';

function Home() {
    const { query, loading } = useContext(Context);
    console.log(query, "q");
    return (
        <Box paddingTop={'75px'}>
            

            {loading ? <h1> Loading</h1> : 
                query ?
                    query.map((ele) => (
                        <Box key={Math.random()}>
                            <Text>{ele.video.descriptionSnippet} </Text>
                            <img src={ele.video.thumbnails[0].url} alt="" />
                        </Box>
                    ))
                    : ""
            }
        </Box>
    );
}

export default Home;