import confetti from "canvas-confetti";

const DownloadResumeAnchor = ({
    text = "Download My Resume",
    className = "inline-block px-4 py-6 font-bold text-white no-underline transition duration-300 bg-black border-2 border-solid shadow-xl bg-opacity-70 hover:bg-gray-700 hover:shadow-2xl hover:italic rounded-2xl"
}) => {
    return (
        <a
        onClick={() => confetti()}
        href="https://github.com/y04nqt/portfolio-data/raw/main/aaron-krueger-resume.pdf"
        className={className}
      >
        {text}
      </a>
    )
}


export default DownloadResumeAnchor;