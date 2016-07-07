import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';
//import AJAX from './ajax.js';
//import Giphy from './constants/Giphy.js';
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
    console.log("about to send focus action with this image:",imageUrl);
    GifActions.focus(imageUrl);
  },
  _onChange: function() {
    console.log("fired _onChange");
    this.setState(getGifState());
  },
  unFocusImage : function(){
    GifActions.unFocus();
  },
  // makeApiCall : function(string){
  //   var searchTerm = string.split(" ").join("+");
  //   var url = Giphy.prefix + searchTerm + Giphy.suffix;
  //   AJAX.get(url,this.onGiphyResponse);
  // },
  // focusImage : function(imageUrl){
  //   var targetedObject = null;
  //   var list = this.state.imageObjects;
  //   for (var i = 0; i < list.length; i++) {
  //     if (this.getUrl(list[i]) === imageUrl){
  //       targetedObject = list[i];
  //     }
  //   }
  //   this.setState({imageObjects:this.state.imageObjects,
  //     focusImage:targetedObject});
  // },
  // getUrl : function(object){
  //   return object.images.fixed_height.url;
  // },

  // onGiphyResponse : function(response){
  //   var resultsArray = JSON.parse(response).data;
  //   var displayArray = [];
  //   var maxIterations = resultsArray.length > 5 ? 5 : resultsArray.length;
  //   for (var i = 0; i < maxIterations; i++) {
  //     displayArray.push(resultsArray[i]);
  //   }
  //   this.setState({imageObjects:displayArray,focusImage:null});
  // },
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
