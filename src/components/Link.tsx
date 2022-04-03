import React from 'react';

export const Link = ({ className, href, children }: any) => {
  const onClick = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({},'', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  )
}
