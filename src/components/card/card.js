import React,{useEffect,useState} from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards=({channel})=>{
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />

            </SkeletonTheme>
        </div>
        :
        <Link to={`shows/${channel.stationId}`} style={{textDecoration:"none",color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={channel.stationInfo.logos[0].url}/>
            </div>
        </Link>
    }
    
    </>
}

export default Cards