import World from '../../Organism/World'

export default function (){
    const WorldProps = {
        size: {height: 100, width: 230},
    }
    return(
        <div>
            <World {...WorldProps}/>
        </div>
    )
}