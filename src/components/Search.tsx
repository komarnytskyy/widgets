import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState<any []>([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    }

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId);
      }
    }

  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target='_blank'
            rel='noreferrer'>Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="textInput">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value)
            }}
            className='input'
            id='textInput'
            type="text"/>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}
