import { useState } from "react";
import axios from "axios";

const TestGenerator = () => {
  const [componentName, setComponentName] = useState("");
  const [componentCode, setComponentCode] = useState("");
  const [generatedTests, setGeneratedTests] = useState("");

  const generateTests = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/generate-tests",
        {
          componentName,
          componentCode,
        }
      );
      setGeneratedTests(response.data);
    } catch (error) {
      console.error("Error generating tests:", error.message);
    }
  };
  return (
    <div className="flex flex-col w-full h-auto p-16">
      <label>
        Component Name:
        <input
          type="text"
          className="border-2 border-black"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Component Code:
        <textarea
          className="border-2 border-black"
          value={componentCode}
          onChange={(e) => setComponentCode(e.target.value)}
        />
      </label>
      <br />
      <button onClick={generateTests}>Generate Tests</button>
      <div>
        <h3>Generated Tests:</h3>
        <pre className="border-2 border-black h-96">{generatedTests}</pre>
      </div>
    </div>
  );
};

export default TestGenerator;
