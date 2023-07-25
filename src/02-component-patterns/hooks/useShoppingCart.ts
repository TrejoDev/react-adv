import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  
    const [ shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart}>({ });

    const onProductCountChange = ({ count, product }: onChangeArgs  ) => {
             console.log(count);
             
         setShoppingCart( prev => {

            if( count === 0 ){
                const { [ product.id ]: toDelete, ...rest } = prev;        //* Basicamente: prev = [ key: string ] : { id: string, title: string, img?:string, count: number  }
                // console.log( {toDelete}, { rest } );                     //* toDelete = [ product.id ] = { id: string, title: string, img?:string, count: number } del estado anterior donde ahora el count === 0;
                return { ...rest };                                        //* rest = [ product.id ] = { id: string, title: string, img?:string, count: number } del estado anterior donde ahora el count > 0;
            }

            return {
                ...prev,
                [ product.id ] : { ...product, count }
            }
         })
    }

    return {
        shoppingCart,

        onProductCountChange,
    }

}
