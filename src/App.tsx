import React, { useState } from 'react';
import { Accordion } from './components/Accordion';
import { Search } from './components/Search';
import { Dropdown } from './components/Dropdown';
import { Translate } from './components/translate/Translate';

const items = [
  {
    title: 'What is React',
    content: 'React is front end javascript framework.'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS library among engineers.'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components.'
  }
]
const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'The Color Blue', value: 'blue' },
  { label: 'The Color Yellow', value: 'yellow' },
]

function App() {
  const [selected, setSelected] = useState(options[ 0 ]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/*<Accordion items={items}/>*/}
      {/*<Search/>*/}
      {/*<div>*/}
      {/*  <button onClick={() => {*/}
      {/*    setShowDropdown(!showDropdown)*/}
      {/*  }}>Toggle Dropdown*/}
      {/*  </button>*/}
      {/*  {showDropdown ?*/}
      {/*    <Dropdown*/}
      {/*      label='Select a Color'*/}
      {/*      selected={selected}*/}
      {/*      onSelectedChange={setSelected}*/}
      {/*      options={options}*/}
      {/*    /> : null*/}
      {/*  }*/}
      {/*</div>*/}
      <Translate />
    </div>
  );
}

export default App;
