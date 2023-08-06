import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import "../style/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      ></div>
      <ProductCard product={product} className="bg-dark">
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
        <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }} />
        <ProductTitle style={{ fontWeight: "bold" }} />
        <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
      </ProductCard>
    </div>
  );
};
