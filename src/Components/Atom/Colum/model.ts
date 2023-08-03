
import {ColumColors, IColumProps} from "./types";


export default class Colum{
    color: ColumColors
    constructor({color = 'azure'}:IColumProps) {
        this.color = color
    }
}