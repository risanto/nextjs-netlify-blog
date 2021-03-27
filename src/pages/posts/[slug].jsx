import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post(props) {
    const { postData } = props
    console.log(postData)
    return (
        <article>
            <h1>{postData.title}</h1>
            <p>{postData.date}</p>
            <p>{postData.content}</p>
        </article>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
            postData: getPostData(params.slug)
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllPostIds(),
        fallback: false
    }
}