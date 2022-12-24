
import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './conponents/Plan';


export default class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handelChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  handelAdd = e=>{
    if(this.state.text!==""){
      const items=[...this.state.items,this.state.text]
      this.setState({
        items:items,
        text:""
      })
    }
  }
  handelDalete = id=>{
    console.log('delete',id);
    const oldItems=[...this.state.items]
    console.log(oldItems);
    const items=oldItems.filter((Element,i)=>{
      return i!==id
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
            <h2 className='text-center'>Today's plan</h2>
            <div className='row'>
              <div className='col-9'>
                <input type="text"
                  placeholder='Write Plan here'
                  className='form-control'
                  value={this.state.text}
                  onChange={this.handelChange}
                ></input>
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 font-waight-bold'
                onClick={this.handelAdd}
                >Add</button>
              </div>
              <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
                  {
                    this.state.items.map((value,i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handelDalete}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

