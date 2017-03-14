import React from 'react'

export default class Educations extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map((data, index)=> {
                        let { school, stime, etime, major, degree, gpa } = data
                        let [ syear, smonth ] = stime.split('.')
                        let [ eyear, emonth ] = etime.split('.')

                        return (
                            <div key={school}>
                                <h2> {school} </h2>
                                <div>
                                    { `${syear}年${smonth}月`} 至 { `${eyear}年${emonth}月` }
                                </div>
                                <div>
                                    <span>{degree}, {major}</span>
                                    <span>GPA: {gpa}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
