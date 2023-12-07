import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Box,Text
  } from '@chakra-ui/react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDownload } from '@fortawesome/free-solid-svg-icons';
import wall from "./Files/wall.jpg"


export const MobileMenu=({theme, isOpen, onOpen, onClose})=> {

  const close = <FontAwesomeIcon shake size='xl' icon={faClose} />
  const download = <FontAwesomeIcon size="md" icon={faDownload} />
  

  const handleResume = ()=>{
        
    const anchor = document.createElement('a');
    anchor.href = process.env.PUBLIC_URL+ "/Resume/" + "Manikant-Kumar-Resume.pdf";
    anchor.download = 'Manikant-Kumar-Resume.pdf';
    anchor.click();
    window.open("https://drive.google.com/file/d/1HA6KcSjx-O_iH3h-VipGc8vVNrXgjTPg/view?usp=sharing","_blank")
  }
    

    return (
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent backgroundImage={wall} backgroundSize="cover" backgroundRepeat="no-repeat">
        <Text onClick={()=> onClose()} w="30px" cursor="pointer" color="white" m="5px 0px 0px 10px" fontSize="23px" fontWeight="bold">{close}</Text>
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
            <Box onClick={handleResume} cursor="pointer" background="#FE9119" m="auto" fontSize="20px" fontFamily="arial black" fontWeight="bold" 
            borderRadius="15px" color="black" w="150px" p="5px 10px">Resume {download}</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}
