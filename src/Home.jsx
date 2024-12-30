import React from 'react'
import './Home.scss'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Home() {

    const [text]=useTypewriter({
        words: ["Full Stack Developer...","Photographer...","Video Editor..."],
        loop:{},
        typeSpeed:120,
        deleteSpeed:120,
       });

  return (
    <body>
        <div className='home-overall' id='/Home'>
            <div>
                <div className='div'>Hello, It's me <p>SANTHOSHKUMAR...</p></div>
                <div className='div01'>
                    <h1>
                        I'm  a<span className='text-animation'>{text}</span><span><Cursor cursorStyle='!..' cursorColor='red'/></span>  
                    </h1>
                </div>
             </div>
            <div className='home-image'>
                <img src="Images/1715738067506.jpg" alt="" />
            </div>
        </div>
        <div className='last'>Eat &nbsp;&nbsp;<b>&gt;</b>&nbsp;&nbsp; Code &nbsp;&nbsp;<b>&gt;&gt;</b>&nbsp;&nbsp; Sleep &nbsp;&nbsp;<b>&gt;&gt;&gt;</b>&nbsp;&nbsp; Repeat &nbsp;&nbsp;<b>&gt;&gt;&gt;&gt;</b></div>
        
    </body>
  )
}
