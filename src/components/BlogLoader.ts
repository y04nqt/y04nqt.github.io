import { Params } from "react-router-dom";


const BlogLoader = async (params: Params<string>) => {
    const {id} = params;
    const blog = await fetch(`https://raw.githubusercontent.com/y04nqt/portfolio-data/main/blogs/${id}.json`)
    const body = await blog.json();
    return { blog: body };
}

export default BlogLoader;