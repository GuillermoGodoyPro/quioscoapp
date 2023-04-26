import Layout from "../layout/Layout";
import Head from "next/head";
import Image from "next/image";

/* import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client"; */


export default function Home() {

  return (
    <Layout>
      Inicio
    </Layout>
  );
}

/* export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    },
  };
};
 */