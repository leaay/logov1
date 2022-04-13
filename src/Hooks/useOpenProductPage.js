import {useContext} from 'react';
import { Context } from '../context/ContextProvider';

const useOpenProductPage = () => {
    const {setProductPage} = useContext(Context)
    return ()=>{

       
            setProductPage(true)
          

    }

    
   
    
    
}

export default useOpenProductPage;
