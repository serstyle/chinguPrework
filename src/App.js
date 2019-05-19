import React, { Component } from 'react'
import Search from './Search/Search'
import MeteoriteList from './MeteoriteList/MeteoriteList'


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

  componentDidMount(){
      fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(res => res.json())
      .then(data => this.setState({meteoriteArr:data,isPending:false}))
  }

  render() {
    return (
      <div style={{width:'80%', position:'absolute', left:'10%', background:'#f8f8f8'}}>
        <h1 style={{textAlign:'center'}}>Meteorite App</h1>
        <Search onSearchChange={this.onSearchChange}/>
        <MeteoriteList  meteoriteArr={this.state.input?this.state.filterMeteorite:this.state.meteoriteArr} isPending={this.state.isPending}/>
      </div>
    )
  }
}
