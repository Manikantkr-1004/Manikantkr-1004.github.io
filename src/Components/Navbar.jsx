import {Box, Flex, useDisclosure} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import {  MobileMenu } from "./MobileMenu";
import { FaDownload, FaBars } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { downloadResume } from "../Utils/PdfDownload";

const Navbar = ({theme,setTheme})=>{

    const { isOpen, onOpen, onClose } = useDisclosure()
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

      const handleThemeToggle = () => {
        scroll.scrollToTop();
        setTheme(!theme);      
      };
    

    return <Flex id="nav-menu" align="center" justifyContent="space-between" height="60px" w="100%"
    p={{base:"0px 8px", sm: "0px 8px", md: "0px 30px", lg: "0px 30px", xl: "0px 30px", "2xl": "0px 30px" }} 
    boxShadow={theme && isSticky ? "rgba(0, 0, 0, 0.603) 0px 3px 8px" : theme === false && isSticky ? "rgba(236, 236, 236, 0.603) 0px 3px 8px" : ""}
    background={theme? "#EDF2F8":"#0F1624"} fontFamily="bahnschrift"
    position='fixed' top="0" zIndex="99">

        <Flex className="logo-image">{theme? <img src={'/Images/logo_light.gif'} alt="manikant-logo" /> : <img src={'/Images/logo.gif'} alt="manikant-logo" />}</Flex>
        
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
              to="experience" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box className="nav-link experience">Experience</Box>
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
            <Box onClick={downloadResume} id="resume-button-1" className="nav-link resume">Resume{" "}<FaDownload style={{display:"inline-block"}} /></Box>
            <Box onClick={handleThemeToggle}>{theme ? <IoIosMoon size='27px' style={{marginBottom:'8px'}} /> : <IoIosSunny size='27px' style={{marginBottom:'8px'}} />}</Box>
        </Flex>

        <Flex display={{base:"flex", sm: "flex", md: "flex", lg: "none", xl: "none", "2xl": "none" }} 
        justifyContent="space-between" gap="20px" h="100%" align="center" cursor="pointer"
         fontSize="20px" color={theme? "black" :"white"} >
        <Box onClick={handleThemeToggle}>{theme ? <IoIosMoon size='24px' /> : <IoIosSunny size={'24px'} />}</Box>
        <Box onClick={()=> onOpen()} className="menu"><FaBars /></Box>
        </Flex>

        <MobileMenu isOpen={isOpen} onClose={onClose} />

    </Flex>
}

export default Navbar;
