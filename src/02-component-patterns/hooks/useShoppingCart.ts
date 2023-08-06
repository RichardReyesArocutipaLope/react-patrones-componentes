import { Product } from "../interfaces/interfaces";
import { useState } from 'react';

interface ProductInCart extends Product {
    count: number;
}
interface ChangeProps {
    count: number;
    product: Product;
}

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({ count, product }: ChangeProps) => {
        setShoppingCart((oldShoppingCart) => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {
                ...product,
                count: 0,
            };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };

            // if (count === 0) {
            //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //   return { ...rest };
            // }
            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count },
            // };
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }

}
