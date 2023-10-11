import {Box, Flex,Button, useDisclosure} from "@chakra-ui/react"
import darklogo from "../Components/Files/logo.gif"
import lightlogo from "../Components/Files/logo_light.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import {  MobileMenu } from "./MobileMenu";

const Navbar = ({theme,setTheme})=>{

    const { isOpen, onOpen, onClose } = useDisclosure()
    const download = <FontAwesomeIcon size="md" icon={faDownload} />
    const bars = <FontAwesomeIcon size="lg" icon={faBars} />
    const moon = <FontAwesomeIcon size="lg" icon={faMoon} />
    const sun = <FontAwesomeIcon size="lg" icon={faSun} />
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const firstFlexHeight = 1;
          setIsSticky(window.pageYOffset >= firstFlexHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleThemeToggle = (e) => {
        e.preventDefault();
        setTheme(!theme);
      };

      const handleResume = ()=>{
        
        const anchor = document.createElement('a');
        anchor.href = process.env.PUBLIC_URL+ "/Resume/" + "Manikant_Kumar_Resume.pdf";
        anchor.download = 'Manikant_Kumar_Resume.pdf';
        anchor.click();
        window.open("https://drive.google.com/file/d/1jAipz8jJnwlDIziUStWQ-80aRMTC5Zvg/view?usp=sharing","_blank")
    }
    

    return <Flex id="nav-menu" align="center" justifyContent="space-between" height="60px" w="100%"
    p={{base:"0px 8px", sm: "0px 8px", md: "0px 30px", lg: "0px 30px", xl: "0px 30px", "2xl": "0px 30px" }} 
    boxShadow={theme && isSticky ? "rgba(0, 0, 0, 0.603) 0px 3px 8px" : theme === false && isSticky ? "rgba(236, 236, 236, 0.603) 0px 3px 8px" : ""}
    background={theme? "#EDF2F8":"#0F1624"} fontFamily="bahnschrift"
    position='fixed' top="0" zIndex="99">

        <Flex className="logo-image">{theme? <img src={lightlogo} alt="manikant-logo" /> : <img src={darklogo} alt="manikant-logo" />}</Flex>
        
        <Flex className="nav-sections" display={{base:"none", sm: "none", md: "none", lg: "flex", xl: "flex", "2xl": "flex" }}
        justify="space-between" gap="20px" h="100%" align="center"
        cursor="pointer" fontWeight="bold" fontSize="20px" color={theme? "black" :"white"}>
            <Link
              activeClass="active"
              spy={true}
              to="home" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box  className="nav-link home">Home</Box>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="about" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box className="nav-link about">About</Box>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="skills" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box className="nav-link skills">Skills</Box>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="projects" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box className="nav-link projects">Projects</Box>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="contact" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box className="nav-link contact">Contact</Box>
            </Link>
            <Box onClick={handleResume} id="resume-button-1" className="nav-link resume">Resume{" "}{download}</Box>
            {theme? <Box onClick={handleThemeToggle}>{moon}</Box> : <Box onClick={handleThemeToggle}>{sun}</Box>}
        </Flex>

        <Flex display={{base:"flex", sm: "flex", md: "flex", lg: "none", xl: "none", "2xl": "none" }} 
        justifyContent="space-between" gap="20px" h="100%" align="center" cursor="pointer"
         fontSize="20px" color={theme? "black" :"white"} >
        {theme? <Box onClick={handleThemeToggle}>{moon}</Box> : <Box onClick={handleThemeToggle}>{sun}</Box>}
        <Box onClick={()=> onOpen()} className="menu">{bars}</Box>
        </Flex>

        <MobileMenu theme={theme} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

    </Flex>
}

export default Navbar;
