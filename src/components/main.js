//lamada del useFetch
import useFetch from "../hooks/useFetch";

function callApi() {
    const {data , loading} = useFetch('https://api.kanye.rest');

    return (
        <div>{/* si no llega la data estara en modo loading */}
            <h1>{loading ? "Loading ...." : data.quote }</h1>
        </div>
    )
};