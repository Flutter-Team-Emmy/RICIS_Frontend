import { Cancel } from "@/svgs";
import { useState } from "react";
import Btn from "@/components/Btn";
import Options from "./Options";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOption,
  setDate,
  setEndDate,
  setStartDate,
} from "@/store/features/statisticsSlice";
import useForm from "@/hooks/useForm";

const InitialData = {
  year: {
    year: "",
  },
  month: {
    year: "",
    month: "",
  },
  week: {
    year: "",
    month: "",
    week: "",
  },
  day: {
    year: "",
    month: "",
    week: "",
    day: "",
  },
};

const data = {
  year: ["2024", "2023", "2022"],
  month: [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  week: ["week 1", "week 2", "week 3", "week 4"],
  day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const SelectMenu = ({ name, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      id=""
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg lg:w-24 p-2.5 flex-grow basis-1/5"
    >
      <option selected className="">
        {capitalizeFirstLetter(name)}
      </option>
      {data[name]?.map((option) => (
        <option key={option} value={option}>
          {capitalizeFirstLetter(option)}
        </option>
      ))}
    </select>
  );
};

const Filter = ({setIsEditing}) => {
  const selected = useSelector(selectOption);

  const filters = {
    day: ["day", "week", "month", "year"],
    week: ["week", "month", "year"],
    month: ["month", "year"],
    year: ["year"],
  };

  const InitialFilterData = InitialData[selected];
  const { formData, setFormData, handleChange } = useForm(InitialFilterData);
  const dispatch = useDispatch();

  const submit = () => {
    let start_date;
    let end_date;
    console.log(formData);
    if (selected === "year") {
      const { year } = formData;
      start_date = new Date(year, 0, 1);
      end_date = new Date(year, 11, 31);
      //   dispatch(setDate(start_date));
    }
    if (selected === "month") {
      const { year, month } = formData;
      const monthIndex = data.month.indexOf(month);
      start_date = new Date(year, monthIndex, 1);
      end_date = new Date(year, monthIndex, 31);
      //   dispatch(setDate(start_date));
    }
    if (selected === "week") {
      const { year, month, week } = formData;
      const monthIndex = data.month.indexOf(month);
      const weekIndex = data.week.indexOf(week);
      const start_day = 7 * (weekIndex + 1) - 6;
      const end_day = (weekIndex + 1) * 7;
      start_date = new Date(year, monthIndex, start_day);
      end_date = new Date(year, monthIndex, end_day);
    }
    // if (selected === "day") {
    //   const { year, month, week, day } = formData;
    //   const monthIndex = data.month.findIndex(month);
    //   const weekIndex = data.week.findIndex(week);
    // //   const day = (weekIndex + 1) * 7;
    //   start_date = new Date(year, monthIndex, day);
    // }
    dispatch(setDate(JSON.stringify(start_date)));
    dispatch(setStartDate(JSON.stringify(start_date)));
    dispatch(setEndDate(JSON.stringify(end_date)));
    console.log({ start_date, end_date });
  };

  // const
  return (
    <div className="flex justify-center items-center fixed top bottom-0 left-0 right-0  inset-0 bg-[rgb(0,0,0,0.8)] overflow-y-auto bg-opacity-50 z-[9999] h-full">
      <div className="bg-white px-6 py-6 rounded shadow-md md:w-[500px] z-[9999] lg:space-y-6 space-y-8 w-[95%] lg:w-[40rem]">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg ">Filter</h1>
          <span onClick={()=> setIsEditing(false)} className="">{Cancel}</span>
        </div>
        <div className="flex items-center gap-2">
          <Options />
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Select your preferred month below to make your search easy
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {filters[selected].map((filter) => (
              <SelectMenu
                key={filter}
                name={filter}
                onChange={handleChange}
                value={formData[filter]}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-16">
          <Btn text="save changes" handleClick={submit} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
