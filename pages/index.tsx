

import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
       <h1>Home Page</h1>
        <h1 className={'title'}>
{/* ir a <a href="/about"> About</a> */}
{/* Precargada */}
Ir a <Link href="/about"> About</Link>
        </h1>

        <p className='description'>
          Ges started by editing {''}
          <code className='code'>pages/index.js</code>
          </p>
    </MainLayout>
  )
}
