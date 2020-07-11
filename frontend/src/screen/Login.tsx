import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import baseURL from '../common/baseURL'
import { IUser, IProps,postSignin, IGot } from '../interfaces/interfaces'
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
        axios.post<postSignin>(`${baseURL}/signin`, {...this.props.state })
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
            <div className="container-form ">
                <div className="form">
                    <h1 className="title">GOT</h1>
                    <input className="input" placeholder="Insirar seu E-mail..." type="text"
                    onChange={emailChanged} value={this.props.email}/>
                    <input className="input" placeholder="Insirar sua Senha..." type="password"
                    onChange={passwordChanged} value={this.props.password}/>
                    <button className="buttons" onClick={this.handleClickSignin}>Entrar</button>
                    <button className="buttons" >
                        <Link className="link" to="/signup">Cadastro</Link>
                    </button>
                    <h6>Created with love</h6>
                </div>
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