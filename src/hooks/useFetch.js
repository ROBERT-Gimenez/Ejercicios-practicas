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
