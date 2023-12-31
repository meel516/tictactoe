import "./FrameComponent.css";
import { useState } from 'react';
import { useEffect } from "react";
import { validation } from "./Tictac";
import { arry } from "./Tictac";
import { Outlet } from "react-router-dom";
console.log(arry,'im happy')
let src={player1:"/ellipse-3@2x.png",player2:"/vector-4.svg",default:"/bg.png"}
let pixelmap=new Map()
for(let k=0;k<=9;k++){
pixelmap.set(k,{src:src.default,changed:false})
}
let winauido= new Audio("https://pagalsong.in/uploads/systemuploads/mp3/Jodhaa%20Akbar/Azeem-O-Shaan%20Shahenshah%20-%20Jodhaa%20Akbar.mp3")

const FrameComponent = () => {
    let [arr,setArray]=useState(arry)
    let [player1,setPlayer1]=useState(true)
    let [player2,setPlayer2]=useState(false)
    let [win,setWin]=useState(false)
    let [draw,setDraw]=useState(false)
    let [ij,setIj]=useState({i:0,j:0})
    let [count,setCount]=useState(0)
  
    
    // console.log('changed state',player1,player2)
    // let [state,setState]=useState({1:{src:src.default},2:{src:src.default},2:{src:src.default},2:{src:src.default},3:{src:src.default},4:{src:src.default},5:{src:src.default},6:{src:src.default},7:{src:src.default},8:{src:src.default},9:{src:src.default}})
    console.log(win)
    console.log(arry)
   
   
    
   
    function setPlayer(e){
        let i=parseInt((e.currentTarget.getAttribute('data-i')))
        let j=parseInt(e.currentTarget.getAttribute('data-j'))
        let id=parseInt(e.currentTarget.getAttribute('data-id'))
        if(!pixelmap.get(id).changed&&!win){

        
           
        setIj({i:i,j:j})
        if(player1){
            e.target.src=src.player1
         pixelmap.set(id,{src:src.player1,changed:true})
         let newarr=arr.map((val,index)=>{
                if(i==index){
                    val[j]=1
                    return val
                }
                else{
                    return val
                }
            })
            setArray(newarr)
        
        //  if(validation(arry,i,j,1)){
        //     setWin(true)
        //  }
    
          }
          else if(player2){
            e.target.src=src.player2
            pixelmap.set(id,{src:src.player2})
           
            let newarr=arr.map((val,index)=>{
                if(i==index){
                    val[j]=2
                    return val
                }
                else{
                    return val
                }
            })
            setArray(newarr)
            // if(validation(arry,i,j,-1)){
            //     setWin(true)
            // }
       
          }
          
          setPlayer1(prev=>!prev)
          setPlayer2(prev=>!prev)
          setCount(prev=>prev+1)
        }
    }
    useEffect(()=>{
        console.log(ij)
        if(!player1){
          let valid1=validation(arr,ij.i,ij.j,1)
            if(valid1){
                setWin(true)
               }
               
        }
        else if(!player2){
          let valid2=validation(arr,ij.i,ij.j,2)
            if(valid2){
                setWin(true)
                }
               
        }
       
    },[player1,player2])
    useEffect(() => {
      
     
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, [win]);
    

  if(win){
    winauido.play()
  }
  else {
    winauido.pause()
    winauido.currentTime=0
  }
  return (<> 

    <div className="frame-parent align-self-sm-center d-none">
      <button className="rectangle-parent" data-id="1" data-i="0" data-j="0" onClick={(e)=>setPlayer(e)}>
        <button className="frame-child" />
        <img className="frame-item" onClick={(e)=>{console.log(e.target.class)}} alt=""  src={pixelmap.get(1).src} />
      </button>
      <button className="rectangle-group" data-id="9" data-i="2" data-j="2" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="ellipse-icon"onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(9).src} />
      </button>
      <button className="rectangle-container" data-id="2" data-i="0" data-j="1" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-child1" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(2).src} />
      </button>
      <button className="frame-button" data-id="3" data-i="0" data-j="2" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-child1" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(3).src} />
      </button>
      <button className="rectangle-parent1" data-id="5" data-i="1" data-j="1" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-item" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(5).src} />
      </button>
      <button className="rectangle-parent2" data-id="4" data-i="1" data-j="0" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-item" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(4).src} />
      </button>
      <button className="rectangle-parent3" data-id="7"  data-i="2" data-j="0" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="vector-icon" onClick={(e)=>{e.target.style.visibility='visible'}} alt=""  src={pixelmap.get(7).src} />
      </button>
      <button className="rectangle-parent4" data-id="6"  data-i="1" data-j="2" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-child10" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(6).src} />
      </button>
      <button className="rectangle-parent5" data-id="8" data-i="2" data-j="1" onClick={(e)=>setPlayer(e)}>
        <div className="frame-inner" />
        <img className="frame-child12" onClick={(e)=>{e.target.style.visibility='visible'}}  alt=""  src={pixelmap.get(8).src} />
      </button>
      <button className="players" onClick={(e)=>{
       setPlayer1(true)
       setPlayer2(false)
       setArray([[0,0,0],[0,0,0],[0,0,0]])
    for(let k=0;k<=9;k++){
        pixelmap.set(k,{src:src.default})
        }
        setIj({i:0,j:0})
        setWin(false)
        setCount(0)
        
   
      }}>
        <div className="players1">Refresh</div>
      </button>{
      win&& <h1 className="x-wins-wrapper" data-animate-on-scroll>
        <div className="x-wins">
          <p className="x">{(!player1&&win)?'O':'X'}</p>
          <p className="wins"> Wins</p>
        </div>
      </h1>}
      {
      (!win&&count==9)&& <h1 className="x-wins-wrapper" >
        <div className="wins side">
          DRAW
          
        </div>
      </h1>}
    </div>
    <Outlet/>
    </>
  );
};

export default FrameComponent;
