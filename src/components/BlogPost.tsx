import { useLoaderData } from "react-router-dom";


const BlogPost = () => {
    //@ts-ignore
    const { blog } = useLoaderData();
    return (
        <div className="flex flex-col w-auto bg-white rounded-xl">
            <h1>{blog.title}</h1>
            <small>{blog.author}</small>
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogPost;