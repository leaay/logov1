import React,{useState} from 'react';
import useAddToCart from '../Hooks/useAddToCart';
const Context = React.createContext()

function ContextProvider({children}){

        const [productPage,setProductPage] = useState(false)
        const [slider,setSlider] = useState(false)

        const [cart,setCart] = useState([])
        const [addedToCart,setAddedToCart] = useState(false)
     

        function addToCart(item){

                if(cart.find(el => el._id === item._id)){
                    const newCart = cart.map(i => {
                        if(i._id === item._id){
                            return{ ...i,a: i.a + 1}

                        }else{
                            return i
                        }
                    })
                   return  setCart(newCart)  
                }else{
                   return  setCart(prev => [...prev , {...item, a:1}])
                }
        }

        function removeItem(id){
            setCart(prevItems => prevItems.filter(i => i._id !== id))
            console.log(cart)
        }
        function addMore(item){
    
                const newCart = cart.map(i => {
                    if(i._id === item._id){
                        return{ ...i,a: i.a + 1}
                    }else{
                        return i
                    }
                })

                return setCart(newCart)
                
        }
        function minusOne(item){
            const newCart = cart.map(i => {
                if(i._id === item._id && item.a > 1){
                    return {...i,a:i.a - 1}
                }else{
                    return i
                }
            })

            return setCart(newCart)
        }


        return(

            <Context.Provider value={
                {

                    productPage: productPage,
                    setProductPage: setProductPage,
                    slider:slider,
                    setSlider:setSlider,
                    cart:cart,
                    addToCart:addToCart,
                    addedToCart:addedToCart,
                    setAddedToCart:setAddedToCart,
                    removeItem:removeItem,
                    addMore:addMore,
                    minusOne:minusOne
                }
         
            }>
                {children}
            </Context.Provider>

        )


}

export {ContextProvider,Context};
