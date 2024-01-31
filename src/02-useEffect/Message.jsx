import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x : 0, y : 0});
    const onMoveMouse = ({x, y}) =>{
        setCoords({x,y});

    }

    useEffect(() =>{
        window.addEventListener('mousemove', onMoveMouse);
        
        return () =>{
            window.removeEventListener('mousemove', onMoveMouse);
           
        }
    },[]);

    return (
        <>
        <h3> Usuario ya existe </h3>
        {
            JSON.stringify(coords)
        }
        </>
    )
}

