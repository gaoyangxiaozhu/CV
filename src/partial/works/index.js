import React from 'react'
import Tpl from '../../components/Tpl/index'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const works = this.props.data
        return (
            <div className='works'>
                <h1 className="section-title">实习经历</h1>
                {
                    works.map((work, index)=> <Tpl data={Object.assign(work, {type:'w'})} key={index}/>)
                }
            </div>
        )
    }
}
