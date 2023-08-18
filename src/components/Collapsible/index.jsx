import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../../styles/collapsible.scss'

const Collapsible = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`collapsible ${isExpanded ? 'expanded' : ''}`}>
      <button
        className={`collapsible-button ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleCollapse}
      >
        {title}
        <FontAwesomeIcon
          className={`collapsible-icon ${isExpanded ? 'expanded' : ''}`}
          icon={faChevronUp}
        />
      </button>
      {isExpanded && (
        <div className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}>
          {content}
        </div>
      )}
    </div>
  )
}

export default Collapsible
