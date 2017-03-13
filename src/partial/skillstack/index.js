import React from 'react'

export default class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const skills = this.props.data
        const keys = Object.keys(skills)
        return (
            <div className="skills">
                {
                    keys.map((key)=> {
                        return (
                            <div className="bar" key={key}>
                                <div className="name">
                                    { key }
                                </div>
                                <div className="inline-bar" data-percent={ skills[key] }>
                                    { skills[key] }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
