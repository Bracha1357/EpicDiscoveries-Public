import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom';

function AllShark(){
    const [shark, setShark]= useState([]);
    // const [nextPage, setNextPage]= useState(null);

    useEffect(()=>{
        let getSharks = async () => {
            try{
                const {data} = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
                setShark(data);
                // console.log(data)
            }catch(err){
                console.error('Issue loading the sharks', err)
        }
    } 
    getSharks();
    }, []);



    return(
        <>
    <h1>Sharks</h1>
    {shark ?(
        <div  className='container'>
            <div className='row'>
            {shark.map((single_shark)=>{
                return(
                    <div className='col-md-4 mb-4'>
                        <div key={single_shark.title} className='card' style={{width: '20rem', height: '20rem', borderRadius: '0px'}}> 
                            <Link to={`/shark/${single_shark.gameID}`} className='text-decoration-none'>
                                <img 
                                    src={single_shark.thumb}
                                    alt={single_shark.title}
                                    className='card-img-top img-fluid'
                                    style={{ height: '110px', objectFit: 'cover', borderRadius: '0px' }}
                                />
                               
                                <div className='card-body text-info-emphasis'>
                                    <div className='text-center'>
                                    <h5>{single_shark.title}</h5>
                                    </div>
                                    
                                    <span>Price</span>
                                    <p className='text-decoration-line-through'>${single_shark.normalPrice}</p>
                                    <span className=''>Now Just!!</span>
                                    <h3>${single_shark.salePrice}</h3>  
                                    
                                    
                                      
                                </div>
                            </Link>
                    </div>
                </div>  
                )})
    
}
            </div>
        </div>
            ):(
                <p>Loading Shark Details...</p>
            )}
        </>
    )
}

export default AllShark

