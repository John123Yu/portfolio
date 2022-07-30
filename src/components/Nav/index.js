import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav (props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory)
  }, [currentCategory])

  return (
    <header className='flex-row px-1'>
      <nav>
        <ul className='flex-row'>
          {categories.map(category => (
            <li
            className={`mx-1 ${
              currentCategory === category && `navActive`
              }`}
            key={category}
          >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
