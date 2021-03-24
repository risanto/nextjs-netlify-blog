import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "src/pages/posts")

let postCache = []

export function fetchPostContent() {
    if (postCache.length) {
        return postCache;
    }

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames
        .filter((it) => it.endsWith(".md"))
        .map((fileName) => {

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8")
        })
}