import React from 'react'
import BaseInfo from '../baseinfo'
import SkillStack from '../skillstack'
import Social from '../social'


import './index.scss'

var sectionMapping = {
    baseinfo: BaseInfo,
    skillstacks: SkillStack,
    social: Social
}
export default class Side extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const sections = Object.keys(this.props.side)
        console.log(this.props.side)
        return (
            <div className="cv-side">
                {
                    sections.map((name)=> {
                        let Section = sectionMapping[name]
                        return (<Section data={this.props.side[name]} key={name} />)
                    })
                }
            </div>
        )
    }
}
