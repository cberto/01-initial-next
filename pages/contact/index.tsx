
import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'

export default function Contact() {
  return (
    
  <MainLayout>
       <h1>Contact Page</h1>
        <h1 className={'title'}>
{/* ir a <a href="/about"> About</a> */}
{/* Precargada */}
Ir a <Link href="/"> Home</Link>
        </h1>

        <p className={'description'}>
          Ges started by editing {''}
          <code className={'code'}>pages/index.js</code>
          </p>


    </MainLayout>
  )
}
