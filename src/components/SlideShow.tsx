import { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type TData = { author: string; quote: string };
interface IProps {
  data: TData[];
}

const SlideShow = ({ data }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const incrementSlide = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const decrementSlide = () => {
    if (currentSlide <= data.length - 1) {
      if (currentSlide === 0) {
        setCurrentSlide(data.length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <>
      <ul className="hidden sm:block relative list-none min-h-[720px] p-0 my-10">
        {data.map((item: TData, idx) => (
          <li
            key={item.author}
            className={`absolute w-full h-full top-[72px] transition duration-300 ${
              idx === currentSlide ? "" : "right-[1000%]"
            }`}
          >
            <div className="flex justify-center gap-20 my-10">
              <button
                className="p-2 bg-transparent border-none rounded-xl"
                onClick={decrementSlide}
              >
                <ChevronLeftIcon className="hover:transition-shadow hover:duration-300 transition-shadow duration-300 !text-6xl shadow hover:shadow-xl rounded-full" />
              </button>
              <ol className="flex items-center gap-2 p-0 list-none">
                {data.map((item, idx) => (
                  <li
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-[10px] h-[10px] transition duration-300 rounded-full opacity-50 shadow-lg hover:bg-gray-800 ${
                      idx === currentSlide
                        ? "bg-white !opacity-100"
                        : "bg-black"
                    }`}
                  ></li>
                ))}
              </ol>
              <button
                className="p-2 bg-transparent border-none rounded-xl"
                onClick={incrementSlide}
              >
                <ChevronRightIcon className="hover:transition-shadow hover:duration-300 transition-shadow duration-300 !text-6xl shadow hover:shadow-xl rounded-full" />
              </button>
            </div>
            <div
              className={`bg-white bg-opacity-70 py-5 min-h-[460px] flex flex-col justify-center items-center`}
            >
              <p
                className={`transition duration-300 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                } px-10 mx-auto text-xl md:w-3/4 italic`}
              >
                "{item.quote}"
              </p>
              <p
                className={`transition duration-300 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                } text-lg font-bold`}
              >
                - {item.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SlideShow;
