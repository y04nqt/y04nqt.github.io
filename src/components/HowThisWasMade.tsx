import DownloadResumeAnchor from "./DownloadResumeAnchor";

const HowThisWasMade = () => {
  return (
    <div>
      <div className="my-20 max-w-[100%] w-auto bg-white bg-opacity-80 shadow-lg mx-auto p-10">
        <section className="min-w-[225px] max-w-[600px] mx-auto">
          <h3 className="mb-1 text-4xl">How This Site Was Made</h3>
          <p className="text-xl">
            This site leverages a few cool techniques to appear as one cohesive application. However, this landing page at the base route of the domain is one app, the blog route is different, and the about-me route is another app. I'm using three create-react-apps with the GH-pages deploy system and GitHub hosting. This strategy aims to utilize the free nature of GitHub to host my portfolio applications. This way, I don't have additional payment overhead, unlike if I were to go with another deployment strategy utilizing Netlify or Vercel. I could expand this further and power a data-fetching system. One can store open JSON files on GitHub, fetch to get that data, then render it on the page.
          </p>
          <p className="text-xl">
            One of my favorite things about programming is democratizing knowledge and abilities. This website is an example of how one can take advantage of the open-source nature of these excellent tools, and it also demonstrates that one may not need to focus on the most flashy or latest fad to produce value.
          </p>
        </section>
      </div>
      <h4 className="text-3xl">Site Objectives</h4>
      <ol className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-center list-none px-5 m-0 text-xl text-left min-w-[225px] max-w-[720px] mx-auto">
        <li className="flex flex-col items-center justify-center w-1/2 p-4 mx-auto transition duration-300 bg-gray-300 border-gray-300 border-solid shadow-lg hover:shadow-xl border-1 rounded-xl sm:w-auto grow basis-0 bg-opacity-60 hover:bg-gray-200">
          <p className="my-4 mb-0 text-4xl">🏘️</p>
          <p>Creative hosting and route management.</p>
        </li>
        <li className="flex flex-col items-center justify-center w-1/2 p-4 mx-auto transition duration-300 bg-gray-300 border-gray-300 border-solid shadow-lg hover:shadow-xl border-1 rounded-xl sm:w-auto grow basis-0 bg-opacity-60 hover:bg-gray-200">
          <p className="my-4 mb-0 text-4xl">🍱</p>
          <p>Component-based architecture.</p>
        </li>
        <li className="flex flex-col items-center justify-center w-1/2 p-4 mx-auto transition duration-300 bg-gray-300 border-gray-300 border-solid shadow-lg hover:shadow-xl border-1 rounded-xl sm:w-auto grow basis-0 bg-opacity-60 hover:bg-gray-200">
          <p className="my-4 mb-0 text-4xl">🧰</p>
          <p>Consumption of libraries and tools.</p>
        </li>
      </ol>
      <hr className="w-1/2 my-10 invertAndOverlay" />
      <DownloadResumeAnchor />
    </div>
  );
};

export default HowThisWasMade;
