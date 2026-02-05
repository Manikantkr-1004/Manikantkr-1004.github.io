import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Cards } from "./Cards";
import { projectData, skillData } from "../Utils/constant";

const Projects = ({ theme }) => {

    const stackImg = (name) => {
        const findItem = skillData.find((ele)=> ele.name.toLowerCase() === name.toLowerCase());
        return findItem ? {img: findItem.img, invertImg: findItem.invertImg} : null;
    }

    return <>
        <div style={{ background: theme ? "white" : "#1A202C" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" >
                <path fill={theme ? "#EDF2F8" : "#0F1624"} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
            </svg>
        </div>
        <Flex id="projects" display="block" background={theme ? "white" : "#1A202C"} w="100%" p="0px 0px 50px 0px">
            <Heading color='#FE9119' as="h3" size="md" textAlign="center" fontSize={{ base: "30px", sm: "35px", md: "40px", lg: "40px", xl: "40px" }}>My <span style={{ color: theme ? "black" : "white" }}>Projects</span></Heading>

            <SimpleGrid className="project-box" alignContent="center" gap="50px" columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} w={{ base: "90%", sm: "85%", md: "85%", lg: "85%", xl: "85%" }} m="auto" mt="100px" color={theme ? "black" : "white"}>
                {
                    projectData.map((item) => (
                        <Cards key={item.name} {...item} theme={theme} stackImg={stackImg} />
                    ))
                }
            </SimpleGrid>
        </Flex>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 210" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 128.64285714285717,221.96428571428572 257.28571428571433,243.92857142857144 390,258 C 522.7142857142857,272.07142857142856 659.5,278.25 786,263 C 912.5,247.74999999999997 1028.7142857142858,211.07142857142858 1136,197 C 1243.2857142857142,182.92857142857142 1341.642857142857,191.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill={theme ? "white" : "#1A202C"} fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0_0" transform="rotate(-180 720 200)"></path></svg>
    </>
}

export default Projects;