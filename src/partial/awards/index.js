import React from 'react'
import './index.scss'

export default class Awards extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        let listItem = this.props.data.map((item, index)=> <li key={index}> {item} </li>)
        const sectionTitle = this.props.title || '获奖经历'
        return (
            <div className="awards">
                <h1 className="section-title"> { sectionTitle } </h1>
                <div className="award">
                    <ul>
                        { listItem }
                    </ul>
                </div>
            </div>
        )
    }
}
