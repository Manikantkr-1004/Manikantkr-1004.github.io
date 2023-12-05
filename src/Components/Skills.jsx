import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import html from "../Components/Files/HTML.png";
import css from "../Components/Files/CSS.png";
import javascript from "../Components/Files/javascript.png";
import chakra_ui from "../Components/Files/chakra_ui.png";
import express from "../Components/Files/express.png";
import tailwind from "../Components/Files/tailwind.png";
import github from "../Components/Files/github.png";
import mongodb from "../Components/Files/mongodb.png";
import angular from "../Components/Files/angular.png";
import prompt from "../Components/Files/prompt_engineering.png";
import nodejs from "../Components/Files/nodejs.png";
import postman from "../Components/Files/postman.png";
import react from "../Components/Files/react.png";
import redux from "../Components/Files/redux.png";
import typescript from "../Components/Files/typescript.png";
import styled_components from "../Components/Files/styled_components.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// AOS.init();



const Skills = ({theme})=>{

    useEffect(() => {
        AOS.init({
            
        });
      }, []);
      //data-aos="zoom-in-up" data-aos-duration="800"


    return <Flex display="block" id="skills" w="100%" p="50px 0px 90px 0px">

        <Heading color='#FE9119' textAlign="center" as="h3" size="md" fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>Tech <span style={{color: theme? "black":"white"}}>Skills</span></Heading>

        <SimpleGrid className="skill-box" alignContent="center" gap="35px" columns={{base:2,sm:3,md:4,lg:7,xl:7}} w="85%" m="auto" mt="70px" color={theme? "black":"white"} >
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="61%" m="auto" src={html} alt="html" /><br/>
                <Text className="skills-card-name">HTML</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="62%" m="auto" src={css} alt="css" /><br/>
                <Text className="skills-card-name">CSS</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="60%" m="auto" src={javascript} alt="javascript" /><br/>
                <Text className="skills-card-name">JavaScript</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="75%" m="auto" src={react} alt="react" /><br/>
                <Text className="skills-card-name">React</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="69%" m="auto" src={redux} alt="redux" /><br/>
                <Text className="skills-card-name">Redux</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="67%" m="auto" src={chakra_ui} alt="chakra_ui" /><br/>
                <Text className="skills-card-name">Chakra UI</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w= "67%" m="auto" src={postman} alt="postman" /><br/>
                <Text className="skills-card-name">Postman</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="63%" m="auto" src={typescript} alt="typescript" /><br/>
                <Text className="skills-card-name">TypeScript</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="66%" m="auto" src={mongodb} alt="mongodb" /><br/>
                <Text className="skills-card-name">Mongo DB</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="60%" m="auto" src={nodejs} alt="nodejs" /><br/>
                <Text className="skills-card-name">Node JS</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" filter={theme?"none":"invert(100%)"} w="69%" m="auto" src={express} alt="express" /><br/>
                <Text className="skills-card-name">Express</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="80%" m="auto" src={tailwind} alt="tailwind" /><br/>
                <Text mt="10px" className="skills-card-name">Tailwind</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" filter={theme?"none":"invert(100%)"} w="63%" m="auto" src={github} alt="github" /><br/>
                <Text className="skills-card-name">GitHub</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card" p="30px 10px 15px 10px">
                <Image className="skills-card-img" w="60%" m="auto" src={styled_components} alt="styled" /><br/>
                <Text className="skills-card-name">Styled Components</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" w="63%" m="auto" src={angular} alt="angular" /><br/>
                <Text className="skills-card-name">Angular</Text>
            </Box>
            <Box background={theme?"transparent":"#1A202C"} className="skills-card">
                <Image className="skills-card-img" filter={theme?"none":"invert(100%)"} w="63%" m="auto" src={prompt} alt="prompt_engineering" /><br/>
                <Text className="skills-card-name">Prompt Engineering</Text>
            </Box>
        </SimpleGrid><br/><br/>
        
    </Flex>
}

export default Skills;