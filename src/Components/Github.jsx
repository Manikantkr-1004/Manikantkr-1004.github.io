import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Github = ({theme}) => {
    

    return (
        <Flex display="block" id="github" w="100%" p="50px 0px 0px 0px">
            <Heading color='#FE9119' textAlign="center" as="h3" size="md" fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>GitHub <span style={{color: theme? "black":"white"}}>OverView</span></Heading>

            <Flex data-aos="flip-up" data-aos-duration="800" className="react-activity-calendar" boxShadow="#FE9119 3px 3px 10px" background="#ffffff" justifyContent="center" p="20px 0px" borderRadius="10px" border="3px solid #FE9119" fontWeight="bold" w="85%" m="auto" mt="70px" color="black" mb="60px">
                <GitHubCalendar username="manikantkr-1004"  />
            </Flex>

            <SimpleGrid alignContent="center" gap="20px" columns={{base:1,sm:1,md:2,lg:3,xl:3}} w="85%" m="auto" color={theme? "black":"white"} mb="50px">
                <Box data-aos="fade-up" data-aos-duration="800"><Image boxShadow="#FE9119 3px 3px 10px" id="github-streak-stats" borderRadius="10px" border="3px solid #FE9119" w="100%" src='https://github-readme-streak-stats.herokuapp.com/?user=Manikantkr-1004&theme=default&hide_border=false' alt='streak' /></Box>
                <Box data-aos="fade-up" data-aos-duration="800"><Image boxShadow="#FE9119 3px 3px 10px" id="github-top-langs" borderRadius="10px" border="3px solid #FE9119" w="100%" src='https://github-readme-stats.vercel.app/api/top-langs/?username=Manikantkr-1004&theme=default&hide_border=false&include_all_commits=false&count_private=false&layout=compact' alt='language' /></Box>
                <Box data-aos="fade-up" data-aos-duration="800"><Image boxShadow="#FE9119 3px 3px 10px" id="github-stats-card" borderRadius="10px" border="3px solid #FE9119" w="100%" src='https://github-readme-stats.vercel.app/api?username=Manikantkr-1004&theme=default&hide_border=false&include_all_commits=false&count_private=false' alt='stats' /></Box>
            </SimpleGrid>
            {/* className='git-cards'  */}

        </Flex>
    )
}

export default Github;