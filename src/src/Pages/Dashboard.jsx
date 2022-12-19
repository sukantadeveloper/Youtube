import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { SuccessData } from '../Redux/action';

const currPageCheck = (val) => {
  let value = Number(val);
  if(typeof value !== 'number' || value < 0 ) {
    value = 1;
  }
  if(!value) {
    value = 1;
  }
  return value;
}
export const Dashboard = () => {
  const dispatch = useDispatch();
  const { githubUsers} = useSelector((state) => state)
  const [search, setSearch] = useState('');
  const [searchParam, setSearchParams] = useSearchParams();
  const [pages, setPage] = useState(currPageCheck(searchParam.get('pages')||1));
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }
  const handleClick = () => {
    searchData();
  }
  const searchData = () => {
    fetch(`https://api.github.com/users/${search}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(SuccessData(data))
    })
  }
  const getData = () => {
    fetch(`https://api.github.com/users?page=${pages}&per_page=5`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(SuccessData(data))
    })
  }
  useEffect(() => {
    getData();
  },[])
  useEffect(() => {
    getData();
  },[pages])
  useEffect(() => {
    let params = {pages};
    setSearchParams(params)
  },[pages])
  return (
    <Box>
      <Flex w='50%' m='20px auto'>
        <Input mr='10px' type='search' onChange={handleOnChange}/>
        <Button onClick={handleClick}>Search</Button>
      </Flex>
      <Box w='50%' m='auto'>
        {
          githubUsers.length>0 ? 
          githubUsers.map(el => (
            <Box key={el.id} border='1px solid gray' mb='10px'>
              <Image w='100%' src={el.avatar_url}/>
              <Text p='10px 0'>Username - {el.login}</Text>
            </Box> 
          )):
          <Box key={githubUsers.id} border='1px solid gray' mb='10px'>
              <Image w='100%' src={githubUsers.avatar_url}/>
              <Text>Username - {githubUsers.login}</Text>
            </Box> 
        }
      </Box>
      <Box mb='20px'>
        <Button mr='5px' disabled={pages===1} onClick={() => setPage(pages-1)}>Prev</Button>
        <Button mr='5px'>{pages}</Button>
        <Button onClick={() => setPage(pages+1)}>Next</Button>
      </Box>
    </Box>
  )
}
