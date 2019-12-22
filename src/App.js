import React,{Component} from 'react';

import './App.css';
import MapGL, {GeolocateControl} from 'react-map-gl'
require('dotenv').config()
var mqtt  = require('mqtt')
var client;

export default class App extends Component{

  componentDidMount(){

  }

  conection = () =>{
   client =  mqtt.connect("wss://test.mosquitto.org:8081",/*this.state.brokerURL*/"monitora", 'clientic_' + Math.random())
   client.on('connect', function(){
  
     console.log('conectado')

   })

   
  }
  
  
  acionar= () => {
   if(client.connected){
      client.publish(process.env.REACT_APP_TOPIC_PUBLISH)
   }
  }

  render(){
    
    return(
      <MapGL
       mapboxApiAccessToken= {process.env.REACT_APP_KEY_MAP}
       height={1000}
       width={1000}
       altitude={15.8}
      >
        <button onClick={this.acionar}>Acionar</button>
        <button onClick={this.conection}> Conectar</button>

      </MapGL>
    )
  }
}
