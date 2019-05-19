import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
export default class Search extends Component {
  state={
    input:''
  }
  render() {
        return (
      <div style={{textAlign:'center'}}>
        <form  onSubmit={(e)=>this.props.onSearchChange(e, this.state.input)}>
          <TextField label='Search' onChange={(e)=>this.setState({input:e.target.value})}/>
        </form>
      </div>
    )
  }
}
