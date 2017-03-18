import React from 'react'

import './index.scss'

export default class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
        this._fgbars = []

    }
    componentDidMount() {
        this._timer = setTimeout(
            ()=> {
                this._fgbars.forEach((fgbar)=> {
                    let [ fgBarDom, percent ] = fgbar
                    fgBarDom.style.width = `${percent}%`
                })
            }, 0)
    }
    componentWillUnmount() {
        this._fgbars = []
        if(this._timer) {
            clearTimeout(this._timer)
        }
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
                                    { key }
                                </div>
                                <div className="skill-bar" data-percent={ skills[key] }>
                                    <div className="skill-bar-name-container">
                                        { key }
                                    </div>
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
