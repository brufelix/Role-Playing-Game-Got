import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell, houseLannister, houseGreyjoy, 
houseBaratheon, houseArryn  } from '../components/imgsRequires'
import { nameChanged, emailChanged, passwordChanged, houseChanged, clear } from '../react-redux/actions'
import CheckBox from '../components/checkBoxOfSelectHouse'
import { IProps, postSignin, IGot } from '../interfaces/interfaces'
import baseURL from '../common/baseURL'
import '../style/register.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & IProps

class Register extends Component<Props>{
    _isMounted = false
    constructor(props) {
        super(props)
        this.handleClickSignup.bind(this)
    }

    UNSAFE_componentWillMount() {
        this._isMounted = false

    }

    componentDidMount() {
        this._isMounted = true
    }

    validationData = (): boolean => {
        const stateObj = {
            email: this.props.state.email,
            name: this.props.state.name,
            password: this.props.state.password,
            house: this.props.state.house
        }
        for (const [, value]  of Object.entries(stateObj)){
            if (value.trim() === "") return false
        }
        return true
    }

    handleClickSignup = () => {
        if (this.validationData()){
            axios.post<postSignin>(`${baseURL}/signup`, {...this.props.state })
                .then(res => {
                    if (res.data.auth) {
                        localStorage.setItem("currentUser", JSON.stringify(res.data.token))
                    }}).then(_ => {
                        axios.post(`${baseURL}/game/values`, {
                            user: this.props.email,
                            suddios: Math.floor(Math.random() * 1000),
                            tear: Math.floor(Math.random() * 1000),
                            wisdom: Math.floor(Math.random() * 1000),
                            commerce: Math.floor(Math.random() * 1000),
                            magic: Math.floor(Math.random() * 1000),
                            currency: Math.floor(Math.random() * 1000)
                    }).then(_ => { this.props.history.push("/home") })
                })
        } else {
            alert("Preencha Nome, Email, Senha, e selecione uma casa!")
        }
    }

    render() {
        const { nameChanged, emailChanged, passwordChanged, houseChanged } = this.props

        return (
            <div>
                <div className="inputs">
                    <div>
                        <input onChange={nameChanged} className="input" type="text" placeholder="Nome"/>
                        <input onChange={emailChanged} className="input" type="text" placeholder="Email"/>
                        <input onChange={passwordChanged} type="password" className="input" placeholder="Password"/>
                    </div>
                        <button onClick={this.handleClickSignup} className="button">Cadastra-se</button>
                </div>
                <div className="checkbox">
                    <CheckBox setHouse={houseChanged} img={houseTyrell} name="houseTyrell"/>
                    <CheckBox setHouse={houseChanged} img={houseTully} name="houseTully"/>
                    <CheckBox setHouse={houseChanged} img={houseTargaryen} name="houseTargaryen"/>
                    <CheckBox setHouse={houseChanged} img={houseStark} name="houseStark"/>
                    <CheckBox setHouse={houseChanged} img={houseMartell} name="houseMartell"/>
                    <CheckBox setHouse={houseChanged} img={houseLannister} name="houseLannister"/>
                    <CheckBox setHouse={houseChanged} img={houseGreyjoy} name="houseGreyjoy"/>
                    <CheckBox setHouse={houseChanged} img={houseBaratheon} name="houseBaratheon"/>
                    <CheckBox setHouse={houseChanged} img={houseArryn} name="houseArryn"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IGot) => ({
    state: state.got,
    name: state.got.name,
    email: state.got.email,
    password: state.got.email,
    house: state.got.house
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ nameChanged, emailChanged, passwordChanged, houseChanged, clear }, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(withRouter(Register))