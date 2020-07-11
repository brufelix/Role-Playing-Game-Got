import React, { ReactNode } from 'react'
import '../style/parchment.css'

const Parchment = (props: any) => {
    
    const items = (items: []): ReactNode => {
        return items.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }

    return(
        <div className="container">
            <div className="title">
                <h1>Pergaminhos</h1>
            </div>
            <div className="list">
                <ul>
                    {items(props.items)}
                </ul>
            </div>
        </div>
    )
}

export default Parchment