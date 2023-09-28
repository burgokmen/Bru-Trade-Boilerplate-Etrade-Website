import React, { Fragment } from "react";

const FooterBody = () => {
  const mapFooter = (arr) => {
    arr.map((arr, i) => {
      return (
        <React.Fragment key={i}>
          <h5>{arr[0]}</h5>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="flex py-[50px] px-[195px] justify-between">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  );
};

export default FooterBody;
