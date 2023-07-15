import React from 'react'
import { useEffect, useState } from 'react';
import './Content.css'
export default function Content() {
    const [apidata ,setapidata] = useState([]);
    const [search ,setsearch] = useState("Delhi");
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+" "+(showdate.getMonth()+1);
    var displaytodaysdate1 = showdate.toDateString();
   var displaytime = showdate.getHours()+":"+showdate.getMinutes()+":"+showdate.getSeconds();
    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0dacb90e9cf628d17e56cf1498393f45&units=metric
      `).then((res)=>{
         res.json().then((result)=>{
          console.log(result)
              setapidata(result);
         })
      })
    } ,[search])
  return (
    
    <div className="container" style={{height:"100vh"}}>
        <div className="container1">
          <div className="cont">
          {
            apidata? <h3>{apidata.name}<span><i class="fa-solid fa-arrow-turn-up"></i></span></h3>
            :<h3>NO DATA FOUND!!!</h3>
          }
          
          <h3>{displaytodaysdate1}</h3>
          </div>
          
         <div className="dis-f">
       
         {
            apidata.weather? <img src = {"http://openweathermap.org/img/w/" + apidata.weather[0].icon+ ".png"} style = {{height: "160px" ,width:"160px"}}/>
            :null
          }
              {
              apidata.weather? <p>{apidata.weather[0].main}</p>
              :null
            }
        <input className = "input-me" type="search" placeholder="Enter Your Location" onChange={(e)=>{
             setsearch(e.target.value);
      }} value={search}/>
    
      {
        apidata? (<div className="element">
         
          
             

            {
              apidata.main ?<p>{apidata.main.temp}<span style={{fontSize:"40px"}}>&#8451;</span></p>
              :<h3>NO DATA FOUND!!</h3>
            }
          
        </div>
        )
        : (<h1>No data Found</h1>)
      }
         </div>
         <hr></hr>
         <div className="card">
          <div className="card1">
            <h3>Humidity</h3>
            <i class="fa-solid fa-arrow-down"></i>
            {
              apidata?<div className="element1">
                {
                  apidata.main?<p>{apidata.main.humidity}%</p>
                  :null
                }
              </div>
              :null
            }
            
          </div>
          <div className="card1">
            <h3>Max.Temp</h3>
            <i class="fa-solid fa-arrow-down"></i>
            {
              apidata?<div className="element1">
                {
                  apidata.main?<p>{apidata.main.temp_max}</p>
                  :null
                }
              </div>
              :null
            }
          </div>
          <div className="card1">
            <h3>Min.Temp</h3>
            <i class="fa-solid fa-arrow-down"></i>
            {
              apidata?<div className="element1">
                {
                  apidata.main?<p>{apidata.main.temp_min}</p>
                  :null
                }
              </div>
              :null
            }
          </div>
         </div>
        </div>
     

    </div>
  )
}
