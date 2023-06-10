"use client";
import Gallery from "@/app/components/gallery";
import Productdetails from "@/app/components/productdetails";
import axios from "axios";
import ProductModel from "@/app/lib/product_type";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    axios
      .get("/api/find_one", { params: { id: params.productId } })
      .then((res) => {
        setProduct(res.data.products);

        console.log(res.data.products.images);
      });
  }, []);

  return (
    <div className="md:p-[200px]   p-[100px] grid   md:grid-cols-2  gap-3  grid-cols-1 ">
      <div className="  min-h-[400px] min-w-[300px]   bg-slate-50">
        <Gallery product={product!} />
      </div>
      <div className="  ">
        <Productdetails product={product!} />
      </div>
    </div>
  );
}
