var path = require('path');
module.exports = function (content) {
  this.cacheable();

  var query = this.query.substr(1);

  var code = content.split('<style>', 2)[1];
  var result = content;
  if (code) {
    var source = code.split('</style>', 2);
    var preamble = '';
    if (query === 'true') {
      result = source[0];
    }
    else {
      var style = `require("!!css-loader?sourceMap!sass-loader!stylextract-loader?true!./${path.basename(this.resourcePath)}")`;
      preamble = `require(${JSON.stringify(require.resolve('style-loader/addStyles'))})([["${this.resourcePath}", ${style}]]);`;
      result = preamble + code[0] + source[1];
    }
  }
  return result;
};
