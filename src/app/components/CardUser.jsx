import React from 'react'

export default function CardUser( {users} ) {
  return (
    <div className='flex w-100 p-5 rounded-2xl h-30  gap-10 bg-amber-100'>
        <h1 className='text-blue-700'>Name: <p>{users.name}</p></h1>
        <h1 className='text-red-700'>Email: <p>{users.email}</p></h1>
    </div>
  )
}
