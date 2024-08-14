import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import{Link} from 'react-router-dom';

function AllShark(){
    const [shark, setShark]= useState([]);
    // const [nextPage, setNextPage]= useState(null);

    useEffect(()=>{
        let getSharks = async () => {
            try{
                const {data} = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
                setShark(data.results);
                console.log(data.results)
                return data.results;
                
            }catch(err){
                console.error('Issue loading the sharks', err)
        }
    } 
    getSharks();
    }, []);


    return(
        <>
    <h1>Sharks</h1>
    <div>
        {shark.map((single_shark)=>{
            return(
               <div key={single_shark.title}> 
                {single_shark.title}
                <img 
                src=''
                />
               </div>
            );
        })

        }
    </div>
        </>
    )


}

export default AllShark

