import React from 'react'
import './index.scss'

export default class Awards extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        let listItem = this.props.data.map((item, index)=> <li key={index}> {item} </li>)
        return (
            <div className="awards">
                <h1>获奖经历</h1>
                <div className="award">
                    <ul>
                        { listItem }
                    </ul>
                </div>
            </div>
        )
    }
}
