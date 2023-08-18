import { useContext } from "react";
import Context from "../store/store";

const ImageText = () => {
  const { setText1, setText2 } = useContext(Context);

  const handleText1Change = (e) => {
    setText1(e.target.value);
  };
  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Text1..." onChange={handleText1Change} />
      <input type="text" placeholder="Text2..." onChange={handleText2Change} />
    </>
  );
};
export default ImageText;
