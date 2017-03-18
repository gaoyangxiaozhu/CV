import React from 'react'
import Wall from '../Wall/index'
import './index.scss'

export default class Tpl extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const type = this.props.data.type.toLowerCase()

        let name,
            url,
            description,
            technologies,
            corporate,
            stime,
            etime

        if(type === 'p'){
            ({ name, url, description, technologies } = this.props.data)
        }else{
            ({ corporate, url, stime, etime, description, technologies } = this.props.data)
        }

        let timerContainer = null
        timerContainer = type === 'w' ? (
            <div className="meta time">
                { stime.trim().replace(/\./, '年')+'月'} 至 { etime.trim().replace(/\./, '年')+'月'}
            </div>
        ) : ('')

        return (
            <div className='tpl'>
                <div className>
                    <h1 className="name">
                        <a href={ url }> {name || corporate } </a>
                    </h1>
                    <div className="technologies">
                        <Wall data={ technologies }/>
                    </div>
                </div>
                {timerContainer}
                <div className="">
                    <p>{ description }</p>
                </div>
            </div>
        )
    }
}
