import React, { useState } from 'react'
import AceEditor from 'react-ace'
import './CodeEditor.scss'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'

function CodeEditor() {
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
  }

  return (
    <div className='editor'>
      <AceEditor
        height='30rem'
        width='100%'
        fontSize={18}
        className='editor__code'
        placeholder='Placeholder Text'
        mode='javascript'
        theme='monokai'
        name='blah2'
        // onLoad={this.onLoad}
        onChange={onChange}
        showPrintMargin={true}
        showGutter={true}
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
