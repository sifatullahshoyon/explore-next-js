import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    absolute: "Blogs",
  },
  description: "About Page",
  keywords: ["blog", "page"],
};

const blogs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const allData = await response.json();
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allData?.map((data) => (
          <div
            key={data.id}
            className="max-w-[350px] space-y-4 rounded-lg bg-amber-400 p-6 shadow-lg md:w-[350px]"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">Post Id: {data.postId}</h1>
              <h3 className="text-lg font-semibold ">Title: {data.name}</h3>
              <p className="text-sm text-black">Email: {data.email}</p>
            </div>
            <div className="flex gap-4">
              <Link href={`/blogs/${data.id}`}>
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogs;
