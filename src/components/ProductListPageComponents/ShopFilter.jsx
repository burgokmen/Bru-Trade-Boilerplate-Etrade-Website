import { Button, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const ShopFilter = () => {
  const [filtered, setFiltered] = useState(0);

  return (
    <div className="flex justify-between px-[195px]">
      <p> Showing all 12 results</p>
      <div className="flex">
        <p>Views: </p>
        <i class="fa fa-filter"></i>
        <i class="fa fa-bars"></i>
      </div>
      <div className="flex w-[141px]">
        <Select label="Popularity">
          <Option>Popularity</Option>
          <Option>Opt2</Option>
          <Option>Opt3</Option>
          <Option>Opt4</Option>
          <Option>Opt5</Option>
        </Select>

        <Button
          onClick={() => history.push("/productList")}
          className="g-[35px] rounde"
          color="blue"
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default ShopFilter;
