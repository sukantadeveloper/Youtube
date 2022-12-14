import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import{RxVideo} from 'react-icons/rx'
import {  AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
function LeftMenuBar() {
    return (
        <Box border={'1px solid red'} h='100vh' p={'30px 30px 20px 30px'}>
            <Box pb={'25px'} display='flex' alignItems={'center'} >
                <AiFillHome size='25px'/>
                 <Text pl='15px'> Home</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <RxVideo size={'25px'}/>
                 <Text pl='15px'> Shorts</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <MdLocalFireDepartment size={'25px'}/>
                 <Text pl='15px'> Trending</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <FiFilm size={'25px'}/>
                 <Text pl='15px'> Films</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <MdLiveTv size={'25px'}/>
                 <Text pl='15px'> Live</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <CgMusicNote size={'25px'}/>
                 <Text pl='15px'> Music</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <RiLightbulbLine size={'25px'}/>
                 <Text pl='15px'> Learning</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <GiDiamondTrophy size={'25px'}/>
                 <Text pl='15px'> Sports</Text>
            </Box>
            <hr/>
            <Box pb={'25px'} display='flex' alignItems={'center'}  pt={'25px'}>
                <FiSettings size={'25px'}/>
                 <Text pl='15px'> Seetings</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <AiOutlineFlag size={'25px'}/>
                 <Text pl='15px'> Report History</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <FiHelpCircle size={'25px'}/>
                 <Text pl='15px'> Help</Text>
            </Box>
            <Box pb={'25px'} display='flex' alignItems={'center'}>
                <RiFeedbackLine size={'25px'}/>
                 <Text pl='15px'> Send FeedBack</Text>
            </Box>
        </Box >
    );
}

export default LeftMenuBar;