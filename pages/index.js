import {server} from '../config'
import Link from 'next/link'
import Head from 'next/head'
import Homepage from '../components/Homepage/Homepage'
import Layout from '../components/Layout/Layout'


const home = () => {

 


  return (
<>
      {
        <>
        <Layout>
        <Homepage/>
        </Layout>
     
        </>
      
      }


    </>
  )
}

export default home




