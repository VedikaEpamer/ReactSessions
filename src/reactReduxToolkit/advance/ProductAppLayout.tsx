import React from "react";
import ProductHeader from "./ProductHeader.tsx";
import ProductRightSideBar from "./ProductRightSideBar.tsx";
import ProductLeftSideBar from "./ProductLeftSideBar.tsx";
import ProductsList from "./ProductsList.tsx";

export const ProductAppLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <ProductHeader />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ProductRightSideBar />
        <ProductsList />
        <ProductLeftSideBar />
      </div>
    </div>
  );
};
