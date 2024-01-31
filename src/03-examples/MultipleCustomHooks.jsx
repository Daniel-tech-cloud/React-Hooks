import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];
    console.log(counter, data);

    return (
        <>
            <h3> Breaking bad Quotes</h3> 
            <hr/>
            {
                isLoading
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> { quote } </p>
                        <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }
            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => increment() }> Next quote  </button>

            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => decrement() }> Previous quote  </button>

            <button className="btn btn-primary mt-2" disabled = { isLoading } onClick={ () => reset() }> Reset quote  </button>


        </>
    )
}