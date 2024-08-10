import { FC } from "react";

type TCustomerProps = {
  customerId: number;
  isSelectedCustomerId: boolean;
};

const Customer: FC<TCustomerProps> = ({ customerId, isSelectedCustomerId }) => {
  return (
    <div
      className={`w-full p-6 flex flex-col gap-4 text-[#404040] cursor-pointer ${
        isSelectedCustomerId && "bg-[#eee] border-r-2 border-black"
      }`}
    >
      <h2 className="text-xl font-normal">
        Customer {customerId < 10 ? `0${customerId}` : customerId}
      </h2>
      <p className="line-clamp-[4] text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Customer;
