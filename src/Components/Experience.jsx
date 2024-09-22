import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import matrix from "./Files/matrix.jfif"

const Experience = ({ theme }) => {

    const external = <FontAwesomeIcon size="md" icon={faExternalLinkAlt} />

    const expData = [
        {
            name: "The Matrix Labs",
            role: "Software Developer",
            duration: "Jan 2024 - Aug 2024",
            link:"https://drive.google.com/file/d/1wSAPl0bFxTGec_TeiI_xjq4R_V68E1SL/view?usp=sharing",
            image: matrix
        }
    ]


    return <>
        <Flex id="experience" display="block" w="100%" p="30px 0px 50px 0px">
            <Heading color='#FE9119' as="h3" size="md" textAlign="center" fontSize={{ base: "30px", sm: "35px", md: "40px", lg: "40px", xl: "40px" }}>My <span style={{ color: theme ? "black" : "white" }}>Experience</span></Heading>

            <SimpleGrid alignContent="center" gap="30px" columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} w={{ base: "90%", sm: "85%", md: "85%", lg: "85%", xl: "85%" }} m="auto" mt="50px" color={theme ? "black" : "white"}>

                {
                    expData?.map((ele,ind) => (
                        <Flex flexDirection={{base:"column", sm:"row", md:"row", lg:"row", xl:"row"}} key={ele.name} borderRadius="20px" position={'relative'} overflow="hidden" boxShadow='5px 5px 5px #00000024' background={theme ? "white" : "#1A202C"}>
                            <Image width={{base:"100%",sm:"35%", md:"35%", lg:"35%", xl:"35%"}} height={'180px'} pointerEvents='none' src={matrix} alt={ele.name} />
                            <Box width={{base:"100%",sm:"65%", md:"65%", lg:"65%", xl:"65%"}} p={'10px 20px'}>
                                <Text fontWeight={'bold'} fontSize={'23px'} color={'#FE9119'}>{ele?.role}</Text>
                                <Text fontWeight={'500'} fontSize={'18px'}  marginBottom={'10px'}>{ele?.name} </Text>
                                <Text fontSize={'14px'} marginBottom={'20px'}>{ele?.duration}</Text>
                                <a href={ele?.link} target='_blank'>Experience Letter : {external}</a>
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