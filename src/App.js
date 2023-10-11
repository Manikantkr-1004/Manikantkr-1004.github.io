import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { useEffect, useState } from 'react';
import { Github } from './Components/Github';
import { Background } from './Components/Background';
import ScrollToTop from './Components/ScrollToTop';
import {Helmet} from "react-helmet";

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
      <About theme={theme} />
      <Skills theme={theme}/>
      <Projects theme={theme}/>
      <Github theme={theme} />
      <Contact theme={theme}/>
      <ScrollToTop />
    </div>
  );
}

export default App;
//1st - #0F1624, 2nd- #1A202C
//light - #EDF2F8, #D5E2F1
//text - #FE9119