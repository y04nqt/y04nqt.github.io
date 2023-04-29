
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BlogNav = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogNav = async () => {
      try{
        const blogItems = await fetch(`https://raw.githubusercontent.com/y04nqt/portfolio-data/main/nav-data.json`);
        const data = await blogItems.json();
        console.log(data)
        setBlogs(data);
        return data;
      }catch(err){
        console.log(err)
      }
    }

    getBlogNav();
  }, [])
  return (
    <>
      <nav>
        {blogs.length > 0 && blogs.map(
          (item: {
            link: string;
            name: string;
          }) => (
            <div key={item.name}>
              <Link to={`/${item?.link}`}>{item?.name ?? ''}</Link>
            </div>
          )
        )}
      </nav>
    </>
  );
};

export default BlogNav;

