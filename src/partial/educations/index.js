import React from 'react'
import './index.scss'

export default class Educations extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const sectionTitle = this.props.title || '教育背景'
        return (
            <div className="educations">
                <h1 className="section-title"> { sectionTitle } </h1>
                {
                    this.props.data.map((data, index)=> {
                        let { school, stime, etime, major, degree, gpa, ranking, walk, college } = data
                        let [ syear, smonth ] = stime.split('.')
                        let [ eyear, emonth ] = etime.split('.')

                        return (
                            <div key={school}>
                                <h2> {school} </h2>
                                <div className="education">
                                    <div className="meta time">
                                        { `${syear}年${smonth}月`} - { `${eyear}年${emonth}月` }
                                    </div>
                                    <div className="detail">
                                        {
                                            walk && <span className="walk strong">保送</span>
                                        }
                                        <span>{degree}</span>
                                        <span>{major}</span>
                                        <span>{college} </span>
                                        {
                                            gpa && !Number.isNaN(parseFloat(gpa)) && <span>GPA: {gpa}</span>
                                        }
                                        {
                                            ranking && <span className="strong"> {ranking} </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
