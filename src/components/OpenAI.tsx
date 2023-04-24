import { useState } from "react";
import Button from "./Button";
import { TextField } from "@mui/material";

const OpenAI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const getResponse = async () => {
    console.log("hello");
    const url = process.env.REACT_APP_AI_URL || '';
    const resp = await fetch(
      url,
      { method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({ text: input }) }
    );
    const data = await resp.json();
    console.log(data);
    // if (!res.slice(-1).match(/[.?!]/)) {
    //   res = `${res}... Sorry token limit reached. This isn't free, so please have mercy. 🙏`;
    // }
    // setOutput(JSON.stringify(data));
  };

  return (
    <section className="p-10">
      <h2 className="mt-0 text-4xl">Limited Chat Gippity</h2>
      <div className="flex flex-col">
        <TextField
          variant="outlined"
          className="mb-4 bg-white rounded"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the gippity a question"
        />
        <Button
          className="self-center !my-5"
          variant="contained"
          disabled={input.length < 1}
          onClick={() => getResponse()}
          text="CHAT"
        />
        {output.length !== 0 && (
          <p className="p-5 mt-0 mb-0 text-white bg-gray-800 border-solid shadow-xl border-1 rounded-xl">
            {output}
          </p>
        )}
      </div>
    </section>
  );
};

export default OpenAI;
