import React from "react";

interface AmountFormatterProps {
  amount: number;
}

const AmountFormatter: React.FC<AmountFormatterProps> = ({ amount }) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
  }).format(amount);

  return <div>{formattedAmount}</div>;
};

export default AmountFormatter;
