import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Box,Text
  } from '@chakra-ui/react'
import { Link } from 'react-scroll';
import { FaDownload } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { downloadResume } from '../Utils/PdfDownload';

export const MobileMenu=({isOpen, onClose})=> {    

    return (
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent backgroundImage={'/Images/wall.jpg'} backgroundSize="cover" backgroundRepeat="no-repeat">
        <Text onClick={()=> onClose()} w="30px" cursor="pointer" color="white" m="7px 0px 0px 7px" fontSize="32px" fontWeight="bold"><IoIosCloseCircle /></Text>
          <DrawerBody textAlign="center" color="white" p="0">
          <Link
              activeClass="active"
              spy={true}
              to="home" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box  onClick={()=> onClose()} className="nav-link-mobile home">Home</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="about" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile about">About</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="experience" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile experience">Experience</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="skills" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile skills">Skills</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="projects" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile projects">Projects</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="github" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile github">GitHub</Box>
            </Link><br/>
            <Link
              activeClass="active"
              spy={true}
              to="contact" //
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box onClick={()=> onClose()} className="nav-link-mobile contact">Contact</Box>
            </Link><br/>
            <Box onClick={downloadResume} cursor="pointer" background="#FE9119" m="auto" fontSize="20px" fontFamily="arial black" fontWeight="bold" 
            borderRadius="15px" color="black" w="150px" p="5px 10px">Resume <FaDownload style={{display:"inline-block"}} /></Box>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}
