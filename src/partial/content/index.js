import React from 'react'
import Projects from '../projects'
import Works from '../works'
import Educations from '../educations'
import Awards from '../awards'

import './index.scss'

var sectionMapping = {
    projects: {
        component: Projects,
        cnTitle : '项目经验',
        enTitle: 'Projects'
    },
    works: {
        component : Works,
        cnTitle: '实习经历',
        enTitle: 'Internship'
    },
    educations: {
        component: Educations,
        cnTitle: '教育背景',
        enTitle: 'Educations'
    },
    awards: {
        component: Awards,
        cnTitle: '获奖经历',
        enTitle: 'Awards'
    }
}

export default class Side extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const sections = Object.keys(this.props.data)
        console.log(sections)
        return (
            <div className="cv-main">
                {
                    sections.map((name)=> {
                        let Section = sectionMapping[name]['component']
                        return (<Section data={this.props.data[name]} key={name} title={ sectionMapping[name][`${this.props.lang}Title`] }/>)
                    })
                }
            </div>
        )
    }
}
