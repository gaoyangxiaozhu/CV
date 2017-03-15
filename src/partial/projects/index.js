import React from 'react'
import Tpl from '../../components/Tpl/index'

import './index.scss'

export default class Project extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        let projects = this.props.data
        return (
            <div className="projects">
                <h1> 项目经历</h1>
                {
                    projects.map((project, index)=> <Tpl data={ Object.assign(project, { type: 'p' })} key={ index }/>)
                }
            </div>
        )
    }
}
