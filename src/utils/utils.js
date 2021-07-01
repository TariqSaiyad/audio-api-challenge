import { synths } from '../constants/constants'

export const Nodes = {
  LITERAL: 'Literal',
  VARIABLE_DECLARATOR: 'VariableDeclarator',
  VARIABLE_DECLARATION: 'VariableDeclaration',
  IDENTIFIER: 'Identifier',
  BINARY_EXPRESSION: 'BinaryExpression',
  UPDATE_EXPRESSION: 'UpdateExpression',
  MEMBER_EXPRESSION: 'MemberExpression',
  CALL_EXPRESSION: 'CallExpression',
  EXPRESSION_STATEMENT: 'ExpressionStatement',
  IF_STATEMENT: 'IfStatement',
  BLOCK_STATEMENT: 'BlockStatement',
  FOR_STATEMENT: 'ForStatement',
  PROGRAM: 'Program',
}

export const NodeMap = new Map([
  ['Literal', { function: parseLiteral }],
  ['VariableDeclarator', { function: parseVariableDeclarator }],
  ['VariableDeclaration', { function: parseVariableDeclaration }],
  ['Identifier', { function: parseIdentifier }],
  ['BinaryExpression', { function: parseBinaryExpression }],
  ['UpdateExpression', { function: parseUpdateExpression }],
  ['MemberExpression', { function: parseMemberExpression }],
  ['CallExpression', { function: parseCallExpression }],
  // ['ExpressionStatement',    {function: parseExpressionStatement}],
  ['IfStatement', { function: parseIfStatement }],
  // ['BlockStatement',         {function: parseBlockStatement}],
  ['ForStatement', { function: parseForStatement }],
  ['Program', { function: parseProgram }],
])

export function parseNode(node, conductor) {
  if (NodeMap.get(node.type)) {
    let { note, word, synth } = getNote(node)
    if (note) {
      conductor.collectNote(note, synth)
      conductor.collectWord(word)
    }
  }
}

function getNoteWordPair(note, word, synth = synths.SYNTHTWO) {
  return { note: note, word: word, synth: synth }
}

function getNote(node) {
  return NodeMap.get(node.type).function(node)
}

function parseLiteral(node) {
  console.log(`${node.type}: ${node.value}`)
  let l = node.value.toString().length
  let n = 'D1'
  if (l <= 1) {
    n = 'D1'
  } else if (l > 1 && l <= 3) {
    n = 'D2'
  } else if (l > 3 && l <= 5) {
    n = 'D3'
  } else if (l > 5 && l <= 7) {
    n = 'D4'
  } else {
    n = 'D5'
  }
console.log(l,n);
  return getNoteWordPair([n], node.value, synths.SYNTHONE)
}
function parseVariableDeclarator(node) {
  console.log(`${node.type}: =`) // declaretion
  console.log(`${node.id.type}: ${node.id.name}`) // Identifier name
  return getNoteWordPair(['C3'], node.id.name, synths.SYNTHTWO)

  // return ['C3 ', 'F3', 'C3', 'G3', 'C3']
}

function parseVariableDeclaration(node) {
  console.log(`${node.type}: ${node.kind}`)
  return getNoteWordPair(['D#2'], node.kind)
}
function parseIdentifier(node) {
  console.log(`${node.type}: ${node.name}`)
  let l = node.name.toString().length
  let n = 'F1'
  if (l <= 1) {
    n = 'F1'
  } else if (l > 1 && l <= 3) {
    n = 'F2'
  } else if (l > 3 && l <= 5) {
    n = 'F3'
  } else if (l > 5 && l <= 7) {
    n = 'F4'
  } else {
    n = 'F5'
  }
console.log(l,n);
  return getNoteWordPair([n], node.name)
}
function parseBinaryExpression(node) {
  console.log(`${node.type}: ${node.operator}`)
  return getNoteWordPair(['C4'], node.operator)
}
function parseUpdateExpression(node) {
  console.log(`${node.type}: ${node.operator}`)
  return getNoteWordPair(['C3'], node.operator)
}
function parseMemberExpression(node) {
  return getNote(node.property)
}
function parseCallExpression(node) {
  let s = ''
  s = `${node.callee.object.name}.${node.callee.property.name}()`
  console.log(s)
  return getNoteWordPair(['A1'], s)
}
function parseExpressionStatement(node) {
  console.log(`${node.type}: expression`)
  return getNoteWordPair(['D#3'], node.type)
}
function parseIfStatement(node) {
  const checkIf = node.alternate && node.alternate.type === Nodes.IF_STATEMENT
  checkIf ? console.log(`${node.type}: else if`) : console.log(`${node.type}: if`)
  return checkIf ? getNoteWordPair(['F#1'], 'else if') : getNoteWordPair(['F#3'], 'if')
}
function parseBlockStatement(node) {
  console.log(`${node.type}: block`)
  return getNoteWordPair(['E2'], note.type)
}
function parseForStatement(node) {
  console.log(`${node.type}: for`)
  return getNoteWordPair(['A2'], 'for')
}
function parseProgram(node) {
  console.log(`${node.type}: ${node.sourceType}`)
  return getNoteWordPair(['E#4'], node.sourceType)
}
function parseDefault(node) {
  console.log(`Default: ${node.type}`)
}
