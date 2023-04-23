import { useState } from "react";
import Button from "./Button";
import { TextField } from "@mui/material";

const { Configuration, OpenAIApi } = require("openai");

const OpenAI = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  });
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const openai = new OpenAIApi(configuration);

  const getResponse = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0,
      max_tokens: 42,
    });
    let res = response.data.choices[0].text as string;
    if (!res.slice(-1).match(/[.?!]/)) {
      res = `${res}... Sorry token limit reached. This isn't free, so please have mercy. 🙏`;
    }
    setOutput(res);
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
