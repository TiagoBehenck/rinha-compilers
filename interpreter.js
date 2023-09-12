function interpreter(node, enviroment){ 
  switch (node.kind) { 
    case 'Print':
      const term = interpreter(node.value, enviroment)
      console.log(term)
    case 'Str':
      return node.value
    default: 
      return new Error('Unknow node kind')
  }
}

module.exports = interpreter;