import React, {Component} from "react";
import Popup from "reactjs-popup";
import SettingIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

// const [expanded, setExpanded] = React.useState(false);



export default class Edit extends React.Component {

    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            content:this.props.content
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value+" "+e.target.name)
    }
    // this.props.edit(this.props.id, this.state.title, this.state.content)
    render(){
        return(
<Popup trigger={
    <IconButton aria-label="settings" >
        <SettingIcon />
    </IconButton>
  } modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> edit </div>
        <div className="content">
          {" "}
                <label>
                title:
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>
                detail:
                <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                </label>
                <button onClick={() => {this.props.edit(this.props.id, this.state.title, this.state.content)}}>submit</button>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
        );
    }
  
}