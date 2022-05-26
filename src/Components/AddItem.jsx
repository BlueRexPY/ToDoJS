import React, {Component} from 'react'
import PropTypes from "prop-types";

class BottomNavigation extends Component{
        state = {
            text: ''
          };
        
          onTextChange = (e) => {
            this.setState({
                text: e.target.value
            })
          };
        
          onSubmit = (e) => {
            e.preventDefault();
            const { text } = this.state;
            if (text != ""){
                this.setState({ text: '' });
                const cb = this.props.onAdd || (() => {});
                cb(text);
            }
            
          };
    
    render(){
        return (
            <form className="input-group mb-3 BottomNavigation" onSubmit={this.onSubmit}>
                <input type="text" className="form-control Input" placeholder="Enter some do" aria-label="Enter some do" aria-describedby="button-addon2" 
                value={this.state.text} onChange={this.onTextChange}></input>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >Add</button>
            </form>
        )
    }

}

BottomNavigation.propTypes = {
    onAdd: PropTypes.func,
  };

export default BottomNavigation