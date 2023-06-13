import "./InputForm.scss";
import { Dispatch, SetStateAction, useState } from "react";

export const InputForm = ({
  colors,
  colorsSetter,
}: {
  colors: string[];
  colorsSetter: Dispatch<SetStateAction<string[]>>;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <div className="inputForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue("");
          if (/^#[0-9a-fA-F]{6}$/.test(inputValue)) {
            if (!colors.includes(inputValue)) {
              const arrayOfColors: string[] = JSON.parse(
                localStorage.getItem("arrayOfColors") || "[]"
              );
              arrayOfColors.push(inputValue);
              localStorage.setItem(
                "arrayOfColors",
                JSON.stringify(arrayOfColors)
              );
              colorsSetter([...colors, inputValue]);
            }
            setErrorMsg("");
          } else {
            setErrorMsg("Nieprawidłowa wartość koloru: " + inputValue);
          }
        }}
      >
        <label htmlFor="colorInput">Dodaj kolor</label>
        <input
          id="colorInput"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            if (errorMsg !== "") {
              setErrorMsg("");
            }
            if (/^#?[0-9a-fA-F]{0,6}$/.test(value)) setInputValue(value);
          }}
        />
        <input type="submit" value="Zapisz" />
      </form>
      <div className="error">{errorMsg}</div>
    </div>
  );
};
