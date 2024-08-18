import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';


function SingleShark(){
    const [shark, setShark] = useState(null)
    const [sharkDetails, setSharkDetails] = useState(null)
    const [sharkOtherDetails, setSharkOtherDetails] = useState(null)
    const [sharkDeals, setSharkDeals] = useState(null)
    const{id} = useParams();

    useEffect(()=>{
        const fetchSingleDetails = async () => {
           try{
                const {data} = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
                console.log('API response:', data);
                setSharkDetails(data.info);
                setSharkOtherDetails(data.cheapestPriceEver);
                setSharkDeals(data.deals);

            }catch(err){
            console.log('Error fetching single shark data', err)
           } 
        }
        fetchSingleDetails()
    },[id]);

    // adding code so the percent of savings below should not exceed 2 decimal points
    const savings = parseFloat(sharkDeals?.[0]?.savings);
    const formattedSavings =  !isNaN(savings) ? savings.toFixed(2) : '0.00';

    return(
        <div>
            <div className="container my-5"></div>
                {sharkDetails ? ( 
                    <>
                        <div className="row justify-content-center">
                            <div className="mx-auto">
                                <div className="col-md-8">
                                    <h1 className="mb-4 script">More info on...</h1>
                                        <div className="card p-4">

                                            <h5 className="text-center">{sharkDetails.title} </h5>

                                                <img 
                                                    src={sharkDetails.thumb}
                                                    alt={sharkDetails.title}
                                                />

                                                <span className="fw-bold">Price:</span>
                                                <span className='text-decoration-line-through'>${sharkDeals?.[0]?.retailPrice}</span>

                                                <span className="fw-bold">Now Just!!</span>
                                                <h3>{sharkOtherDetails.price}</h3>  

                                                <span className="fw-bold">Percent savings:</span>
                                                {formattedSavings}%
                                                <br/><br/>
                
                
                                                <span className="fw-bold">ID on Steam:</span>
                                                <span>{sharkDetails.steamAppID}</span>
                                        </div><br/>
                                <div>
                                <Link to = '/purchase'>
                                <button className="btn btn-light">Purchase now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    </>
        ) : (
             <p>Loading Shark Details...</p>
         )}
         </div> 
    );
 }

export default SingleShark