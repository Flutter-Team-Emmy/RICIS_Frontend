import { Cancel } from "@/svgs";
import Options from "../search/Options";
import { Input } from "../ui/input";
import DatePicker from "../search/DatePicker";
import { date_modified, filterStatus } from "../search/filters";
import { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";
import {
  EnLocalDateFormat,
  getDateModified,
  removeEmptyFields,
} from "@/utils/helpers";
import { useLazySearchApplicationsQuery } from "@/store/api/applicationApi";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setApplications } from "@/store/features/applicatonsSlice";

const InitialData = {
  application_name: "",
  applicant_name: "",
  reference_id: "",
};

const FilterOptionsModal = ({ setOpenFilter }) => {
  const [beforeDate, setBeforeDate] = useState();
  const [afterDate, setAfterDate] = useState();
  const [dateModified, setDateModified] = useState("");
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const isCustomDate = dateModified === "Custom";

  const [
    searchApplications,
    { isLoading, isFetching, isSuccess, error, data },
  ] = useLazySearchApplicationsQuery();

  const dispatch = useDispatch();

  // console.log(getDateModified("Today"));
  console.log(dateModified);

  const submitForm = async (event) => {
    event.preventDefault();
    let payload;

    if (isCustomDate) {
      payload = {
        application_name: formData.application_name,
        applicant_name: formData.applicant_name,
        start_date: EnLocalDateFormat(beforeDate),
        end_date: EnLocalDateFormat(afterDate),
        reference_id: formData.reference_id,
      };
    } else {
      const filterDate = getDateModified(dateModified);
      payload = {
        application_name: formData.application_name,
        applicant_name: formData.applicant_name,
        start_date: filterDate.start_date,
        end_date: filterDate.end_date,
        reference_id: formData.reference_id,
      };
      // const
      // setFormData((prev) => {
      //   return { ...prev, ...filterDate };
      // });
    }

    // send non Empty Fields to search api
    // console.log(formData);
    // const { applicant_name, applicant_name } = formData;
    // payload = {
    //   application_name: formData.application_name,
    //   applicant_name: formData.applicant_name,
    //   //   status: "",
    //   start_date: "",
    //   end_date: "",
    //   reference_id: "",
    // };
    // const payload = removeEmptyFields(formData);
    // console.log(formData)
    console.log(payload);
    await searchApplications(payload);
  };

  const resetFilter = () => {
    setFormData(InitialData);
    setBeforeDate();
    setAfterDate();
    setDateModified("");
    // setStatus("");
  };

  useEffect(() => {
    if (isSuccess) {
      setOpenFilter(false);
      dispatch(setApplications(data?.data.applications));
      console.log(data);
    }
  }, [isSuccess]);

  return (
    <div className="flex justify-center items-center fixed top bottom-0 left-0 right-0  inset-0 bg-[rgb(0,0,0,0.8)] overflow-y-auto bg-opacity-50 z-[9999] h-full">
      <form
        onSubmit={submitForm}
        className="bg-white px-6 py-6 rounded shadow-md md:w-[500px] z-[9999] lg:space-y-6 space-y-6 w-[95%] lg:w-[40rem]"
      >
        <div className="flex justify-between items-center gap-4">
          <h1 className="lg:text-xl text-lg font-semibold">Filter</h1>
          <span onClick={() => setOpenFilter(false)} className="cursor-pointer">
            {Cancel}
          </span>
        </div>
        {/* <div className="flex justify-between gap-4 items-center">
          <p className="">Status</p>
          <Options
            options={filterStatus}
            selected={status}
            setSelected={setStatus}
          />
        </div> */}
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4 lg:items-center w-full">
          <p className="text-sm font-semibold">Reference ID</p>
          <div className="lg:w-96">
            <Input
              type="text"
              id="search"
              placeholder="Enter words found in the ref id"
              name="reference_id"
              onChange={handleChange}
              value={formData.reference_id}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4 lg:items-center">
          <p className="text-sm font-semibold">Application Name</p>
          <div className="lg:w-96">
            <Input
              type="text"
              id="search"
              placeholder="Enter words found in the name"
              name="application_name"
              onChange={handleChange}
              value={formData.application_name}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4 lg:items-center">
          <p className="text-sm font-semibold">Applicant's Name</p>
          <div className="lg:w-96">
            <Input
              type="text"
              id="search"
              placeholder="Enter words found in the name"
              name="applicant_name"
              onChange={handleChange}
              value={formData.applicant_name}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4 lg:items-center">
          <p className="text-sm font-semibold">Date Modified</p>
          <Options
            options={date_modified}
            selected={dateModified}
            setSelected={setDateModified}
          />
        </div>
        {isCustomDate && (
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-500 lg:self-center lg:-ml-14 text-sm font-semibold">
              Between
            </p>
            <div className="flex lg:justify-end w-full gap-4 items-center">
              <DatePicker
                text="Before Date"
                date={beforeDate}
                setDate={setBeforeDate}
              />
              <DatePicker
                text="After Date"
                date={afterDate}
                setDate={setAfterDate}
              />
            </div>
          </div>
        )}
        <div className="flex lg:justify-end w-full gap-x-4">
          <button
            type="button"
            onClick={resetFilter}
            className="bg-white  px-10 py-4 text-sm rounded-md text-blue-700 font-semibold"
          >
            Reset
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 justify-center bg-blue-700 w-36 py-4 px-4 text-sm rounded-md text-white hover:bg-blue-600"
          >
            {isFetching && <ClipLoader size={20} color="#fff" />}
            <span className="">{isFetching ? "Applying..." : "Apply"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterOptionsModal;
