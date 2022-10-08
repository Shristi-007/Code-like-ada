import React,{useEffect,useState} from "react"
import Card from "../card/card"
import "./channelList.css"
import { useParams } from "react-router-dom"
import { getDefaultNormalizer } from "@testing-library/react"

// const StationList=()=>{
//     const[stanList,setstanList]=useState([])
//     const{type}=useParams()

//     useEffect(()=>{
//         getData()
//     },[])

//     const getData=()=>{
//         fetch("https://codelikeada.lgads.tv/epg/list/stationId")
//         .then(res=>res.json())
//         .then(data=>setstanList(data.result))

        
//     }

const ChannelList=()=>{
    const[chanList,setchanList]=useState([])
    const{type}=useParams()

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        fetch("https://codelikeada.lgads.tv/epg/stations?fields=stationId,logos")
        .then(res=>res.json())
        .then(data=>setchanList(data.result))

        
    }

    return (
        <div className="channel__list">
            <h2 className="list__title">CHANNELS</h2>
            <div className="list__cards">
                {
                    chanList.map(channel=>(
                        <Card channel={channel}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ChannelList