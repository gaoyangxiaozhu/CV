import React from 'react'

import './index.scss'

export default class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
        this._fgbars = []

    }
    componentDidMount() {
        setTimeout(
            ()=> {
                this._fgbars.forEach((fgbar)=> {
                    let [ fgBarDom, percent ] = fgbar
                    fgBarDom.style.width = `${percent}%`
                })
            }, 0)
    }
    render() {
        const skills = this.props.data
        const keys = Object.keys(skills)
        return (
            <div className="skills">
                {
                    keys.map((key)=> {
                        return (
                            <div className="skill" key={key}>
                                <div className="skill-name">
                                    { key.toUpperCase() }
                                </div>
                                <div className="skill-bar" data-percent={ skills[key] }>
                                    <div className="skill-bar-bg"></div>
                                    <div className="skill-bar-fg" ref={(fgbar)=> { this._fgbars.push([fgbar, skills[key]])}}></div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
