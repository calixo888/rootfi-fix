import { init, setEnvironment, registerUser, Captivated } from "captivated";
import "captivated/captivated.css";
import { useEffect } from "react";

export const CAPTIVATED_API_KEY = "Y6Uan0xsnFdU34pegHmODAxpOxmjmB";
// init(CAPTIVATED_API_KEY);
// setEnvironment("production");

export default function Testing() {
  useEffect(() => {
    init(CAPTIVATED_API_KEY);
    setEnvironment("development");
    registerUser({
      email: "suraj.kadiyala@rootfi.in",
      name: "Suraj Kadiyala",
      phone: "1234567890",
    });
  }, []);

  return (
    <div>
      <h1>Testing</h1>
      <Captivated primaryColor="#fff" backgroundColor="#0070F4" pmfSurveyPromptDelay={3000} />
    </div>
  );
}

// const [Comp, setComp] = useState("jhg");

// useEffect(() => {
//   async function initCaptivated() {
//     const captivated = await import("captivated");

//     // console.log(captivated, "captivated");
//     init(CAPTIVATED_API_KEY);
//     setEnvironment("production");
//     setComp(captivated.Captivated);
//   }
//   initCaptivated();
// }, []);
