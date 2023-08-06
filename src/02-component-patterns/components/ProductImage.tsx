import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import styles from "../style/styles.module.css";
import { ProductContext } from "./ProductCard";

interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = noImage;
  if (product.img) imgToShow = product.img;
  if (img) imgToShow = img;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product image"
    />
  );
};
