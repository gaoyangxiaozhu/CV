import React from 'react'
import Tpl from '../../components/Tpl/index'

export default class Project extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        let projects = this.props.data
        return (
            <div>
                {
                    projects.map((project, index)=> <Tpl data={ Object.assign(project, { type: 'p' })} key={ index }/>)
                }
            </div>
        )
    }
}
