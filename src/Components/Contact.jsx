import { Box, Button, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, SimpleGrid, Text, Textarea, useToast } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faHeart, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import loadimg from "./Files/load.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Contact = ({theme})=>{

    const github = <FontAwesomeIcon size="xl" icon={faGithub} />
    const linkedin = <FontAwesomeIcon size="xl" icon={faLinkedin} />
    const phone = <FontAwesomeIcon size="xl" icon={faPhoneSquare} />
    const email = <FontAwesomeIcon size="xl" icon={faEnvelopeSquare} />
    const heart = <FontAwesomeIcon size="sm" beatFade icon={faHeart} />
    const toast = useToast();
    const [load,setLoad] = useState(false);

    const [formdata,setFormdata] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e)=>{
        const {value,name} = e.target;
        setFormdata({...formdata,[name]:value})
    }

    const [state, handleSubmit] = useForm("xbjvgdap");

    const handleButton = ()=>{
        if(formdata.name!=="" && formdata.email!=="" && formdata.email.length>10 && formdata.message!==""){
            setLoad(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (state.succeeded) {
                toast({
                  title: "Message Sent Successfully🙂",
                  variant: "left-accent",
                  position: "top",
                  duration: 4000,
                  status: "success",
                  isClosable: true,
                });
                setLoad(false)
                setFormdata({ name: "", email: "", message: "" });
              }
        }, 3000);
      }, [state.succeeded]);


    return <>
             <svg width="100%" height="100%" id="svg" viewBox="0 0 1400 320" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 64.80133185349611,200.4821309655938 129.60266370699222,200.96426193118756 176,218 C 222.39733629300778,235.03573806881244 250.39067702552722,268.62508324084354 306,272 C 361.6093229744728,275.37491675915646 444.8346281908989,248.53540510543843 505,243 C 565.1653718091011,237.46459489456157 602.2708102108768,253.2332963374029 643,253 C 683.7291897891232,252.7667036625971 728.0821309655939,236.53140954495007 785,209 C 841.9178690344061,181.46859045504993 911.4006659267479,142.6410654827969 967,157 C 1022.5993340732521,171.3589345172031 1064.315205327414,238.90432852386238 1111,235 C 1157.684794672586,231.09567147613762 1209.3385127635959,155.74162042175362 1265,138 C 1320.6614872364041,120.25837957824639 1380.3307436182022,160.1291897891232 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill={theme?"#Fff":"#1A202C"} fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

        <Flex id="contact" display="block" background={theme? "#fff" :"#1A202C"} w="100%"  pb="5px">
            <Heading pt="20px" color='#FE9119' as="h3" size="md" textAlign="center"  fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>Contact <span style={{color: theme? "black":"white"}}>Me</span></Heading>

            <Flex direction={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} w="85%" m="auto" mt="70px" color={theme? "black":"white"} mb="120px" justifyContent="space-between" gap="20px">
                <SimpleGrid data-aos="flip-left" data-aos-duration="800" className="contact_cards" w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} gap="50px" columns={{base:1,sm:2,md:2,lg:2,xl:2}}>

                <Box m="auto" textAlign="center"><Button boxShadow={theme? "rgb(0, 0, 0) 0px 3px 8px":"rgba(218, 218, 218, 0.24) 0px 3px 8px"} w={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} h={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} _hover={{background:theme?"#FE9119":"white", color:theme?"black":"#fe9119"}} background="#000000" color="#fff" borderRadius="50%" variant="unstyled" fontSize="35px"><a href="https://github.com/Manikantkr-1004" target="_blank">{github}</a></Button><a href="https://github.com/Manikantkr-1004" target="_blank"><Text id="contact-github">Manikantkr-1004</Text></a></Box>
                <Box m="auto" textAlign="center"><Button boxShadow={theme? "rgb(0, 0, 0) 0px 3px 8px":"rgba(218, 218, 218, 0.24) 0px 3px 8px"} w={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} h={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} _hover={{background:theme?"#FE9119":"white", color:theme?"black":"#fe9119"}} background="#000000" color="#fff" borderRadius="50%" variant="unstyled" fontSize="35px"><a href="https://www.linkedin.com/in/manikantofficial2023" target="_blank">{linkedin}</a></Button><a href="https://www.linkedin.com/in/manikantofficial2023" target="_blank"><Text id="contact-linkedin">Manikant Kumar</Text></a></Box>
                <Box m="auto" textAlign="center"><Button boxShadow={theme? "rgb(0, 0, 0) 0px 3px 8px":"rgba(218, 218, 218, 0.24) 0px 3px 8px"} w={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} h={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} _hover={{background:theme?"#FE9119":"white", color:theme?"black":"#fe9119"}} background="#000000" color="#fff" borderRadius="50%" variant="unstyled" fontSize="35px"><a href="tel:+918102675820" target="_blank">{phone}</a></Button><a href="tel:+918102675820" target="_blank"><Text id="contact-phone">+91 8102675820</Text></a></Box>
                <Box m="auto" textAlign="center"><Button boxShadow={theme? "rgb(0, 0, 0) 0px 3px 8px":"rgba(218, 218, 218, 0.24) 0px 3px 8px"} w={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} h={{base:"130px",sm:"130px",md:"130px",lg:"130px",xl:"130px"}} _hover={{background:theme?"#FE9119":"white", color:theme?"black":"#fe9119"}} background="#000000" color="#fff" borderRadius="50%" variant="unstyled" fontSize="35px"><a href="mailto:manikantobra@gmail.com" target="_blank">{email}</a></Button><a href="mailto:manikantobra@gmail.com" target="_blank"><Text id="contact-email">manikantobra@gmail.com</Text></a></Box>

                </SimpleGrid>
                <Box data-aos="flip-right" data-aos-duration="800" w={{base:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}} p={{base:"10px 5px",sm:"10px 15px",md:"10px 30px",lg:"10px 50px",xl:"10px 50px"}}>
                    <Text fontWeight="bold" fontSize="25px">Let's Connect</Text><br/>
                    <form method="POST" onSubmit={handleSubmit}>
                        <FormControl>
                        <InputGroup>
                        <InputLeftElement>✏️</InputLeftElement>
                        <Input onChange={handleChange} type="text" name="name" id="full-name" value={formdata.name} border={theme?"1px solid black":" 1px solid white"} placeholder="Enter Your Full Name" required/>
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        </InputGroup><br/>

                        <InputGroup>
                        <InputLeftElement>✉️</InputLeftElement>
                        <Input onChange={handleChange} id="email" type="email" name="email" value={formdata.email} border={theme?"1px solid black":" 1px solid white"} placeholder="Enter Your Active Email" required/>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        </InputGroup><br/>

                        <InputGroup>
                        <Textarea onChange={handleChange} id="message" name="message" value={formdata.message} type="text" border={theme?"1px solid black":" 1px solid white"} placeholder="Enter Your Message" required/>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        </InputGroup><br/>
                        </FormControl>

                        {/* <Button background="#fe9119"  _hover={{background:"#fe9119"}} type="submit" w="100%">Send Message</Button> */}
                        <button type="submit" onClick={handleButton} disabled={state.submitting} class="custom-btn btn-12"><span>{load? <img style={{display:"flex",margin:"auto",marginTop:"7px"}} width="25px" src={loadimg} alt="load"/>: "Click to Send"}</span><span>{load? <img style={{display:"flex",margin:"auto",marginTop:"7px"}} width="25px" src={loadimg} alt="load"/>: "Send Message"}</span></button>
                        
                    </form>

                </Box>

            </Flex>
            <Text fontSize="14px" textAlign="center" color={theme?"black":"#ffffff"}>Designed & Developed by <span style={{color:"#fe9119"}}>Manikant Kumar {heart}</span></Text>
        </Flex>
        </>
}

export default Contact;