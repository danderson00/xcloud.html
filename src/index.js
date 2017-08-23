const measureText = require('./measureText')
const xcloud = require('xcloud')

module.exports = function (words, options) {
  options = Object.assign({}, { measureText: measureText }, options)
  const cloud = xcloud(words, options)
  const element = renderCloud(cloud)
  if(options.target)
    options.target.appendChild(element)
  return { element, words: cloud }
}

function renderCloud(words) {
  return words.reduce((target, word) => {
    var span = document.createElement('span')
    span.style.cssText = `display: block; position: absolute; top: ${word.top}px; left: ${word.left}px; font-family: ${word.font}; font-size: ${word.size}px; color: ${colorToCSS(word.color)}`
    span.innerHTML = word.text
    target.appendChild(span)
    return target
  }, document.createElement('div'))
}

function colorToCSS(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`  
}