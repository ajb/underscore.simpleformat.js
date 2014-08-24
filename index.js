_.mixin({
  simpleFormat: function(string, escape) {
    if (escape !== false) {
      string = _.escape(string);
    }
    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
  }
});
