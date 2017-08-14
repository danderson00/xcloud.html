const xcloud = require('../src')

window.onload = function () {
  const words = [
    { text: 'test1', weight: 1 },
    { text: 'test2', weight: 2 },
    { text: 'test3', weight: 3 },
    { text: 'test4', weight: 3 },
    { text: 'test5', weight: 4 },
  ]

  xcloud(words, { 
    target: document.getElementById('target')
  })
}