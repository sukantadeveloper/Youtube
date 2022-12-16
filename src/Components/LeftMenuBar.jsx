import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai'
import { RxVideo } from 'react-icons/rx'
import { AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { Divider } from '@chakra-ui/react'
import { Context } from '../Context/ContextApi';
function LeftMenuBar() {
    const { setLoading, setData, search, setSearch, seError } = useContext(Context);

    const Category = (e) => {
        setSearch(e);
    }

 
    return (
        <Box className='parent' w={"20%"} bg='#0E0E0F'  h='100vh' position={'fixed'} overflow='scroll' scrollBehavior={'smooth'} pt='20px' >
            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
                <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} value="Home"
                    onClick={() => Category("New")} >
                    <AiFillHome size='25px' />
                    <Text pl='15px'> Home</Text>
                </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Shorts")}>
                <RxVideo size={'25px'} />
                <Text pl='15px'> Shorts</Text>
            </Box>
            </Box>

            
            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Trending")}>
                <MdLocalFireDepartment size={'25px'} />
                <Text pl='15px'> Trending</Text>
            </Box>

            </Box>


            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Films")}>
                <FiFilm size={'25px'} />
                <Text pl='15px'> Films</Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Home")}>
                <MdLiveTv size={'25px'} />
                <Text pl='15px'> Live</Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Music")}>
                <CgMusicNote size={'25px'} />
                <Text pl='15px'> Music</Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Learning")}>
                <RiLightbulbLine size={'25px'} />
                <Text pl='15px'> Learning</Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}
            mb='10px'
            >
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Sports")}>
                <GiDiamondTrophy size={'25px'} />
                <Text pl='15px'> Sports</Text>
            </Box>
            </Box>
            <Divider width={'90%'} m='auto' />
            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                 margin: '10px 10px 0px 10px',
              
            }}
          mt='10px'
            >
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} >
                <FiSettings size={'25px'} />
                <Text pl='15px'> Seetings </Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Home")}>
                <AiOutlineFlag size={'25px'} />
                <Text pl='15px'> Report History </Text>
            </Box>
            </Box>

            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Home")}>
                <FiHelpCircle size={'25px'} />
                <Text pl='15px'> Help</Text>
            </Box>
            </Box>
            <Box _hover={{
                cursor: "pointer",
                background: "#272727",
                color: "white",
                borderRadius: '15px',
                margin: '0px 10px 0px 10px'
            }}>
            <Box p={'10px 10px 10px 30px'} display='flex' alignItems={'center'} onClick={() => Category("Home")}>
                <RiFeedbackLine size={'25px'} />
                <Text pl='15px'> Send FeedBack </Text>
            </Box>
            </Box>
        </Box >
    );
}

export default LeftMenuBar;