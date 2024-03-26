"use client";
import { useReducer } from "react";

const provinces = [
  {
    value: "Newfoundland and Labrador",
    id: "NL",
  },
  {
    value: "Prince Edward Island",
    id: "PE",
  },
  {
    value: "Nova Scotia",
    id: "NS",
  },
  {
    value: "New Brunswick",
    id: "NB",
  },
  {
    value: "Quebec",
    id: "QC",
  },
  {
    value: "Ontario",
    id: "ON",
  },
  {
    value: "Manitoba",
    id: "MB",
  },
  {
    value: "Saskatchewan",
    id: "SK",
  },
  {
    value: "Alberta",
    id: "AB",
  },
  {
    value: "British Columbia",
    id: "BC",
  },
  {
    value: "Yukon",
    id: "YT",
  },
  {
    value: "Northwest Territories",
    id: "NT",
  },
  {
    value: "Nunavut",
    id: "NU",
  },
];

const optionReducer = (state, action) => {
  let newState = Object.assign([], state);
  switch (action.type) {
    case "inc":
      newState.splice(0, 0, newState.pop());
      return newState;
    case "dec":
      newState.splice(newState.length - 1, 1, newState.shift());
      console.log(newState);
      return newState;
  }
};

export default function Page() {
  const [options, optionDispatch] = useReducer(
    optionReducer,
    provinces,
    undefined
  );
  // const test=async()=>{
  //   console.log(await testNodemailer())
  // }
  const openOptions = () => {
    console.log(options[Math.floor(options.length / 2)].value);
  };
  return (

    <div className={" flex justify-around pointer-events-auto-20 p-20 w-full"}>
      <button
        className={"p-20 border-2"}
        onClick={() => optionDispatch({ type: "inc" })}
      >
        Tab up
      </button>
      <div className={"grid"}>
        {options.slice(0, options.length / 2).map((option) => {
          return (
            <button
              type={"button"}
              key={option.id}
              className={" w-[200px] border overflow-hidden "}
              onClick={openOptions}
            >
              {option.value}
            </button>
          );
        })}
        <button
          type={"button"}
          className={" w-[200px] border bg-teal-800 "}
          onClick={openOptions}
        ><p className={'overflow-hidden'}>
          {
            // console.log()
            options[Math.floor(options.length / 2)].value
          }
        </p>
        </button>
        {options.slice(options.length / 2 + 1).map((option) => {
          return (
            <button
              type={"button"}
              key={option.id}
              className={" w-[200px] border overflow-hidden  "}
              onClick={openOptions}
            >
              {option.value}
            </button>
          );
        })}
      </div>
      <button
        className={"p-20 border-2"}
        onClick={() => optionDispatch({ type: "dec" })}
      >
        Tab down
      </button>
      {/*<ParallaxBackground></ParallaxBackground>*/}
      {/*<div className={"bg-element-2 m-10 h-40"}>text</div>*/}

       {/*<CookieDev/>*/}
       {/*<InfoForm/>*/}
       {/*<CurrentTickets/>*/}
       {/*<SquarePayment/>*/}
      {/*<FormSequence/>*/}
    </div>
  );
}
