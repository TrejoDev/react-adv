import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {  //*Asignando un objeto y expandiendo sus propiedades.
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
} )

export default ProductCard;