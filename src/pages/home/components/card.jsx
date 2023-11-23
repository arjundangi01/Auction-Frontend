import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { calculateTimeRemaining } from "../../../utils/date";

const Card = ({
  _id,
  productName,
  startBid,

  startDate,
  endDate,
  purchaseBy,
  description,
  productImage,
}) => {
  const [expireTime, setExpireTime] = useState();
  useEffect(() => {
    console.log(endDate);
    setExpireTime(calculateTimeRemaining(endDate) + 1);
  }, [endDate]);
  return (
    <Link to={`/product/${_id}`}>
      <div className="border rounded-xl hover:translate-y-0 translate-y-2 min-h-[350px] max-h-350px ">
        <div className="max-h-[220px] min-h-[220px] w-full overflow-hidden rounded-lg bg-gray-200 ">
          <img
            src={productImage}
            alt=""
            className="h-full min-h-[220px] w-full max-h-[100%] object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-[1.2rem] text-gray-700 px-3">{productName}</h3>
       
        {purchaseBy ? (
          <p className="mt-1 text-lg font-medium text-gray-900 px-3 text-red-600">
            Sold
          </p>
        ) : (
          <>
            {" "}
            <p className="mt-1 text-lg font-medium text-gray-900 px-3">
              Auction End on {endDate}{" "}
              <span className="text-red-500">{expireTime} days left</span>
            </p>{" "}
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;