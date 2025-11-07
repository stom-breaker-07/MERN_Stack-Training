import React from 'react'
import { useEffect ,useState } from 'react'
import "./App.css"

function App() {
  // useEffect(()=>{
  //       fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(error => console.error('Error fetching data:', error));
  //  },[]);
  
 const[images,setImages]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);

  useEffect(()=>{
    const loadImages=async()=>{
      console.log("fetching images from api");

      try{
        const res=await fetch("https://picsum.photos/v2/list?page=2&limit=20");
        console.log("API resonse status:",res.status);
        if(!res.ok) throw new Error(`response not ok:${res.status}`);
        const data=await res.json();
        console.log("fetched data",data);
        setImages(data);
        
      }catch(err)
      {
        console.error("Error fetching images:",err);
        setError(err);
      }
      finally{
        setLoading(false);
      }

    };
    loadImages();
  },[]);

   if(loading){
    return <div>Loading images...</div>;
   }

   if(error){
    return <div>Error loading images: {error.message}</div>;
   }

  return (
    <>
    <div className="App">
      <h1>Image Gallery</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>Error: {error}</p>}
      <div className=" flex flex-wrap justify-center">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.download_url} alt={image.author}  width="200px" height="200px"/>
            <p>{image.author}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default App