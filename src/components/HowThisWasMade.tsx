const HowThisWasMade = () => {
    return (
        <div>    
            <div className="my-20 max-w-[100%] w-auto bg-white bg-opacity-80 shadow-lg mx-auto p-10">
                <section className="min-w-[250px] max-w-[600px] mx-auto">
                    <h3 className="mb-1 text-4xl">How This Site Was Made</h3>
                    <p className="text-xl">This site leverages a few cool techniques to appear as one, cohesive application. However, this landing page at the base route of the domain is one app and the about me route is another app. I'm using two create-react-apps with the GH-pages deploy system and github hosting. The goal of this strategy is to utilize the free nature of Github to host my own portfolio applications. This way, I don't have additional payment overhead unlike if I were to go with another deploy strategy utilizing netlify or vercel. I could expand this further and power a data fetching system. One can store open JSON files on github, and use fetch to get that data then render it on the page.</p>
                    <p className="text-xl">One of my favorite things about programming is the democratization of knowledge and abilities. I think this website is an example of how one can take advantage of the open source nature of these excellent tools. It also demonstrates that one may not need to focus on the most flashy or latest fad to produce value.</p>
                </section>
            </div>
            <h4 className="text-3xl">Demonstrated Goals</h4>
            <ol className="text-xl text-left min-w-[250px] max-w-[600px] mx-auto">
                <li>
                    Thinking creatively about hosting and route management. The about-me app uses react router as well.
                </li>
                <li>
                    Clear and well-formatted information.
                </li>
                <li>
                    Easy maintainability and expansion opportunity.
                </li>
            </ol>
        </div>
    )
}

export default HowThisWasMade;