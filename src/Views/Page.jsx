import React from 'react'

export const Page = ({children}) => {
  return (
    <div>
      <header>
        <a href="/">Home</a>
      </header>
      {children}
      <footer></footer>
    </div>)
}
