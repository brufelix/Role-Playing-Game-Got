import React, { Component } from 'react'

import { map, comercio, magia, sabedoria, temor, 
moeda, pergaminho, suditos } from '../components/imgsRequires'
import { selectImage } from '../common/functions'
import { IProps } from '../interfaces/interfaces'
import '../style/home.css'

export default class Home extends Component<IProps> {

    UNSAFE_componentWillMount() {
        if (!localStorage.getItem("currentUser")){
            this.props.history.push("/signin")
        } 
    }

    logout() {
        localStorage.removeItem("currentUser")
        this.props.history.push("/signin")
    }

    render() {
        let image = selectImage("houseStark")
    
        return(
            <div>
                <img src={map} alt="Mapa" className="map" />
                <img src={image} alt="Casa" className="house"/>
                <button className="buttonExit" onClick={() => this.logout()}>Sair</button>
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