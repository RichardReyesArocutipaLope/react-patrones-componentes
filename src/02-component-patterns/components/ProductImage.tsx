import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import styles from "../style/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = noImage;
  if (product.img) imgToShow = product.img;
  if (img) imgToShow = img;

  return (
    <img className={styles.productImg} src={imgToShow} alt="Product image" />
  );
};
