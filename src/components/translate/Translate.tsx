import React, { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { Convert } from './Convert';

const options = [
  { label: 'Africans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Dutch', value: 'nl' },
  { label: 'Ukrainian', value: 'uk' },
  { label: 'English', value: 'en' },
]

export const Translate = () => {
  const [language, setLanguage] = useState(options[ 0 ]);
  const [text, setText] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Text</label>
          <input id='input' value={text} onChange={(e) => setText(e.target.value)} type="text"/>
        </div>
      </div>
      <Dropdown
        label='Select a language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}/>
      <hr/>
      <h3 className='ui header'>Output</h3>
      <Convert
        language={language}
        text={text}/>
    </div>
  )
}
