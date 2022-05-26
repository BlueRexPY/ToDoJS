import React, { Component } from "react";


class Navigation extends Component{
  onSerchText=()=>{
    if (document.getElementById('serch').value != ''){
      const serchText = document.getElementById('serch').value
      this.props.showSerch(serchText)
    }else{
      this.props.showAll()
    }

    
  }
  render(){
    return (
      <div className="Navigation container row">
        <div className="input-group mb-3 col">
          <input
            type="text"
            className="form-control Input"
            placeholder="Serch"
            aria-label="Serch"
            aria-describedby="basic-addon1"
            id="serch"
            onChange={this.onSerchText}
          ></input>
        </div>
  
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={this.props.showAll}>All</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.props.showActive}>Active</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.props.showDone}>Done</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.props.showImportent}>Importent</button>
          </div>
  
        </div>
      </div>
    );
  }

};

export default Navigation;
