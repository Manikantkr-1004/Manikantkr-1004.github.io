import { Flex,Text,Heading, Box, Image } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coder from "../Components/Files/coder.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// AOS.init();




const About = ({theme})=>{

    useEffect(() => {
        AOS.init();
      }, []);

    const tick = <FontAwesomeIcon size="md" icon={faCheckCircle} />

    return <>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1400 280" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 64.80133185349611,200.4821309655938 129.60266370699222,200.96426193118756 176,218 C 222.39733629300778,235.03573806881244 250.39067702552722,268.62508324084354 306,272 C 361.6093229744728,275.37491675915646 444.8346281908989,248.53540510543843 505,243 C 565.1653718091011,237.46459489456157 602.2708102108768,253.2332963374029 643,253 C 683.7291897891232,252.7667036625971 728.0821309655939,236.53140954495007 785,209 C 841.9178690344061,181.46859045504993 911.4006659267479,142.6410654827969 967,157 C 1022.5993340732521,171.3589345172031 1064.315205327414,238.90432852386238 1111,235 C 1157.684794672586,231.09567147613762 1209.3385127635959,155.74162042175362 1265,138 C 1320.6614872364041,120.25837957824639 1380.3307436182022,160.1291897891232 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill={theme?"#Fff":"#1A202C"} fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        <Flex display="block" id="about" className="about section" background={theme? "white" :"#1A202C"} w="100%">
            <Heading pt="30px" color='#FE9119' textAlign="center" as="h3" size="md" fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>About <span style={{color: theme? "black":"white"}}>Me</span></Heading>

            <Flex justifyContent="space-between" m="auto" w="85%" color={theme? "#000":"#fff"} mt="30px" direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row"}} >
                <Box data-aos="zoom-in" data-aos-duration="800" width={{base:"100%",sm:"100%",md:"100%",lg:"48%",xl:"48%"}} size="fixed" ><Image m="auto" pointerEvents={'none'} size="fixed" style={{filter: "hue-rotate(155deg)"}} width={{base:"100%",sm:"90%",md:"70%",lg:"90%",xl:"90%"}} src={coder} alt="coder" /></Box>
                <Box data-aos="zoom-in" data-aos-duration="800" width={{base:"100%",sm:"100%",md:"100%",lg:"48%",xl:"48%"}} fontSize="17px" textAlign="justify"><br/>
                    <Text id="user-detail-intro" fontWeight="semibold">{tick} Experienced full stack web developer proficient in MERN stack with a strong track record of building solo and collaborative projects. Adaptable and eager to embrace generative AI, showcasing the ability to swiftly learn new tech stacks. A valuable addition to any team, blending technical expertise with exceptional problem-solving and communication skills.</Text><br/>
                    <Text fontWeight="semibold">{tick} Now, I am enthusiastic about applying my talents in a Full Stack Web Developer role, contributing to cutting-edge projects and creating user-friendly solutions. Let's collaborate to build exceptional web experiences and drive innovation in the digital realm.</Text>
                </Box>

            </Flex>
        </Flex>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 210" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 128.64285714285717,221.96428571428572 257.28571428571433,243.92857142857144 390,258 C 522.7142857142857,272.07142857142856 659.5,278.25 786,263 C 912.5,247.74999999999997 1028.7142857142858,211.07142857142858 1136,197 C 1243.2857142857142,182.92857142857142 1341.642857142857,191.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill={theme? "white" :"#1A202C"} fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0-0" transform="rotate(-180 720 200)"></path></svg>
    </>
}

export default About;