import React from 'react'
import './index.scss'

export default class BaseInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const avatarURL = this.props.data.avatar
        const username = this.props.data.name
        const baseDescription = this.props.data.baseDescription
        const job = this.props.data.job
        return (
            <div className="m-user">
                <div className="avatar">
                    <img src={avatarURL} className="img"/>
                </div>
                <div className="name">
                        { username }
                </div>
                <div className="desc">
                    <div className="desc-base">
                        {
                            baseDescription.map((description, index)=> {
                                return (<p key={index} > {description} </p>)
                            })
                        }
                    </div>
                    <div className="desc-job">
                        <p> {job} </p>
                    </div>
                </div>
            </div>
        )
    }
}
