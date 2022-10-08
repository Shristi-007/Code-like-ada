import React, { useEffect,useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ChannelList from "../../components/channelList/channelList";
import { Link } from 'react-router-dom';


const Home=()=>{

    const [Channels, setChannels]=useState([])
    
    useEffect(() => {
        console.log('effect');
       fetch("https://codelikeada.lgads.tv/epg/listings?limit=20&fields=genre,programTitle,images,stationId,logos")
       .then(res=>res.json())
       .then(data=> {
        console.log("data ", data.result);
        if (data.result) {
            setChannels(data.result);
        }
         
       })
    },[])
   // console.log("ch " +  Channels.map(x => x.programInfo.programTitle));
    return (
        <>

          { <div className="poster">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={1}
              infiniteLoop={true}
              showStatus={false}
              >
                {
                    Channels.map((channel, i) => {
                       
                        if (channel.programInfo.images && channel.programInfo.images.length) {
                         
                                return (
                                    <div>
                                        <h2>{channel.programInfo.programTitle}</h2>
                                        <img height="500" key={i} src={channel.programInfo.images[0].url} />
                                        
                                    </div>
                                );
                                 
                        }
            
                     
                    
                    })
                }
                </Carousel>
                <ChannelList />
          </div>}
        </>
    )
}
export default Home