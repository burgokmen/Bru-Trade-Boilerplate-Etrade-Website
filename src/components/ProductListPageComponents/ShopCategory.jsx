import data from "../../data/data";

const ShopCategory = () => {
  return (
    <div className="flex justify-between">
      <div className="h-[223px] w-[206px] relative bottom-4 left-1/4  flex -translate-x-2/4">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className=" object-cover"
        />
        <div className="absolute">
          <h3>{data.productListPage.shopCategory.h3}</h3>
          <p>{data.productListPage.shopCategory.p}</p>
        </div>
      </div>
      <div className="h-[223px] w-[206px] relative bottom-4 left-1/4  flex -translate-x-2/4">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="object-cover"
        />
        <div className="absolute">
          <h3>{data.productListPage.shopCategory.h3}</h3>
          <p>{data.productListPage.shopCategory.p}</p>
        </div>
      </div>
      <div className="h-[223px] w-[206px]  relative bottom-4 left-1/4  flex -translate-x-2/4">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="object-cover"
        />
        <div className="absolute">
          <h3>{data.productListPage.shopCategory.h3}</h3>
          <p>{data.productListPage.shopCategory.p}</p>
        </div>
      </div>
      <div className="h-[223px] w-[206px] relative bottom-4 left-1/4  flex -translate-x-2/4">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className=" object-cover"
        />
        <div className="absolute">
          <h3>{data.productListPage.shopCategory.h3}</h3>
          <p>{data.productListPage.shopCategory.p}</p>
        </div>
      </div>
      <div className="h-[223px] w-[206px] relative bottom-4 left-1/4  flex -translate-x-2/4">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className=" object-cover"
        />
        <div className="absolute">
          <h3>{data.productListPage.shopCategory.h3}</h3>
          <p>{data.productListPage.shopCategory.p}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
