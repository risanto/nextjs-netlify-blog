export default function Post(props) {
    return (
        <p>{JSON.stringify(props)}</p>
    )
}

// export async function getStaticProps({ params }) {
//     console.log(params)
// }

// export async function getStaticPaths() {

// }