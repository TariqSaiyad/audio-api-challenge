import React, { useState } from 'react'
import AceEditor from 'react-ace'
import './CodeEditor.scss'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'

function CodeEditor() {
  const acorn = require('acorn')
  const walk = require('acorn-walk')

  const [code, setCode] = useState(
    `for (var i = 1; i < 16; i++) {
  if (i % 15 == 0) console.log('FizzBuzz')
  else if (i % 3 == 0) console.log('Fizz')
  else if (i % 5 == 0) console.log('Buzz')
  else console.log(i)
}`
  )

  function onChange(value) {
    setCode(value)
    console.log(value)
    console.log(acorn)
    const parsed = acorn.parse(value)
    // walk.full(acorn.parse(value), node => {
    //   console.log(node)
    // })
    // walk.simple(acorn.parse(value), {
    //   Literal: (node) => console.log(node),
    //   VariableDeclarator: (node) => console.log(node),
    //   Identifier: (node) => console.log(node),
    //   BinaryExpression: (node) => console.log(node),
    //   UpdateExpression: (node) => console.log(node),
    //   MemberExpression: (node) => console.log(node),
    //   IfStatement: (node) => console.log(node),
    //   ForStatement: (node) => console.log(node),
    // })
    console.log(parsed);
  }

  return (
    <div className='editor'>
      <AceEditor
        height='30rem'
        width='100%'
        fontSize={18}
        className='editor__code'
        placeholder='Your JavaScript here'
        mode='javascript'
        theme='monokai'
        name='blah2'
        // onLoad={this.onLoad}
        onChange={onChange}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}

export default CodeEditor
