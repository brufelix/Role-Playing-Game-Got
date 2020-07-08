import React, { Component } from 'react'

import { map, comercio, magia, sabedoria, temor, 
moeda, pergaminho, suditos } from '../components/imgsRequires'
import { selectImage } from '../common/functions'
import '../style/home.css'

export default class Home extends Component {
    render() {
        let image = selectImage("houseStark")
    
        return(
            <div>
                <img src={map} alt="Mapa" className="map" />
                <img src={image} alt="Casa" className="house"/>
                <button className="buttonExit">Sair</button>
                <div className="inforTools" >
                    <div className="boxInforTools">
                        <img src={comercio} alt="Casa" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={magia} alt="Casa" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={sabedoria} alt="Casa" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={temor} alt="Casa" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                </div>
                <div className="divBottom" ></div>
                <div className="InfoBottom">
                <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Suditos" src={suditos} />    
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Pergaminho" src={pergaminho} />    
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Moeda" src={moeda} />    
                        <p>8000</p>
                    </div>
                </div>
            </div>
        )
    }
}