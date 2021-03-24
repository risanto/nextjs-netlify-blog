import Head from "next/head"
import Layout from '../components/Layout'
import { fetchPostContent } from '../lib/posts'

export default function Index({ posts }) {
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <Layout>
                HOME
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    console.log(fetchPostContent())
    console.log('getStaticProps CALLED')

    return {
        props: {

        }
    }
}