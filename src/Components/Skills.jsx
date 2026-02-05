import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { skillData } from "../Utils/constant";

const Skills = ({theme})=>{

    return <Flex display="block" id="skills" w="100%" p="50px 0px 90px 0px">

        <Heading color='#FE9119' textAlign="center" as="h3" size="md" fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>Tech <span style={{color: theme? "black":"white"}}>Skills</span></Heading>

        <SimpleGrid className="skill-box" alignContent="center" gap="35px" columns={{base:2,sm:3,md:4,lg:7,xl:7}} w="85%" m="auto" mt="70px" color={theme? "black":"white"} >
            {
                skillData.map((skill, index) => (
                    <Box data-aos={index%2===0 ? 'fade-up':'fade-down'} data-aos-duration="800" title={skill.name} key={index} background={theme ? "transparent" : "#1A202C"} className="skills-card">
                        <Image loading="lazy" style={{filter: skill.invertImg ? (theme ? "none":'invert(100%)') : 'none'}} className="skills-card-img" pointerEvents={'none'} w={skill.imgWidth} m="auto" src={skill.img} alt={skill.name} /><br/>
                        <Text className="skills-card-name" m={skill.textMargin}>{skill.name}</Text>
                    </Box>
                ))
            }
        </SimpleGrid><br/><br/>
        
    </Flex>
}

export default Skills;