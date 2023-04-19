import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PrismaClient } from '@prisma/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home({categorias}) {
  
  console.log(categorias);
  return(
    <div className='bg-red-600 '>

      
      <h1>Next.js</h1>

    </div>
  ) 
}

export const getServerSideProps = async () =>{
  const prisma = new PrismaClient();
  
  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    }
  }
}
