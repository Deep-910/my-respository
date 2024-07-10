import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AdminFooter() {
  return (
    <div className='p-[2rem] flex items-center justify-center'>
        <p className='text-lg'>Copyright © 2024 Remos. Design with <FontAwesomeIcon icon={faHeart} color='red'/> by Sarovi. Tech All rights reserved.</p>
    </div>
  )
}

export default AdminFooter