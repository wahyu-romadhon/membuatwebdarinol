/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function ListProduct() {
  const data = [
    {
      product_name: "Macbook Air M1",
      image: "macbook3.jpeg",
      price: "Rp.17.000.000",
      ram: "RAM 8GB Retina Display",
      hardisk: "SSD 500GB",
    },
    {
      product_name: "Macbook Pro M1",
      image: "macbook1.webp",
      price: "Rp.20.500.000",
      ram: "RAM 16GB Retina Display",
      hardisk: "SSD 1TB",
    },
    {
      product_name: "Macbook Pro M2",
      image: "macbook4.webp",
      price: "Rp.28.200.000",
      ram: "RAM 16GB Retina Display",
      hardisk: "SSD 2TB",
    },
  ];

  //tampilan skeleton masih default
  //kita percantik

  //kita buat variable loading
  //simulasi anggap aja loading untuk load data dari BE
  const [isLoading, setIsLoading] = useState(true);

  //skarang kita buat timeout 5 detik untuk merubah jadu false
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  //biasanya border radius untuk avatar atau image foto orang
  return (
    <>
      <div className="container-list-product">
        {data.map((item, index) => {
          return (
            <div key={index} className="container-product">
              {isLoading ? (
                <Skeleton height={200} width={200} />
              ) : (
                <img src={item.image} height="200" width="200" />
              )}
              {isLoading ? <Skeleton /> : <p>{item.hardisk}</p>}
              {isLoading ? <Skeleton /> : <p>{item.ram}</p>}
              {isLoading ? (
                <Skeleton className="text-product-name" />
              ) : (
                <p className="text-product-name">{item.product_name}</p>
              )}
              {isLoading ? (
                <Skeleton className="text-product" />
              ) : (
                <p className="text-product">{item.price}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
