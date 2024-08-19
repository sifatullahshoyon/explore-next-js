import React from "react";

const page = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${params.id}`
  );
  const singleData = await response.json();
  const { postId, name, body } = singleData;

  return (
    <div>
      <h1 className="text-3xl text-center mb-10">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="max-w-[350px] space-y-4 rounded-lg bg-amber-400 p-6 shadow-lg md:w-[350px]">
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold ">Post Id: {postId}</h1>
            <h3 className="text-lg font-semibold ">Title: {name}</h3>
            <p className="text-sm text-black">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
