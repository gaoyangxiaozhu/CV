import React from 'react'

export default class Wall extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data
        let content = data.map((val, index)=> <li key={index}> { val } </li>)
        return (
            <ul className="">
                { content }
            </ul>
        )
    }
}
