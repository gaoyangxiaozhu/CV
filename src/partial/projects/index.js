import React from 'react'
import Tpl from '../../components/Tpl/index'

export default class Project extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        let projects = this.props.data
        const sectionTitle = this.props.title || '项目经历'
        return (
            <div className="projects">
                <h1 className="section-title"> { sectionTitle } </h1>
                {
                    projects.map((project, index)=> <Tpl data={ Object.assign(project, { type: 'p' })} key={ index }/>)
                }
            </div>
        )
    }
}
