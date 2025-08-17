import { useEffect, useState } from "react";

const Typewriter = ({ text, speed }) => {
  const [textToShow, setTextToShow] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setTextToShow(textToShow + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, speed, index]);

  return <p className="app-p-border-bottom">{textToShow}</p>;
};

export default Typewriter;
