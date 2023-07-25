import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  
    const [ shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart}>({ });

    const onProductCountChange = ({ count, product }: onChangeArgs  ) => {
             
         setShoppingCart( prev => {

           const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 };

           if( Math.max( productInCart.count + count, 0 ) > 0 ){
                productInCart.count += count;

                return {
                    ...prev,
                    [ product.id ]: productInCart,
                }
           }
           //Borrar el producto
            const { [ product.id ]: toDelete, ...rest } = prev;        //* Basicamente: prev = [ key: string ] : { id: string, title: string, img?:string, count: number  }
            // console.log( {toDelete}, { rest } );                     //* toDelete = [ product.id ] = { id: string, title: string, img?:string, count: number } del estado anterior donde ahora el count === 0;
            return { ...rest };                                        //* rest = [ product.id ] = { id: string, title: string, img?:string, count: number } del estado anterior donde ahora el count > 0;
         })
    }

    return {
        shoppingCart,

        onProductCountChange,
    }

}
