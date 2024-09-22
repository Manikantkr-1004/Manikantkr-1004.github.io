import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Helmet } from "react-helmet";
import { Background } from './Components/Background';

const About = lazy(() => import('./Components/About'));
const Experience = lazy(() => import('./Components/Experience'));
const Skills = lazy(() => import('./Components/Skills'));
const Projects = lazy(() => import('./Components/Projects'));
const Github = lazy(() => import('./Components/Github'));
const Contact = lazy(() => import('./Components/Contact'));
const ScrollToTop = lazy(() => import('./Components/ScrollToTop'));

function App() {

  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("portfolio_color")) || false)

  useEffect(()=>{
    if(theme){
      document.body.style.background = "#EDF2F8"
      localStorage.setItem("portfolio_color",(true).toString())
    }else{
      document.body.style.background = "#0F1624"
      localStorage.setItem("portfolio_color",(false).toString())
    }
  },[theme])


  return (
    <div id="App">
      <Helmet>
        <meta name="theme-color" content={theme?"#EDF2F8":"#0F1624"} />
      </Helmet>
      <Background theme={theme}/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home theme={theme}/>
      <Suspense fallback={<div>Loading...</div>}>
        <About theme={theme} />
        <Experience theme={theme} />
        <Skills theme={theme}/>
        <Projects theme={theme}/>
        <Github theme={theme} />
        <Contact theme={theme}/>
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
//1st - #0F1624, 2nd- #1A202C
//light - #EDF2F8, #D5E2F1
//text - #FE9119