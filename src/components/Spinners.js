import React, { Component } from 'react'
import loading from '../loading.gif'
export default class Spinners extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <img src={loading} alt="loading"  />
      </div>
    )
  }
}
