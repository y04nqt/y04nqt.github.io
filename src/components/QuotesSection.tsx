import { QUOTE_DATA } from "../helpers";
import SlideShow from "./SlideShow";

const QuotesSection = () => {
    return (
        <>
            <h2 className="hidden mb-0 text-4xl sm:block">Reviews from Colleagues & Mentees</h2>
            <SlideShow data={QUOTE_DATA} />
        </>
    )
}

export default QuotesSection;