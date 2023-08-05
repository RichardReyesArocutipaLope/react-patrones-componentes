import { useProducts } from "../hooks/useProducts";
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";
import { ProductTitle, ProductButtons, ProductImage } from "./";
import styles from "../style/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProducts();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
