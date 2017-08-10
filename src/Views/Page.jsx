import React from 'react'

export const Page = ({children}) => {
  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>)
}
