import {useParams} from "react-router";
import {useEffect, useState} from "react";


function SpotDetail(){
   const params = useParams()
   const [spot, setSpot] = useState(null);


      async function fetchProduct() {
         try {
            const response = await fetch(`http://145.24.223.61:8001/spots/${params.id}`, {
               headers: {
                  'Accept': 'application/json'
               }
            });

            const data = await response.json();
            console.log("API Response:", data);
            setSpot(data);
         } catch (error) {
            console.error('Er is een fout opgetreden:', error);
         }
      }
   useEffect(() => {
      fetchProduct();
   }, [params.id]);

   if (!spot) {
      return <p>Loading...</p>;
   }

   return(
       <><h1 className="text-2xl font-semibold text-gray-800 mb-2">{spot.title}</h1>
          <p className="text-gray-700 mb-4">{spot.description}</p>
          <p className="text-gray-600 italic mb-4">{spot.review}</p>
       </>





   )
}
export default SpotDetail