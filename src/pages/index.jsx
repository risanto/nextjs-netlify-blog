import Head from "next/head"
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import { fetchAllPostContent } from '../lib/posts'

export default function Index({ posts }) {
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <Layout>
                <ul>
                    {posts.map((post, idx) => {
                        return <li key={idx}>
                            <PostItem post={post}/>
                        </li>
                    })}
                </ul>
            </Layout>
        </>
    )
}

export async function getStaticProps () {
    const posts = fetchAllPostContent()

    return {
        props: {
            posts
        }
    }
}