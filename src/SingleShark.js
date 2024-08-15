import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function SingleShark(){
    const [sharkDetails, setSharkDetails] = useState(null)
    const{id} = useParams();

    useEffect(()=>{
        const fetchSingleDetails = async () => {
           try{
                const {data} = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
                setSharkDetails(data);
            }catch(err){
            console.log('Error fetching single shark data', err)
           } 
        };
        fetchSingleDetails()
    },[id])

    return(
        <div>
            {sharkDetails ? (
                <h3>${sharkDetails.salePrice}</h3> 
            

        ) : (
            <p>Loading Shark Details...</p>
        )}
        </div>
        
    );
}

export default SingleShark