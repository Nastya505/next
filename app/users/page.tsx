import React, { Suspense } from 'react'
import UserTable from './user-table';
import Link from 'next/link';
import Loading from '../loading';


interface Props {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = async({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <h1 className='text-3xl text-center mb-5 font-extrabold'>Users</h1>
    <Link href="/users/new" className='btn btn-primary'>Create User</Link>
    <Suspense>
      <UserTable sortOrder={sortOrder}/>
    </Suspense>
    </>
  )
}

export default UsersPage;