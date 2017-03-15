import React from 'react'
import './index.scss'

export default class Wall extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data
        let content = data.map((val, index)=> <li key={index}> { val } </li>)
        return (
            <div className="wall">
                <ul>
                    { content }
                </ul>
            </div>
        )
    }
}
