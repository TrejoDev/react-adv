import { Props as ProductTitleProps, Props as ProductImageProps, Props as ProductButtonsProps } from "../components";
 import { Props as ProductCardProps } from "../components/ProductCard";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element;
    Buttons: ( Props : ProductButtonsProps ) => JSX.Element;
    Image: ( Props : ProductImageProps) => JSX.Element;
    Title: ( Props: ProductTitleProps ) => JSX.Element;
}


export interface onChangeArgs {
    product: Product, 
    count: number
}

export interface ProductInCart extends Product {                                                                                                                                                                   
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number ) =>void 
    reset: ( ) =>void 
}
