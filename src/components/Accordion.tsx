import React, { useState } from 'react';

export const Accordion = ({ items }: any) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClicked = (index: any) => {
      setActiveIndex(index);
  }

  const renderedItems = items.map((item: any, index: number) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  )
}
