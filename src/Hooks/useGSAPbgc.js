
import { useEffect } from 'react';
import gsap from 'gsap';
const useGSAPbgc = (color) => {

    return  useEffect(()=>{
        gsap.to('div.App',{duration:.2,backgroundImage:`${color}`})
    },[color])
     
}

export default useGSAPbgc;
