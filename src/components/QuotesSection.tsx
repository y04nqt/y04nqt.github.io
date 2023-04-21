import { QUOTE_DATA } from "../helpers";
import SlideShow from "./SlideShow";

const QuotesSection = () => {
    return (
        <>
            <h2 className="mb-0 text-4xl">Reviews from Colleagues & Mentees</h2>
            <SlideShow data={QUOTE_DATA} />
        </>
    )
}

export default QuotesSection;