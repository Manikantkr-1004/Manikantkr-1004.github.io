import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const skillData = [
    {
        name: "HTML",img: '/Images/html.png', imgWidth: "61%", textMargin: ""
    },
    {
        name: "CSS",img: '/Images/css.png', imgWidth: "62%", textMargin: ""
    },
    {
        name: "JavaScript",img: '/Images/javascript.png', imgWidth: "60%", textMargin: ""
    },
    {
        name: "React",img: '/Images/react.png', imgWidth: "75%", textMargin: ""
    },
    {
        name: "Redux",img: '/Images/redux.png', imgWidth: "69%", textMargin: ""
    },
    {
        name: "Chakra UI",img: '/Images/chakra_ui.png', imgWidth: "67%", textMargin: ""
    },
    {
        name: "TypeScript",img: '/Images/typescript.png', imgWidth: "63%", textMargin: ""
    },
    {
        name: "Mongo DB",img: '/Images/mongodb.png', imgWidth: "66%", textMargin: ""
    },
    {
        name: "Node JS",img: '/Images/nodejs.png', imgWidth: "60%", textMargin: ""
    },
    {
        name: "Express",img: '/Images/express.png', imgWidth: "69%", textMargin: "", invertImg: true
    },
    {
        name: "Tailwind",img: '/Images/tailwind.png', imgWidth: "80%", textMargin: "10px 0 0"
    },
    {
        name: "PWA",img: '/Images/pwa.png', imgWidth: "63%", textMargin: ""
    },
    {
        name: "GitHub",img: '/Images/github.png', imgWidth: "63%", textMargin: "", invertImg: true
    },
    {
        name: "Bootstrap",img: '/Images/bootstrap.webp', imgWidth: "65%", textMargin: "14px 0 0"
    },
    {
        name: "NextJS",img: '/Images/next.webp', imgWidth: "63%", textMargin: ""
    },
    {
        name: "AuthJS",img: '/Images/authjs.webp', imgWidth: "63%", textMargin: ""
    },
    {
        name: "AI",img: '/Images/ai.png', imgWidth: "63%", textMargin: "10px 0 0", invertImg: true
    },
    {
        name: "Postman",img: '/Images/postman.png', imgWidth: "67%", textMargin: ""
    }
]

const Skills = ({theme})=>{

    return <Flex display="block" id="skills" w="100%" p="50px 0px 90px 0px">

        <Heading color='#FE9119' textAlign="center" as="h3" size="md" fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>Tech <span style={{color: theme? "black":"white"}}>Skills</span></Heading>

        <SimpleGrid className="skill-box" alignContent="center" gap="35px" columns={{base:2,sm:3,md:4,lg:7,xl:7}} w="85%" m="auto" mt="70px" color={theme? "black":"white"} >
            {
                skillData.map((skill, index) => (
                    <Box data-aos={index%2===0 ? 'fade-up':'fade-down'} data-aos-duration="800" key={index} background={theme ? "transparent" : "#1A202C"} className="skills-card">
                        <Image loading="lazy" style={{filter: skill.invertImg ? (theme ? "none":'invert(100%)') : 'none'}} className="skills-card-img" pointerEvents={'none'} w={skill.imgWidth} m="auto" src={skill.img} alt={skill.name} /><br/>
                        <Text className="skills-card-name" m={skill.textMargin}>{skill.name}</Text>
                    </Box>
                ))
            }
        </SimpleGrid><br/><br/>
        
    </Flex>
}

export default Skills;