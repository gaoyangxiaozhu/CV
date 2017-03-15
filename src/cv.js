import React from 'react'
import ReactDOM from 'react-dom'

import Loading from './components/Loading'
import Side from './partial/side/index'
import Content from './partial/content/index'

// import { loadJSON } from './lib/util' why this statment is wrong ? and can not import loadJSON?

import Util  from './lib/util'

import 'font-awesome/css/font-awesome.css'
import './index.scss'

const loadJSON = Util.loadJSON
const CVJSON='./cv.json'

class CV extends React.Component {
    constructor() {
        super()
        this.state = { url: null, loadingData:true, data: {} }
    }
    fetchData() {
        loadJSON(CVJSON)
        .then((data) => {
            this.setState({
                loadingData: false,
                data: data.data,
                url: data.url
            })
        })
        .catch(function(error) {
            console.log(error.message)
        })
    }
    render() {
        let content
        if(this.state.loadingData) {
            content = (<Loading />)
            this.fetchData()
        }else {
            content =  (
                <div id='root'>
                    <Side data={this.state.data.side} />
                    <Content data={this.state.data.content} />
                </div>
                )
        }
        return (
                content
        )
    }

}
// render CV to native DOM
ReactDOM.render(
    <CV/>,
    document.getElementById('cv')
)
