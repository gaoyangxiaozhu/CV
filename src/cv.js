import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Loading from './components/Loading'
import Side from './partial/side/index'
import Content from './partial/content/index'

// import { loadJSON } from './lib/util' why this statment is wrong ? and can not import loadJSON?

import Util  from './lib/util'

import 'font-awesome/css/font-awesome.css'
import './index.scss'

const loadJSON = Util.loadJSON
let  CVJSON='./cv.json'
class CV extends React.Component {
    constructor() {
        super()
        this.state = { url: null, loadingData:true, data: {}, lang: 'cn' }
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
    changLang(lang, e) {
        const curLang = this.state.lang
        if(curLang === lang) {
            return
        }else{
            CVJSON = lang === 'cn' ? './cv.json' : './cv.en.json'
            this.setState({lang: lang, loadingData: true})
        }
        e.preventDefault()
    }
    render() {
        let content
        if(this.state.loadingData) {
            content = (<Loading />)
            this.fetchData()
        }else {
            content =  (
                <div id="root">
                    <Side data={this.state.data.side} />
                    <Content data={this.state.data.content} />
                    <div className="btn-group">
                        <a onClick={this.changLang.bind(this, 'cn')} className={ this.state.lang === 'cn' ? 'active' : '' }>中文</a>
                        <a onClick={this.changLang.bind(this, 'en')} className={ this.state.lang === 'en' ? 'active' : '' }>En</a>
                    </div>
                </div>
                )
        }
        return content
    }

}
// render CV to native DOM
ReactDOM.render(
    <CV/>,
    document.getElementById('cv')
)
