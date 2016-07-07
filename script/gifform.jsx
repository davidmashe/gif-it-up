import React from 'react';
import {RaisedButton, TextField} from 'material-ui';

export default React.createClass({
  getInitialState : function() {
    return {lastTyped:""};
  },
  handleTyping : function(event){
    this.setState({lastTyped:event.target.value});
  },
  handleEnter : function(event){
    if (event.keyCode === 13) {
      this.props.propagate(this.state.lastTyped);
    }
  },
  propagate: function(event){
    this.props.propagate(this.state.lastTyped);
  },
  render : function(){
    return (
      <div id="form-div">
        <TextField className="form-component"
          id="gif-entry" floatingLabelText="search for a gif, bruh" onKeyDown={this.handleEnter}
          onChange={this.handleTyping} />
        <RaisedButton className="form-component" label="GIF IT UP" primary={true} id="gif-submit"
          onClick={this.propagate} />
      </div>
    );
  }
});
