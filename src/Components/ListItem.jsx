import React, {Component} from "react";
import PropTypes from "prop-types";


class ListItem extends Component{
     
    render(){
        let status = `list-group-item Item `
        if(this.props.done){
            status+=' Done'
        }
        if(this.props.importent){
            status+=' Importent'
        }
        
        return (
            <li className={status}>
            <p onClick={this.props.onToggleDone}>{this.props.text}</p>
            <div className="Buttons">
                <button type="button" className="btn btn-outline-danger Buttons" onClick={this.props.onDeleted}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>

                <button type="button" className="btn btn-outline-warning Buttons" onClick={this.props.onToggleImportent}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                </button>
            </div>
            </li>
        );
    }
};

ListItem.propTypes = {
  text: PropTypes.string,
};

export default ListItem;
