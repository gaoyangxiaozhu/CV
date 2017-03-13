import React from 'react'

export default class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const avatarURL = this.props.data.avatar
        const username = this.props.data.username
        const baseDescription = this.props.data.baseDescription
        const job = this.props.data.job
        return (
            <div className="user-info">
                <div className="avatar">
                    <img src={avatarURL} className="img"/>
                </div>
                <div className="name">
                        { username }
                </div>
                <div className="base-desc">
                    {
                        baseDescription.map((description, index)=> {
                            return (<p key={index} > {description} </p>)
                        })
                    }
                </div>
                <div className="job">
                    <p> {job} </p>
                </div>
            </div>
        )
    }
}
