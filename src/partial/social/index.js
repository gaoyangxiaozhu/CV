import React from 'react'

import './index.scss'

const iconMap = {
    'email': 'fa fa-envelope',
    'website': 'fa fa-home',
    'github': 'fa fa-github-alt'
}

export default class Social extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const social = this.props.data
        return social ? (
            <div className="social">
                <ul>
                    {
                        social.map((item)=> {
                            return (
                                <li className="social-item" key={ item.type }>

                                    <a href={item.type === 'email' ? 'mailto:' + item.url : item.url } className={ item.type }>
                                        <i className={ iconMap[item.type]}></i>
                                        <span> {item.alias || item.url.trim().replace(/(http|https):\/\//i,'')} </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        ) : ('')
    }
}
