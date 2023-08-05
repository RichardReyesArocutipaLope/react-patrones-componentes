import styles from "../style/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProducts } from "../hooks/useProducts";
import { createContext, useContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = noImage;
  if (product.img) imgToShow = product.img;
  if (img) imgToShow = img;

  return (
    <img className={styles.productImg} src={imgToShow} alt="Product image" />
  );
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProducts();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>;
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
