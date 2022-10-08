import React,{useEffect,useState} from "react"
import CARDS from "../CARDS/CARDS"
import "./ShowList.css"
import { useParams } from "react-router-dom"
import { getDefaultNormalizer } from "@testing-library/react"



const ShowList=()=>{
    const[showList,setshowList]=useState([])
    const{stationId}=useParams()

    useEffect(()=>{
        getData()
    },[stationId])

    const getData=()=>{
        fetch(`https://codelikeada.lgads.tv/epg/listings?stationId=${stationId?stationId:"12323--"}&limit=50&fields=stationId,programTitle,programId,images,longDescription,starTtime,endTime,genre,language,airingAgeRating`)
        .then(res=>res.json())
        .then(data=>setshowList(data.result))

        
    }

    return (
        <div className="show__list">
            <h2 className="list__title">SHOWS</h2>
            <div className="list__cards">
                {
                    showList.map(show=>(
                        <CARDS show={show}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowList