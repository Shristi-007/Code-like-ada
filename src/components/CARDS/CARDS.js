import React,{useEffect,useState} from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "./CARDS.css"
import { Link } from "react-router-dom"

const CARDS=({show})=>{
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
      const [imagesAvail,setimagesAvail]=useState(false)

    useEffect(()=>{
            if(show.programInfo.hasOwnProperty('images'))
            {setimagesAvail(true)
            }
        
    },[])
    //console.log(show.programInfo);
    return <>
    {
        isLoading
        ?
        <div className="CARDS">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />

            </SkeletonTheme>
        </div>
        :
        (
            imagesAvail
            ?
            <Link to={`shows/${show.stationId}/${show.programId}`} style={{textDecoration:"none",color:"white"}}>
                <div className="CARDS">
                    
                    <img className="cards__img" src={show.programInfo.images[0].url}/>
                    <div className="cards__overlay">
                        <div className="card__title">{show?show.programInfo.programTitle:""}</div>
                        <div className="card__runtime">
                            {show?show.programInfo.genre:""}
                            
                        </div>
                        <div className="card__description">{show ? show.programInfo.longDescription.slice(0,118)+"..." : ""}</div>
                        <div className="card__starttime">{show ? show.startTime: ""}</div>
                    </div>

                    
                </div>
            </Link>
            :
            <Link to={`shows/${show.stationId}/${show.programId}`} style={{textDecoration:"none",color:"white"}}>
                <div className="CARDS">
                    
                    <img className="cards__img" src="https://images.unsplash.com/photo-1614518922230-f9216308655f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"/>
                    <div className="cards__overlay">
                        <div className="card__title">{show?show.programTitle:""}</div>
                        <div className="card__runtime">
                            {show?show.genre:""}
                            
                        </div>
                        <div className="card__description">{show ? show.programInfo.longDescription.slice(0,118)+"..." : ""}</div>
                        <div className="card__starttime">{show ? show.programInfo.startTime: ""}</div>
                    </div>

                    
                </div>
            </Link>
        )
    }
    
    </>
}

export default CARDS
