import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { houseTyrell, houseTully, houseTargaryen, houseStark, houseMartell, houseLannister, houseGreyjoy, 
houseBaratheon, houseArryn  } from '../components/imgsRequires'
import { nameChanged, emailChanged, passwordChanged, houseChanged, clear } from '../react-redux/actions'
import CheckBox from '../components/checkBoxOfSelectHouse'
import { IProps, responseSignin, IGot } from '../interfaces/interfaces'
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
        for (const [, value]  of Object.entries(this.props.state)){
            if (value.trim() === "") return false
        }
        return true
    }

    handleClickSignup = async () => {
        if (this.validationData()){
            await axios.post<responseSignin>(`${baseURL}/signup`, {...this.props.state })
                .then(res => {
                    if (res.data.auth) {
                        localStorage.setItem("currentUser", JSON.stringify(res.data.token))
                        this.props.history.push("/home")
                        this.props.clear()
                    }
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
                    <CheckBox setHouse={houseChanged} img={houseTyrell} name="Casa de Tyrell"/>
                    <CheckBox setHouse={houseChanged} img={houseTully} name="Casa de Tully"/>
                    <CheckBox setHouse={houseChanged} img={houseTargaryen} name="Casa de Targaryen"/>
                    <CheckBox setHouse={houseChanged} img={houseStark} name="Casa de Stark"/>
                    <CheckBox setHouse={houseChanged} img={houseMartell} name="Casa de Martell"/>
                    <CheckBox setHouse={houseChanged} img={houseLannister} name="Casa de Lannister"/>
                    <CheckBox setHouse={houseChanged} img={houseGreyjoy} name="Casa de Greyjoy"/>
                    <CheckBox setHouse={houseChanged} img={houseBaratheon} name="Casa de Baratheon"/>
                    <CheckBox setHouse={houseChanged} img={houseArryn} name="Casa de Arryn"/>
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