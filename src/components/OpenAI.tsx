import { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";

const OpenAI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(
    "Ask a question above, and GPT-3 will respond here! 🤖"
  );
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    setLoading(true);
    const url = process.env.REACT_APP_AI_URL || "";
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    });
    const data = await resp.json();
    let res = data?.response;
    if (res.length > 42 && !res.slice(-1).match(/[.?!]/)) {
      res = `${res}... Sorry token limit reached. This isn't free, so please have mercy. 🙏`;
    }
    setOutput(res);
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center h-full p-10">
            <h2 className="mt-0 text-4xl">Limited Chat Gippity</h2>
            <div className="flex items-center justify-center w-full gap-5 my-5 xl:w-1/2">
                <TextField
                variant="outlined"
                className="w-full h-full mb-4 bg-white rounded"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the gippity a question"
                />
                <IconButton
                className="self-center"
                role="button"
                aria-label="Send button"
                disabled={input.length < 1}
                onClick={() => getResponse()}
                ><SendIcon /></IconButton>
            </div>
            <p
                className={`p-5 w-[calc(100%-40px)] xl:w-3/4 mt-0 mb-0 text-white bg-gray-800 border-solid shadow-xl border-1 rounded-xl ${
                loading ? "animate-pulse" : ""
                }`}
            >
                <strong>🤖:</strong> {output}
            </p>
    </section>
  );
};

export default OpenAI;
