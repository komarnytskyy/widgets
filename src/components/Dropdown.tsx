import React, { useEffect, useRef, useState } from 'react';

export const Dropdown = ({ options, selected, onSelectedChange, label }: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event: any) => {
      // @ts-ignore
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option: any) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  });

  return (
    // @ts-ignore
    <div ref={ref} className='ui form'>
      <div className="field">
        <label htmlFor="options" className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open)
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          id='options'
          style={{ borderColor: selected.value }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}
