import { Props as ProductTitleProps, Props as ProductImageProps, Props as ProductButtonsProps } from "../components";
 import { Props as ProductCardProps } from "../components/ProductCard";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
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
