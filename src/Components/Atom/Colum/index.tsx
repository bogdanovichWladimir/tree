import {WorldColumStyle} from "./styled";
import {IColumProps} from "./types";

export default function WorldColum({color}:IColumProps){
    return(
        <WorldColumStyle {...{color}}/>
    )
}