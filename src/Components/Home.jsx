import {Flex, Heading, Text,Button} from "@chakra-ui/react"
import Typed from "typed.js";
import hi from "../Components/Files/hi.gif"
import manikant from "../Components/Files/manikant-kumar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelopeSquare, faPhoneSquare} from "@fortawesome/free-solid-svg-icons"
import React from "react";

const Home = ({theme})=>{

    const github = <FontAwesomeIcon size="xl" icon={faGithub} />
    const linkedin = <FontAwesomeIcon size="xl" icon={faLinkedin} />
    const phone = <FontAwesomeIcon size="xl" icon={faPhoneSquare} />
    const email = <FontAwesomeIcon size="xl" icon={faEnvelopeSquare} />
    const download = <FontAwesomeIcon size="md" icon={faDownload} />

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: [
            "Web Developer.",
            "Full Stack Developer.",
            "Mern Stack Developer."
        ],
        typeSpeed: 80, // Adjust the speed of each character being typed
        backSpeed: 10, // Adjust the speed of deleting each character when backspacing
        backDelay: 1000, // Add a delay before typing starts
        loop: true, // Enable continuous looping of the strings
        showCursor: true, // Show a blinking cursor
        cursorChar: '|', // Customize the cursor character
        fadeOut: false, // Enable fade out effect on loop end
        fadeOutDelay: 500, // Delay before fade out effect starts
        fadeOutClass: 'typed-fade-out', // CSS class for fade out effect
        fadeOutDelayMax: 1500,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    const handleResume = ()=>{
        
        const anchor = document.createElement('a');
        anchor.href = process.env.PUBLIC_URL+ "/Resume/" + "Manikant-Kumar-Resume.pdf";
        anchor.download = 'Manikant-Kumar-Resume.pdf';
        anchor.click();
        window.open("https://drive.google.com/file/d/1HA6KcSjx-O_iH3h-VipGc8vVNrXgjTPg/view?usp=sharing","_blank")
    }

    return <Flex id="home" className="about section" w="1050px" m="auto"
    justifyContent="space-between" pt={{base:"100px", sm:"100px",md:"100px", lg:"170px",xl:"170px"}}
    direction={{base:"column-reverse", sm:"column-reverse", md:"column-reverse",lg:"row",xl:"row"}}>
        <div>
           <Heading 
            justifyContent={{base:"center", sm:"center", md:"center",lg:"flex-start",xl:"flex-start"}}
            color={theme? "black" : "white"} 
            display="flex" alignItems="center" 
            fontFamily="papyrus" as="h3" 
            size="md" 
            fontSize={{base:"22px", sm:"24px", md:"27px",lg:"27px",xl:"27px"}}
            >Hello <span><img className="hiimage" src={hi} alt="hi" /></span>, My Name is</Heading>

           <Heading color={theme? "black" : "white"} id="user-detail-name"
            as="h3" size="lg" 
            fontSize={{base:"30px", sm:"45px", md:"50px",lg:"50px",xl:"50px"}}
            >Manikant Kumar</Heading>
           <br/>
           <Heading as="h4" size={{base:"md",sm:"lg",md:"lg",lg:"lg",xl:"lg"}} color={theme? "black" : "white"} >I'm a <span id="move-text" ref={el}></span></Heading>
           <br/>

           <Text id="user-detail-intro" color={theme? "black" : "white"}
            fontSize={{base:"15px", sm:"18px", md:"18px",lg:"18px",xl:"18px"}}
            fontWeight="semibold" letterSpacing="0.5px">I am a skilled full-stack web developer, proficient in both front-end and back-end technologies, dedicated to creating engaging and user-friendly web experiences.</Text>

            <br/>

           <Flex 
           margin={{base:"auto", sm:"auto", md:"auto",lg:"0px",xl:"0px"}}
           className="about-contact" height="45px" 
           width={{base:"70%", sm:"70%", md:"45%",lg:"45%",xl:"45%"}}
           justifyContent="space-between" alignItems="center">
            <Button textDecoration="none" _hover={{background:"white", color:"#FE9119"}} background="#FE9119" color="#000" border="2px solid #FE9119" borderRadius="50%" variant="unstyled"><a href="https://github.com/Manikantkr-1004" target="_blank">{github}</a></Button>
            <Button _hover={{background:"white", color:"#FE9119"}} background="#FE9119" color="#000" border="2px solid #FE9119" borderRadius="50%" variant="unstyled"><a href="https://www.linkedin.com/in/manikantofficial2023" target="_blank">{linkedin}</a></Button>
            <Button _hover={{background:"white", color:"#FE9119"}} background="#FE9119" color="#000" border="2px solid #FE9119" borderRadius="50%" variant="unstyled"><a href="tel:+918102675820" target="_blank">{phone}</a></Button>
            <Button _hover={{background:"white", color:"#FE9119"}} background="#FE9119" color="#000" border="2px solid #FE9119" borderRadius="50%" variant="unstyled"><a href="mailto:manikantobra@gmail.com" target="_blank">{email}</a></Button>
           </Flex>

           <br/>

           <Button onClick={handleResume} id="resume-button-2" rightIcon={download} _hover={{background:"none", color:"#FE9119",transform:"rotate(-3deg)"}} 
           background="#FE9119" color="#000" border="2px solid #FE9119" fontWeight="bold" transition="all 1s"
           variant="unstyled">Resume</Button>
        </div>
        <div>
            <img class="home-img" src={manikant} alt="manikant-photo" style={{boxShadow: theme? "0px 0px 15px 1px #555555" : "0px 0px 15px 1px #EDFBFF"}}/>
        </div>
    </Flex>
}

export default Home;