import React from 'react'
import Tpl from '../../components/Tpl/index'

import './index.scss'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const works = this.props.data
        return (
            <div className='works'>
                <h1>实习经历</h1>
                {
                    works.map((work, index)=> <Tpl data={Object.assign(work, {type:'w'})} key={index}/>)
                }
            </div>
        )
    }
}
