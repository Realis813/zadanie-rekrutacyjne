import { CSSProperties, Dispatch, SetStateAction } from "react";
import "./Color.scss";

export const Color = ({
  color,
  colors,
  colorsSetter,
}: {
  color: string;
  colors: string[];
  colorsSetter: Dispatch<SetStateAction<string[]>>;
}) => {
  const arrayOfColorsFromLocalStorage: string[] = JSON.parse(
    localStorage.getItem("arrayOfColors") || "[]"
  );
  return (
    <div className="color">
      <div
        className="color-rectangle"
        style={{ "--bg-color": color } as CSSProperties}
      >
        {arrayOfColorsFromLocalStorage.includes(color) && (
          <button
            onClick={() => {
              localStorage.setItem(
                "arrayOfColors",
                JSON.stringify(
                  arrayOfColorsFromLocalStorage.filter(
                    (value) => value !== color
                  )
                )
              );
              colorsSetter(colors.filter((value) => value !== color));
            }}
          >
            X
          </button>
        )}
      </div>
      <p>{color.toUpperCase()}</p>
    </div>
  );
};
