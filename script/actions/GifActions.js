import AppDispatcher from '../dispatcher/AppDispatcher';
import GifConstants from '../constants/constants';

var GifActions = {

  search: function(searchText) {
    AppDispatcher.dispatch({
      actionType: GifConstants.GIF_SEARCH,
      searched: searchText
    });
  },
  focus : function(string) {
    AppDispatcher.dispatch({
      actionType: GifConstants.GIF_FOCUS,
      focusImage: string
    });
  },
  unFocus : function() {
    AppDispatcher.dispatch({
      actionType: GifConstants.GIF_UNFOCUS
    });
  }

};

module.exports = GifActions;
