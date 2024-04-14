"use client";

import Link from "next/link";

interface ProductProps {
  _id: string;
  userId: string;
  babyName: string;
  dateOfBaby: string;
  engDateOfBaby: string;
  gestationalAge: number;
  ipNumber: number;
  babyWeight: number;
  diagnosis: string;
  indications: string;
  babyStatus: string;
  milkConsumed: number;
  milkConsumedToday: number;
  createdAt: string;
  updatedAt: string;
}

interface props {
  products: ProductProps[];
}

const Products = ({ products }: props) => {
  
  return (
    <>
      {products?.map((item) => (
        <Link href={"/"} key={item._id}>
          <div>
            <h1>{item?.babyName}</h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
