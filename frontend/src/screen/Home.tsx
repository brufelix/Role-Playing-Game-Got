import React, { Component } from 'react'
import axios from 'axios'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'

import { map, comercio, magia, sabedoria, temor, 
moeda, pergaminho, suditos } from '../components/imgsRequires'
import { clear, houseChanged } from '../react-redux/actions'
import { selectImage } from '../common/functions'
import { IProps, IGot, postHouse } from '../interfaces/interfaces'
import baseURL from '../common/baseURL'
import '../style/home.css'

type propsFromRedux = ConnectedProps<typeof connector>
type Props = propsFromRedux & IProps

class Home extends Component<Props> {

    constructor(props){
        super(props)
        this.logout.bind(this)
    }

    UNSAFE_componentWillMount() {
        const { houseChanged } = this.props
        if (!localStorage.getItem("currentUser")){
            this.props.history.push("/signin")
        }
        axios.post<postHouse>(`${baseURL}/gethouse`, {email: this.props.email})
            .then(res => {
                houseChanged(res.data.house)
            })
    }

    logout() {
        localStorage.removeItem("currentUser")
        this.props.clear()
        this.props.history.push("/signin")
    }

    render() {
        let image = selectImage(this.props.house)
        return(
            <div>
                <img src={map} alt="Mapa" className="map" />
                <img src={image} alt="Casa" className="house"/>
                <button className="buttonExit" onClick={() => this.logout()}>Sair</button>
                <div className="inforTools" >
                    <div className="boxInforTools">
                        <img src={comercio} alt="comércio" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={magia} alt="Magia" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={sabedoria} alt="Sabedoria" className="imgsInfor"/>
                        <p>8000</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={temor} alt="Temor" className="imgsInfor"/>
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

const mapStateToProps = (state: IGot) => ({ house: state.got.house, email: state.got.email })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ clear, houseChanged }, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Home)