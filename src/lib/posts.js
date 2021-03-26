import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import yaml from 'js-yaml'

const postsDirectory = path.join(process.cwd(), "src/pages/posts")

let postCache = []

export function fetchPostContent() {
    // if (postCache.length) return postCache

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames
        .filter((it) => it.endsWith(".md"))
        .map((fileName) => {

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContent = fs.readFileSync(fullPath, "utf8")

            // Use gray-matter to parse the post metadata section
            const parsedContent = matter(fileContent, {
                engines: {
                    yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })
                }
            })

            // Create slug based on file name without .md
            parsedContent.data.slug = fileName.slice(0, fileName.length-3)

            return parsedContent
        })

    // add to cache and sort by date
    postCache = allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1
    })

    return allPostsData
}