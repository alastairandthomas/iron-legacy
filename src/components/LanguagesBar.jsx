import { useState, useEffect } from "react";
import * as colors from "../assets/languageColors.json";

function LanguagesBar({ languages }) {
  delete languages?.key;

  const [languagePercentages, setLanguagePercentages] = useState(null);
  console.log(colors);

  const calcPercentages = (obj) => {
    let total = 0;
    const sortableArray = [];
    const sortedObj = {};

    for (let key in obj) {
      sortableArray.push([key, obj[key]]);
    }

    sortableArray.sort((a, b) => b[1] - a[1]);

    

    

    sortableArray.forEach((array) => {
      sortedObj[array[0]] = array[1];
    });

    Object.values(sortedObj).forEach((value) => {
      total += value;
    });

    for (const [key, value] of Object.entries(sortedObj)) {
      sortedObj[key] = (value / total) * 100;
    }

    setLanguagePercentages(sortedObj);
  };

  useEffect(() => {
    calcPercentages(languages);
  }, [languages]);

  console.log(languagePercentages);

  return (
    <div>
      {languagePercentages && (
        <div className="relative mx-2 mt-6">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
            {Object.keys(languagePercentages).map((keyName) => {
              return (
                
                <div
                  key={keyName}
                  style={{
                    width: `${languagePercentages[keyName]}%`,
                    backgroundColor: `${colors[keyName]}`,
                  }}
                  className="shadow-none flex flex-col whitespace-nowrap text-white"
                ></div>
              );
            })}
          </div>
          <ul className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          {Object.keys(languagePercentages).map((keyName) => {
              return (
                <div className="">
                <li key={keyName} style={{backgroundColor: `${colors[keyName]}`,}}className="badge badge-xs "
                ></li><span className="ml-2 text-sm">{keyName}</span> <span className="text-gray-400 text-sm">{Math.floor(languagePercentages[keyName])}%</span>
                </div>
              );
            })}
            </ul>
        </div>
      )}
    </div>
  );
}

export default LanguagesBar;
