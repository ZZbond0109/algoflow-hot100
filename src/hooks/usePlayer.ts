import { useCallback, useEffect, useState } from 'react';
export function usePlayer(length:number){
 const [index,setIndex]=useState(0),[playing,setPlaying]=useState(false),[speed,setSpeed]=useState(1);
 useEffect(()=>{if(!playing)return;if(index>=length-1){setPlaying(false);return;}const timer=setTimeout(()=>setIndex(i=>Math.min(length-1,i+1)),1050/speed);return()=>clearTimeout(timer);},[playing,index,length,speed]);
 const seek=useCallback((i:number)=>{setPlaying(false);setIndex(Math.max(0,Math.min(length-1,i)));},[length]);
 const toggle=()=>{if(index===length-1)setIndex(0);setPlaying(p=>!p);};
 const reset=()=>{setIndex(0);setPlaying(false);};
 return {index,playing,speed,setSpeed,seek,toggle,reset};
}
