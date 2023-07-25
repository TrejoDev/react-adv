import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( value );

    const isControlled = useRef( !!onChange )

    const increaseBy = ( value: number ): void => {

        if( isControlled.current ){
          return onChange!({ count: value, product });   //* ! = como usuario le digo a TS q: onChange en esta linea nunca va a ser undefined.
        }

        const newValue = Math.max( counter + value, 0 )

        setCounter( newValue );

        onChange && onChange({ count: newValue, product  }); 
    }

    
    useEffect(() => {
      setCounter( value );
    }, [value])
    

  return {
        counter,
        increaseBy
  }
}
