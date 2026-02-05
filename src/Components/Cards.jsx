import { Card, CardBody, Flex, Image, Text } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";


export function Cards({ stack, name, image, des, link, git, theme, dev, pro, days, stackImg }) {

    return (
        <Card data-aos="fade-up" data-aos-duration="800" key={name} boxShadow={theme ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "rgb(184, 184, 184) 0px 3px 8px"} p="0px" borderRadius="30px " bg={theme ? "#EDF2F8" : "#0F1624"} color={theme ? "black" : "white"}>
            <CardBody p="0" >
                <Image borderRadius="30px 30px 0px 0px" w="100%" loading='lazy'
                    src={image}
                    alt={name}
                />
                <Flex w="95%" display="block" m="auto" fontWeight="semibold">
                    <Text className="project-title" textAlign="center" m="10px 0px" fontWeight="bold" fontSize="25px">{name}</Text>
                    <Text className="project-description" m="10px 0px">{des}</Text>
                    <Text color="#FE9119" m="10px 0px" fontSize="17px" fontWeight="bold">{pro} <span style={{ color: theme ? "black" : "white", fontWeight: "400" }}>{dev ? dev : ""} |</span>  Duration <span style={{ color: theme ? "black" : "white", fontWeight: "400" }}>{days}</span> </Text>
                    <Flex color="#FE9119" m="10px 0px" fontSize="17px" flexWrap={'wrap'} fontWeight="bold" alignItems={'center'} gap={3}>Tech Stack :
                        {
                            stack.map((item,ind) => (
                                stackImg(item) ?
                                <Image loading='lazy' key={item} width={'5%'} height={'5%'} src={stackImg(item).img} style={{filter: stackImg(item).invertImg ? (theme ? "none":'invert(100%)') : 'none'}} alt={item} title={item} /> :
                                <span key={item} className="project-tech-stack" style={{ color: theme ? "black" : "white", fontWeight: "400" }}>{ind===0 ? `${item} |` : ind < stack.length && ind+1 !== stack.length ? `| ${item} |` : item}</span>
                            ))
                        }
                    </Flex>
                    <Flex alignItems="center" w="50%" m="auto" margin="20px auto" justifyContent="space-between" fontSize="25px">
                        {git && <Text className="project-github-link" _hover={{ color: "#fe9119" }} cursor="pointer"><a href={git} rel='me noopener' target='_blank'><FaGithub size={'32px'} /></a></Text>}
                        {link && <Text className="project-deployed-link" _hover={{ color: "#fe9119" }} cursor="pointer"><a href={link} rel='noopener' target='_blank'><FaExternalLinkAlt /></a></Text>}
                    </Flex>
                </Flex>

            </CardBody>
        </Card>
    )
}
