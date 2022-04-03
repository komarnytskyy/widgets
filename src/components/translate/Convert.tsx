import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
export const Convert = ({ language, text }: any) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: apiKey
        }
      })
      setTranslated(data.data.translations[ 0 ].translatedText)
    }

    doTranslation();
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}