import { useQuery } from "@tanstack/react-query";
import React from "react";

function Posts() {
  const { data, isLoading, isFetching , isError } = useQuery({
    queryKey: ["images"],
    queryFn: async () =>{
      console.log("async function in..");
       const res= await fetch("https://picsum.photos/v2/list?page=2&limit=30")
      if(!res.ok){
         throw new Error("The Network responsed was not ok");
      }
      console.log("done here");
      return res.json();
    }
      , staleTime: 10000,
  });

  if (isLoading) return <p>Loading Images...</p>;
  if (isError) return <p>Error loading images</p>;

  return (
    <div>
      <h1 className=" text-5xl text-gray-800 font-sans ">Posts List</h1>
        {isFetching && <p>Refetching in the Backgroung.......</p>}

      <div className=" flex flex-wrap gap-3 ">
           {data?.map((img) => (
        <div key={img.id}  className="rounded-2xl bg-conic-90 shadow-cyan-900 hover:animate-pulse ">
          <img
            src={img.download_url}
            alt={img.author}
            width="200"
            height="150"
            className=" rounded-2xl shadow-2xl "
          />
          <p className=" text-2xl text-gray-600 font-sans ">{img.author}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Posts;