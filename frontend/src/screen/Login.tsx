import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import GOT from '../assets/images/gameOfThrones.jpg'
import baseURL from '../common/baseURL'
import { IUser, IProps,responseSignin, IGot } from '../interfaces/interfaces'
import { emailChanged, passwordChanged, clear} from '../react-redux/actions'
import '../style/login.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & IProps

class Login extends Component<Props, IUser> {
    _isMounted = false
    constructor(props){
        super(props)
        this.handleClickSignin.bind(this)
    }

    UNSAFE_componentWillMount() {
        this._isMounted = false
    }

    componentDidMount() {
        this._isMounted = true
    }

    handleClickSignin = (): void => {        
        axios.post<responseSignin>(`${baseURL}/signin`, {...this.props.state })
            .then(res => {
                if (res.data.auth) {
                    localStorage.setItem("currentUser", JSON.stringify(res.data.token))
                    this.props.history.push("/home")
                } else {
                    this.props.clear()
                }
            })
    }

    render() {

        const { emailChanged, passwordChanged } = this.props 

        return(
            <div className="login">
                <div className="inputs">
                    <div>
                        <input className="input" type="text" placeholder="Insira seu E-mail..." onChange={emailChanged}
                        value={this.props.email}/>
                        <input className="input" type="password" placeholder="Senha..."  onChange={passwordChanged}
                        value={this.props.password}/>
                    </div>
                    <div>
                        <button className="button login" onClick={this.handleClickSignin} > Entrar </button>
                        <button className="button register" >
                            <Link className="link" to="/signup">Cadastro</Link>
                        </button>
                    </div>
                </div>
                <img className="image" src={GOT} alt="GOT"/>
            </div>
        )
    }
}

const mapStateToProps = (state: IGot) => ({
    state: state.got,
    email: state.got.email,
    password: state.got.password
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ emailChanged, passwordChanged, clear }, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(withRouter(Login))