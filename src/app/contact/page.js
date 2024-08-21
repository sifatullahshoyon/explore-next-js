import React from "react";
import { Anek_Devanagari } from "next/font/google";
import Image from "next/image";

const anek = Anek_Devanagari({weight: ['400' , '500' , '700'], subsets: ['latin']})

export const metadata = {
  title: "Contact",
  description: "Generated by create next app",
};

const contactPage = () => {
  return (
    <div>
      <h1 className={`${anek.className} font-bold text-3xl`}>This is Contact Page</h1>

      <Image src='https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" width={500} height={500} placeholder = 'empty' quality={75} loading = 'lazy'  />
    </div>
  );
};

export default contactPage;
