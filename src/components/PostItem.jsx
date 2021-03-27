import Link from 'next/link'

export default function PostItem(props) {
    const { post } = props

    return (
        <Link href={"/posts/" + post.data.slug}>
            <a>
                <h2>{post.data.title}</h2>
            </a>
        </Link>
    )
}
