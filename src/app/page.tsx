import Image from "next/image";
import Link from "next/link";
import ViewPage from "./ViewPage/page";
import BabyList from "./babylist/page";

const getData=async()=>{
  const res=await fetch("https://prasutigirha.vercel.app/api/baby/get");
  if(!res.ok){
    throw new Error(" failed to fetch Data");
  }
  return res.json();
};

export default async function Home() {
  const products= await getData();
  console.log(products,'test');
  return (
<main >
 <ViewPage/>
</main>
  );
}

