import {useState} from "react";
import {WorldProps, WorldSize} from "./types";
import Colum from "../../Atom/Colum/model";

interface Action{
    type: 'DO_TURN',
    payload?: Object
}

export default (initialState: WorldProps): [Colum[][],  Function] =>{
    const worldObj = new World(initialState)
    const [world, setWorld] = useState(worldObj.columns)
    const dispatchWorld = ({type}:Action)=>{
        switch (type) {
            case "DO_TURN":
                worldObj.doTurn()
                setWorld(worldObj.columns)
        }
    }
    return [world, dispatchWorld]
}

class World{
    get columns(): Colum[][] {
        return this._columns;
    }

    set columns(value: Colum[][]) {
        this._columns = value;
    }
    private _size: WorldSize
    private _columns: Colum[][] = []
    constructor({size}: WorldProps) {
        this._size = size
        for(let i = 0; i <=size.height; i++){
            let row = Array(size.width).fill(new Colum({color: 'azure'}))
            this._columns.push(row)
        }
    }

    doTurn(){
        this._columns[0][0] = new Colum({color: 'green'})
        console.log(this._columns)
        console.log('turn')
    }
}
