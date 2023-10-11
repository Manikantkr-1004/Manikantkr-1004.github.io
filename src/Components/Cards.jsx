import React from 'react'
import { Card, CardBody, Flex, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export function Cards({stack,name,image,des,link,git,theme,dev,pro,days}) {

    const github = <FontAwesomeIcon size="xl" icon={faGithub} />
    const external = <FontAwesomeIcon size="lg" icon={faExternalLinkAlt} />
    //data-aos="fade-up" data-aos-duration="800"

    return (
        <Card className="project-card" boxShadow={theme? "rgba(0, 0, 0, 0.24) 0px 3px 8px":"rgb(184, 184, 184) 0px 3px 8px"} p="0px" borderRadius="30px " bg={theme? "#EDF2F8":"#0F1624"} color={theme?"black":"white"} key={stack}>
            <CardBody p="0" >
                <Image borderRadius="30px 30px 0px 0px" w="100%"
                    src={image}
                    alt={name}
                />
                <Flex w="95%" display="block" m="auto" fontWeight="semibold">
                    <Text className="project-title" textAlign="center" m="10px 0px" fontWeight="bold" fontSize="25px">{name}</Text>
                    <Text className="project-description" m="10px 0px">{des}</Text>
                    <Text color="#FE9119" m="10px 0px" fontSize="17px" fontWeight="bold">{pro} <span style={{color:theme?"black":"white",fontWeight:"400"}}>{dev? dev:""} |</span>  Duration <span style={{color:theme?"black":"white",fontWeight:"400"}}>{days}</span> </Text>
                    <Text color="#FE9119" m="10px 0px" fontSize="17px" fontWeight="bold">Tech Stack :  
                        {
                            stack.map((item)=>(
                                <span className="project-tech-stack" style={{color:theme?"black":"white",fontWeight:"400"}}>{item}</span>
                            ))
                        }
                    </Text>
                    <Flex alignItems="center" w="50%" m="auto" mb="20px" justifyContent="space-between" fontSize="25px"><Text className="project-github-link" _hover={{color:"#fe9119"}} cursor="pointer"><a href={git} target='_blank'>{github}</a></Text><Text className="project-deployed-link" _hover={{color:"#fe9119"}} cursor="pointer"><a href={link} target='_blank'>{external}</a></Text></Flex>
                </Flex>

            </CardBody>
        </Card>
    )
}
