import React from 'react'

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="task_inpcon">
      <input
        className="task_searchbar"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchFilter
