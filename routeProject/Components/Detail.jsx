import { useParams } from "react-router-dom";

function Detail(){
    const {id}=useParams();
    console.log(id);
    
    return (
        <div>
            <h1>Hai</h1>
        </div>
    )
}

export default Detail;
