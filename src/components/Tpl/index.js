import React from 'react'
import Wall from '../Wall/index'
export default class Tpl extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const type = this.props.data.type.toLowerCase()
        console.log(type)
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
            <div>
                { stime.trim().replace(/\./, '年')+'月'} 至 { etime.trim().replace(/\./, '年')+'月'}
            </div>
        ) : ('')
        return (
            <div className="">
                <div className="">
                    <div>
                        <a href={ url }> {name } </a>
                    </div>
                    <div>
                        <Wall data={ technologies }/>
                    </div>
                    {timerContainer}
                </div>
                <div className="">
                    { description }
                </div>
            </div>
        )
    }
}
