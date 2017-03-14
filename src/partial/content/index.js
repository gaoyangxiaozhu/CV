import React from 'react'
import Projects from '../projects'
import Works from '../works'
import Educations from '../educations'

import './index.scss'

var sectionMapping = {
    projects: Projects,
    works: Works,
    educations: Educations
}
export default class Side extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const sections = Object.keys(this.props.data)
        console.log(sections)
        return (
            <div className="">
                {
                    sections.map((name)=> {
                        let Section = sectionMapping[name]
                        return (<Section data={this.props.data[name]} key={name} />)
                    })
                }
            </div>
        )
    }
}
