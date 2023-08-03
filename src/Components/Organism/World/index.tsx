import {WorldStyle} from './styled'
import {WorldProps} from "./types";
import useWorld from "./useWorld";
import Colum from "../../Atom/Colum";
import {useEffect} from "react";

export default function (props:WorldProps){
    const [world,dispatchWorld] = useWorld(props);
    useEffect(()=>{
       setInterval(()=>{
           dispatchWorld({type: 'DO_TURN'})
       }, 1000)
    },[])
    return(
        <WorldStyle {...props.size}>
            {world.map(row => <>
                {row.map(colum => <Colum {...colum}/>)}
            </>)}
        </WorldStyle>
    )
}
