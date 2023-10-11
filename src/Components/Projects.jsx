import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import healthelper from "./Files/healthelper.png"
import upstyle from "./Files/upstyle.png"
import licious from "./Files/licious.png"
import recipeswap from "./Files/recipeswap.png"
import notes from "./Files/notes.png"
import portfolio_light from "./Files/portfolio_light.png"
import portfolio_dark from "./Files/portfolio_dark.png"
import { Cards } from "./Cards";

const Projects = ({theme})=>{

    let arr = [
        {dev:": 4 Developers",days:": 05 Days",pro:"Group Project",stack:[" HTML | ","CSS | ","JavaScript | ","React | ","Redux | ","Chakra UI | ","Node JS | ","Express JS | ","Mongo DB"],name:"RecipeSwap",image:recipeswap, des:"A vibrant community for sharing, discovering, and discussing diverse recipes. Connect with food enthusiasts for culinary inspiration and delightful conversations. Join us today!",link:"https://recipeswap.netlify.app/",git:"https://github.com/Manikantkr-1004/warlike-current-5989"},
        {days:": 03 Days",pro:"Individual Project",stack:[" HTML | ","CSS | ","JavaScript | ","React | ","Redux | ","Chakra UI | ","Node JS | ","Express JS | ","Mongo DB"],name:"Notes APP",image:notes, des:"Professionally crafted notes website with React for a seamless user experience. Powered by Node.js, Express.js, and MongoDB for secure sign-in, creation, updates, and deletions of notes.",link:"https://notesbymani.netlify.app/",git:"https://github.com/Manikantkr-1004/NotesAPP"},
        {days:": 05 Days",pro:"Individual Project",stack:[" HTML | ","CSS | ","JavaScript | ","React | ","Chakra UI | ","React Particles | ","AOS"],name:"My Portfolio",image:theme?portfolio_dark:portfolio_light, des:"Explore my recently crafted portfolio developed with React, Chakra UI, and more. Immerse in a seamless user experience with Dark Mode, Light Mode, and scrolling functionality.",link:"https://manikantkr-1004.github.io/",git:"https://github.com/Manikantkr-1004/Manikantkr-1004.github.io"},
        {dev:": 3 Developers",days:": 05 Days",pro:"Group Project",stack:[" HTML | ","CSS | ","JavaScript | ","React | ","Redux | ","Chakra UI | ","TypeScript"],name:"UpStyle",image:upstyle, des:"Elevate your wardrobe with premium clothing and timeless fashion. Discover curated collections that embody elegance and embrace the essence of style. Unleash your fashion potential today!",link:"https://upstylenew.netlify.app/",git:"https://github.com/Manikantkr-1004/warlike-current-59899"},
        {days:": 05 Days",pro:"Individual Project",stack:[" HTML | ","CSS | ","JavaScript | ","React | ","Chakra UI"],name:"Healthelper",image:healthelper, des:"Healthelper offers convenient online doctor booking and virtual consultations for patients facing health issues, providing affordable and accessible healthcare through Online.",link:"https://healthelper.netlify.app/",git:"https://github.com/Manikantkr-1004/torpid-cushion-8810"},
        {days:": 05 Days",pro:"Individual Project",stack:[" HTML | ","CSS | ","JavaScript"],name:"Licious",image:licious, des:"Designed a website inspired by Licious, an online platform for fresh meat and seafood, where user can order fresh meat and seafood in cheap prices.",link:"https://productsite2023.netlify.app/",git:"https://github.com/Manikantkr-1004/shrill-point-7214"}
    ]


    return <>
        <div style={{background:theme? "white" :"#1A202C"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" >
                <path fill={theme? "#EDF2F8" :"#0F1624"} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
            </svg>
        </div>
        <Flex id="projects" display="block" background={theme? "white" :"#1A202C"} w="100%" p="0px 0px 50px 0px">
            <Heading color='#FE9119' as="h3" size="md" textAlign="center"  fontSize={{base:"30px", sm:"35px", md:"40px",lg:"40px",xl:"40px"}}>My <span style={{color: theme? "black":"white"}}>Projects</span></Heading>

            <SimpleGrid className="project-box" alignContent="center" gap="50px" columns={{base:1,sm:1,md:1,lg:2,xl:2}} w={{base:"90%", sm:"85%", md:"85%",lg:"85%",xl:"85%"}} m="auto" mt="100px" color={theme? "black":"white"}>
                {
                    arr.map((item)=>(
                        <Cards key={item.stack} {...item} theme={theme} />
                    ))
                }
            </SimpleGrid>
        </Flex>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 210" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 128.64285714285717,221.96428571428572 257.28571428571433,243.92857142857144 390,258 C 522.7142857142857,272.07142857142856 659.5,278.25 786,263 C 912.5,247.74999999999997 1028.7142857142858,211.07142857142858 1136,197 C 1243.2857142857142,182.92857142857142 1341.642857142857,191.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill={theme? "white" :"#1A202C"} fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0_0" transform="rotate(-180 720 200)"></path></svg>
        </>
}

export default Projects;