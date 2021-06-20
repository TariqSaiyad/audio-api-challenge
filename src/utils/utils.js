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
  // ['CallExpression',         {function: parseCallExpression}],
  // ['ExpressionStatement',    {function: parseExpressionStatement}],
  ['IfStatement', { function: parseIfStatement }],
  // ['BlockStatement',         {function: parseBlockStatement}],
  ['ForStatement', { function: parseForStatement }],
  ['Program', { function: parseProgram }],
])

export function parseNode(node, conductor) {
  if (NodeMap.get(node.type)) {
    let note = getNote(node)
    if (note) {
      conductor.collectNote(note)
    }
  }
}

function getNote(node) {
  return NodeMap.get(node.type).function(node)
}

function parseLiteral(node) {
  console.log(`${node.type}: ${node.value}`)
  return ['D4']
}
function parseVariableDeclarator(node) {
  console.log(`${node.type}: =`) // declaretion
  console.log(`${node.id.type}: ${node.id.name}`) // Identifier name
  return ['C3']
  // return ['C3 ', 'F3', 'C3', 'G3', 'C3']
}

function parseVariableDeclaration(node) {
  console.log(`${node.type}: ${node.kind}`)
  return ['D#2']
}
function parseIdentifier(node) {
  console.log(`${node.type}: ${node.name}`)
  return ['F4']
}
function parseBinaryExpression(node) {
  console.log(`${node.type}: ${node.operator}`)
  return ['C4']
}
function parseUpdateExpression(node) {
  console.log(`${node.type}: ${node.operator}`)
  return ['C3']
}
function parseMemberExpression(node) {
  return getNote(node.property)
}
function parseCallExpression(node) {
  let s = ''
  node.arguments.forEach((arg) => {
    s += `${node.type}: ${arg.type}, `
  })
  console.log(s)
  return ['A1']
}
function parseExpressionStatement(node) {
  console.log(`${node.type}: expression`)
  return ['D#3']
}
function parseIfStatement(node) {
  const checkIf = node.alternate && node.alternate.type === Nodes.IF_STATEMENT
  checkIf ? console.log(`${node.type}: else if`) : console.log(`${node.type}: if`)
  return checkIf ? ['F#1'] : ['F#3']
}
function parseBlockStatement(node) {
  console.log(`${node.type}: block`)
  return ['E2']
}
function parseForStatement(node) {
  console.log(`${node.type}: for`)
  return ['A2']
}
function parseProgram(node) {
  console.log(`${node.type}: ${node.sourceType}`)
  return ['E#4']
}
function parseDefault(node) {
  console.log(`Default: ${node.type}`)
}