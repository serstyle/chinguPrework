import React, { Component } from 'react'
import Search from './Search/Search'
import MeteoriteList2 from './MeteoriteList/MeteoriteList2'


export default class App extends Component {
  state = {
    input:'',
    meteoriteArr:[],
    filterMeteorite:[],
    isPending:true
  }

  onSearchChange = (e, input) => {
    e.preventDefault()
    const newArr = this.state.meteoriteArr.filter(meteorite => meteorite.name.toLowerCase().includes(input.toLowerCase())?meteorite:null )
    this.setState({filterMeteorite:newArr, input: input})
  }
  //https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=100000&$where=UPPER(name) like '%25${""}%25'
  //https://data.nasa.gov/resource/gh4g-9sfh.json
  //https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10&$offset=20
  componentDidMount(){
      fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=100000&$where=UPPER(name) like '%25${""}%25'`)
      .then(res => res.json())
      .then(data => this.setState({meteoriteArr:data,isPending:false}))
  }

  render() {
    return (
      <div style={{width:'80%', position:'absolute', left:'10%', background:'#f8f8f8'}}>
        <h1 style={{textAlign:'center'}}>Meteorite App</h1>
        <Search onSearchChange={this.onSearchChange}/>
        <MeteoriteList2  meteoriteArr={this.state.input?this.state.filterMeteorite:this.state.meteoriteArr} isPending={this.state.isPending}/>
      </div>
    )
  }
}
