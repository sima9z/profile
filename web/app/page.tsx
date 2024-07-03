"use client";

import { useRouter } from "next/navigation";

export default function HomePage () {
  const router = useRouter();

  const goToExternalSite = () => {
    window.location.href = 'https://sign-dxuu.onrender.com/';
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToExternalSite}>星の図鑑</button>
    </div>
  );
};