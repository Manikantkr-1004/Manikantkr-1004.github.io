import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const expData = [
    {
        name: "The Matrix Labs",
        role: "Software Developer",
        duration: "Jan 2024 - Dec 2024",
        period: '1 Year',
        // link:"https://drive.google.com/file/d/1wSAPl0bFxTGec_TeiI_xjq4R_V68E1SL/view?usp=sharing",
        image: '/Images/matrix.jfif'
    }
]

const Experience = ({ theme }) => {

    return <>
        <Flex id="experience" display="block" w="100%" p="30px 0px 50px 0px">
            <Heading color='#FE9119' as="h3" size="md" textAlign="center" fontSize={{ base: "30px", sm: "35px", md: "40px", lg: "40px", xl: "40px" }}>My <span style={{ color: theme ? "black" : "white" }}>Experience</span></Heading>

            <SimpleGrid alignContent="center" gap="30px" columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} w={{ base: "90%", sm: "85%", md: "85%", lg: "85%", xl: "85%" }} m="auto" mt="50px" color={theme ? "black" : "white"}>

                {
                    expData?.map((ele,ind) => (
                        <Flex data-aos={ind%2===0 ? 'fade-right':'fade-left'} data-aos-duration="800" alignItems={'center'} flexDirection={{base:"column", sm:"row", md:"row", lg:"row", xl:"row"}} key={ele.name} borderRadius="20px" position={'relative'} overflow="hidden" boxShadow='5px 5px 5px #00000024' background={theme ? "white" : "#1A202C"}>
                            <Box width={{base:"100%",sm:"35%", md:"35%", lg:"35%", xl:"35%"}} height={'180px'} >
                                <Image loading="lazy" width={'100%'} height={'100%'} objectFit={'cover'} pointerEvents='none' src={ele?.image} alt={ele.name} />
                            </Box>
                            <Box width={{base:"100%",sm:"65%", md:"65%", lg:"65%", xl:"65%"}} p={'10px 20px'}>
                                <Text fontWeight={'bold'} fontSize={'23px'} color={'#FE9119'}>{ele?.role}</Text>
                                <Text fontWeight={'500'} fontSize={'18px'}  marginBottom={'10px'}>{ele?.name} </Text>
                                <Text fontSize={'14px'} marginBottom={'20px'}>{ele?.duration}</Text>
                                <Text fontSize={'14px'} marginBottom={'20px'} display={'flex'} alignItems={'center'} gap={2}><span style={{width: '6px', height: '6px', borderRadius:'100%',background:'#fe9119', display:'block'}}></span> {ele?.period} Experience</Text>
                                {/* <a href={ele?.link} target='_blank' rel="noopener">Experience Letter : <FaExternalLinkAlt style={{display:"inline-block", marginBottom:'-2px'}} /></a> */}
                            </Box>
                            <Text style={{rotate:"-45deg"}} position={'absolute'} right={30} bottom={30} fontSize={'50px'} fontWeight={'bold'} opacity={'0.1'}>0{ind+1}</Text>
                        </Flex>
                    ))
                }

            </SimpleGrid>
        </Flex>
    </>
}

export default Experience;