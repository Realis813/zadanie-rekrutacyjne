import { useState } from "react";
import "./App.scss";
import { Color } from "./components/Color/Color";
import { InputForm } from "./components/InputForm/InputForm";
import FilterForm from "./components/FilterForm/FilterForm";

const defaultColors = [
  "#012345",
  "#123456",
  "#23456a",
  "#3456ab",
  "#456abc",
  "#56abcd",
  "#6abcde",
  "#abcdef",
];

const arrayOfColorsFromLocalStorage: string[] = JSON.parse(
  localStorage.getItem("arrayOfColors") || "[]"
);

const App = () => {
  const [colors, setColors] = useState<string[]>([
    ...defaultColors,
    ...arrayOfColorsFromLocalStorage,
  ]);
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <div className="App">
      <header>Zadanie rekrutacyjne</header>
      <main>
        <div>
          <InputForm colors={colors} colorsSetter={setColors} />
        </div>
        <div>
          <FilterForm filters={filters} filtersSetter={setFilters} />
        </div>
        <div className="colors">
          {colors
            .filter(
              (item) =>
                (parseInt(item.charAt(1) + item.charAt(2), 16) > 127 ||
                  !filters.includes("red")) &&
                (parseInt(item.charAt(3) + item.charAt(4), 16) > 127 ||
                  !filters.includes("green")) &&
                (parseInt(item.charAt(5) + item.charAt(6), 16) > 127 ||
                  !filters.includes("blue")) &&
                ((/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(item) &&
                  (parseInt(item.substring(1, 3), 16) / 255) * 100 > 50) ||
                  !filters.includes("saturation"))
            )
            .sort(
              (a, b) =>
                parseInt(b.charAt(1) + b.charAt(2), 16) * 1000000 +
                parseInt(b.charAt(3) + b.charAt(4), 16) * 1000 +
                parseInt(b.charAt(5) + b.charAt(6), 16) -
                (parseInt(a.charAt(1) + a.charAt(2), 16) * 1000000 +
                  parseInt(a.charAt(3) + a.charAt(4), 16) * 1000 +
                  parseInt(a.charAt(5) + a.charAt(6), 16))
            )
            .map((color, index) => (
              <Color
                colors={colors}
                colorsSetter={setColors}
                color={color}
                key={index}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default App;
