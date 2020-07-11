import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'

import { map, comercio, magia, sabedoria, temor, 
moeda, pergaminho, suditos } from '../components/imgsRequires'
import Parchment from '../components/parchment'
import { clear, houseChanged, valuesChanged, getHouseName, getValuesOfSkills } from '../react-redux/actions'
import { selectImage, items } from '../common/functions'
import { IProps, IGot } from '../interfaces/interfaces'
import '../style/home.css'

type propsFromRedux = ConnectedProps<typeof connector>
type Props = propsFromRedux & IProps

class Home extends Component<Props> {

    constructor(props){
        super(props)
        this.logout.bind(this)
    }

    UNSAFE_componentWillMount() {
        const { email, getHouseName, getValuesOfSkills } = this.props
        if (!localStorage.getItem("currentUser")){
            this.props.history.push("/signin")
        }
        getValuesOfSkills(email)
        getHouseName(email)
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
                        <p>{this.props.values.commerce}</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={magia} alt="Magia" className="imgsInfor"/>
                        <p>{this.props.values.magic}</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={sabedoria} alt="Sabedoria" className="imgsInfor"/>
                        <p>{this.props.values.wisdom}</p>
                    </div>
                    <div className="boxInforTools">
                        <img src={temor} alt="Temor" className="imgsInfor"/>
                        <p>{this.props.values.tear}</p>
                    </div>
                </div>
                <div className="divBottom" >
                    <Parchment items={items}/>
                </div>
                <div className="InfoBottom">
                <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Suditos" src={suditos} /> 
                        <p>{this.props.values.suddios}</p>   
                    </div>
                    <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Pergaminho" src={pergaminho} />
                        <p>{items.length}</p>    
                    </div>
                    <div className="boxInforTools">
                        <img  className="imgsBottom" alt="Moeda" src={moeda} />    
                        <p>{this.props.values.currency}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IGot) => ({ house: state.got.house, email: state.got.email, values: state.got.values })
const mapDispatchToProps = (dispatch: any) => 
    bindActionCreators({ clear, houseChanged, valueChanged: valuesChanged, getHouseName, getValuesOfSkills }, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Home)