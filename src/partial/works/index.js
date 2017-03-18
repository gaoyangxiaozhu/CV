import React from 'react'
import Tpl from '../../components/Tpl/index'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const works = this.props.data
        const sectionTitle = this.props.title || '实习经历'
        return (
            <div className='works'>
                <h1 className="section-title">{ sectionTitle }</h1>
                {
                    works.map((work, index)=> <Tpl data={Object.assign(work, {type:'w'})} key={index}/>)
                }
            </div>
        )
    }
}
