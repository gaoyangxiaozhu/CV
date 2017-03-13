import React from 'react'

import './index.scss'

export default class Social extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const social = this.props.data

        return social ? (
            <div>
                <ul className="cv-social">
                    {
                        social.map((item)=> {
                            return (
                                <li className="social-item" key={ item.type }>
                                    <a href={item.type === 'email' ? 'mailto:' + item.url : item.url } className={ item.type }></a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        ) : ('')
    }
}
