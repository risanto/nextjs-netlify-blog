import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'

export default function Post(props) {
    const { postData } = props

    function formatImgSrc(thumbnail) {
        return thumbnail.includes('http')
            ? thumbnail : `/${thumbnail}`
    }

    return (
        <Layout>
            <article>
                <header>
                    <h1>{postData.title}</h1>
                    <p>{postData.date}</p>
                    <img
                        src={formatImgSrc(postData.thumbnail)}
                    />
                </header>
                <div dangerouslySetInnerHTML={
                    { __html: postData.contentHtml }
                }></div>
            </article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
            postData: await getPostData(params.slug)
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllPostIds(),
        fallback: false
    }
}