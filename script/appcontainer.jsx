import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';
import GifActions from './actions/GifActions.js';
import GifStore from './stores/GifStore.js';

function getGifState() {
  return {
    imageObjects: GifStore.getImageObjects(),
    focusImage: GifStore.getFocusImage()
  };
}

export default React.createClass({
  getInitialState : function(){
    return getGifState();
  },
  componentDidMount: function() {
    console.log("mounting, state is:",this.state);
    // GifStore can listen for change, then call given callback reference
    GifStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    GifStore.removeChangeListener(this._onChange);
  },
  makeApiCall : function(string){
    GifActions.search(string);
  },
  focusImage : function(imageUrl){
    GifActions.focus(imageUrl);
  },
  _onChange: function() {
    this.setState(getGifState());
  },
  unFocusImage : function(){
    GifActions.unFocus();
  },
  render : function(){
    console.log("State @ render is:",this.state);
      return (
        <div>
          <GifForm propagate={this.makeApiCall} />
          <GifDisplay images={this.state.previewImages} focusImage={this.state.focusImage}
            propagateImageClick={this.focusImage} imageObjects={this.state.imageObjects}
            unFocusImage={this.unFocusImage}/>
        </div>
      );
  }
});
