import React from 'react'
import Tpl from '../../components/Tpl/index'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const works = this.props.data
        return (
            <div>
                {
                    works.map((work, index)=> <Tpl data={Object.assign(work, {type:'w'})} key={index}/>)
                }
            </div>
        )
    }
}
