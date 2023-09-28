import data from "../../data/data";
import { InputWithButton } from "./InputFooter";

const FooterBody = () => {
  function mapFooter(arr) {
    const arr0 = arr[0];
    const arr1 = arr.splice(1, arr.length);

    return (
      <div>
        <h5 className="text-darkBlue pb-[10px]">{arr0}</h5>
        {arr1.map((a, i) => (
          <h6 className="text-[#737373] text-[14px]" key={i}>
            {a}
          </h6>
        ))}
      </div>
    );
  }
  return (
    <div className="py-[50px] px-[195px] flex  justify-between">
      <div>{mapFooter(data.footerArr[1])}</div>
      <div>{mapFooter(data.footerArr[2])}</div>
      <div>{mapFooter(data.footerArr[3])}</div>
      <div>{mapFooter(data.footerArr[4])}</div>
      <div>
        <h5 className="text-darkBlue pb-[10px]">{data.footerArr[5][0]}</h5>
        {InputWithButton()}
        <h6 className=" text-[12px] text-normal text-[#737373]">
          {data.footerArr[5][1]}
        </h6>
      </div>
    </div>
  );
};

export default FooterBody;
