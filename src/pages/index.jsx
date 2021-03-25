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
                <ul>
                    {posts.map(post => {
                        return <li>{post.data.title}</li>
                    })}
                </ul>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = fetchPostContent()

    return {
        props: {
            posts
        }
    }
}