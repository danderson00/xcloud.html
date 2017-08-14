const measureText = require('./measureText')
const xcloud = require('xcloud')

module.exports = function (words, options, targetElement) {
  options = Object.assign({}, { measureText: measureText }, options)
  const cloud = xcloud(words, options)
}

function renderCloud(words) {
  return words.reduce((target, word) => {
    var span = document.createElement('span')
    span.attributes['style'] = `position: 'absolute'; top: ${word.top}px; left: ${word.left}px; font-family: ${word.font}; font-size: ${word.size}pt`
    target.appendChild(span)
    return target
  }, document.createElement('div'))
}