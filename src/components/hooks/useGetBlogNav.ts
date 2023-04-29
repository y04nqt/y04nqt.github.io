const useGetBlogNav = async () => {
    const blogItems = await fetch(`https://raw.githubusercontent.com/y04nqt/portfolio-data/main/nav-data.json`);
    const data = blogItems.json();
    return data;
}

export default useGetBlogNav;