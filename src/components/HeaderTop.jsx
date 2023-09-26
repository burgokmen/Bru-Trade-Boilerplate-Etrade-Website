import data from "../data/data";

const HeaderTop = () => {
  return (
    <div className="bg-darkBlue text-white w-auto">
      <div className="px-[1.5rem] flex justify-between">
        <div>
          <span>icon</span>
          {data.myStore.phoneNumber}
          <span>icon</span>
          {data.myStore.email}
        </div>
        <div>{data.myStore.discountLetter}</div>
        <div>
          Follow Us : <span>icons</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
