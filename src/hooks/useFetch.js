import React from 'react';
import { useEffect , useState } from 'react';

export default function useFetch(url) {
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            setData(data);
            setLoading(false);
        });
    } , [url]);


  return {data , loading};
}

/*---- MANERA DE LLAMARLO
Import {useFetch} from './usefetch';
const {data , loading} = useFetch(url);

return(
    <div>
    <h1>{loading ? "loading .... " : data.title}
    </div>
)

 */
//----De manera asincrona
/* useEffect(() => {
    const busqueda = async () => {   
        setLoading(true);
        const data = await fetch(url);
        const res =await data.json()
        
        setData(res);
        setLoading(false);
    }
    busqueda()
    
    } , [url]); */