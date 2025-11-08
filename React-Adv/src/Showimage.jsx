import React from "react";
import { useEffect, useState } from "react";

function Showimage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      console.log("fetching images from api");

      try {
        const res = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=35"
        );
        console.log("API resonse status:", res.status);
        if (!res.ok) throw new Error(`response not ok:${res.status}`);
        const data = await res.json();
        console.log("fetched data", data);
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>Error loading images: {error.message}</div>;
  }
  return (
    <>
      <div className=" p-20 m-0 bg-gray-200 min-h-screen">
        <h1 className=" text-4xl font-bold  font-sans shadow">Image Gallery</h1>
        {loading && <p>Loading images...</p>}
        {error && <p>Error: {error}</p>}
        <div className=" p-1 mt-5 bg-white rounded shadow">
          <div className=" flex flex-wrap justify-center gap-2">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img
                src={image.download_url}
                alt={image.author}
                width="200px"
                height="200px"
                className="object-cover rounded"
              />
              <p>{image.author}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Showimage;
