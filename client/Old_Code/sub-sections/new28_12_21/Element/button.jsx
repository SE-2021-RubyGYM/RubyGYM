import { useState, useEffect } from "react";
import React from "react";
export default function Button(properties){
    var props={...properties}
    //check and set default style
    if(typeof props.style==='undefined'){
        props.style={
            cursor: 'pointer',
            // textAlign: 'center',
            // verticalAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    if(typeof props.style.backgroundColor==='undefined'){
        props.style.backgroundColor='inherit'
    }
    if(typeof props.style.paddingRight==='undefined'){
        props.style.paddingRight='10px'
    }
    if(typeof props.style.paddingLeft==='undefined'){
        props.style.paddingLeft='10px'
    }
    if(typeof props.style.transition==='undefined'){
        props.style.transition='0.3s'
    }
    if(typeof props.style.borderRadius==='undefined'){
        props.style.borderRadius='2px 2px 2px 2px'
    }
    props.style.display='inline-block'
    
    

    

    // check and set default stype on hover
    if(typeof props.onHoverStyle==='undefined'){
        props.onHoverStyle={}
    }
    if( typeof props.onHoverStyle.backgroundColor==='undefined'){
        props.onHoverStyle.backgroundColor='#1890ff'
    }
    //---------------  hover event  ---------------
    const [hover,setHover]=useState({})
    const onHoverEvent=(type)=>{
        switch(type){
            case 'enter':
                setHover(props.onHoverStyle)
                break;
            case 'leave':
                setHover({})
                break;
        }
    }

    //check and setdefault style on click
    if(typeof props.onClickStyle==='undefined'){
        props.onClickStyle={}
    }
    if(typeof props.onClickStyle.boxShadow==='undefined'){
        props.onClickStyle.boxShadow ='0 0 0px 5px rgba(5, 102, 233, 0.34)'
    }
    ///---------------click event -------------------
    const [clickedStyle,setClickedStyle]=useState({})
    const onClickedEvent=()=>{
        setClickedStyle(props.onClickStyle)
        
        setTimeout(() => {
            setClickedStyle({})
        }, 400);
    }
    
    //check and setdefault style on hold
    if( typeof props.onHoldStyle==='undefined'){
        props.onHoldStyle={}
    }
    if(typeof props.onHoldStyle.backgroundColor==='undefined'){
        props.onHoldStyle.backgroundColor='rgba(26, 110, 188, 0.98)'
    }
    const [holdStyle,setHoldStyle]=useState({})
    const onHoldEvent=(type)=>{
        switch(type){
            case 'down':
                setHoldStyle(props.onHoldStyle)
                break;
            case 'up':
                setHoldStyle({})
        }
    }
    

    
    

    return(
        <div
            style={{userSelect:'none',cursor:'pointer',...props.style,...hover,...clickedStyle,...holdStyle}}
            onMouseEnter={()=>{onHoverEvent('enter')}}
            onMouseLeave={()=>{onHoverEvent('leave')}}
            onClick={()=>{
                    onClickedEvent();
                    if(!(typeof props.onClickedFunction==='undefined')){
                        props.onClickedFunction();
                    }
                }
            }
            onMouseDown={()=>{
                onHoldEvent('down')
            }}
            onMouseUp={()=>onHoldEvent('up')}
        >
            {props.children}
        </div>
    )
}