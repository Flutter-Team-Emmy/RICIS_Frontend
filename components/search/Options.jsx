import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { capitalizeFirstLetter } from "@/utils/helpers";

export const Options = ({ options, selected, setSelected }) => {
  console.log(selected)
  return (
    <Select
      className="z-[9999]"
      onValueChange={(value) => setSelected(value)}
      defaultValue={selected}
      // name="status"
    >
      <SelectTrigger className="lg:w-96">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="z-[9999]">
        <SelectGroup className="z-[9999]">
          <SelectLabel>Options</SelectLabel>
          {options?.map((option) => (
            <SelectItem key={option.id} value={option.value}>
              {option.value.split("_").join(" ")}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Options;
