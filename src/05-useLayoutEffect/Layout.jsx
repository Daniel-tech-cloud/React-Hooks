import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const {counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];
    

    return (
        <>
            <h3> Breaking bad Quotes</h3> 
            <hr/>
            {
                isLoading
                ?  <LoadingQuote />
                :  <Quote quote = {quote} author ={author} />
                
            }
            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => increment() }> Next quote  </button>

            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => decrement() }> Previous quote  </button>

            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => reset() }> Reset quote  </button>
        </>
    )
}