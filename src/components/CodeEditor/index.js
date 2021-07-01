import React, { useState } from 'react'
import AceEditor from 'react-ace'
import './CodeEditor.scss'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import PropTypes from 'prop-types'

// https://tonejs.github.io/docs/14.7.77/Context

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

function CodeEditor(props) {
  return (
    <div className='editor'>
      <AceEditor
        height='100%'
        width='100%'
        fontSize={18}
        className='editor__code'
        placeholder='Your JavaScript here'
        mode='javascript'
        theme='monokai'
        name='blah2'
        // onLoad={this.onLoad}
        onChange={(val) => props.onChange(val)}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }}
        value={props.code}
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
