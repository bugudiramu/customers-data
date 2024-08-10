import { FC, useMemo } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Customer from "./Customer";

type TCustomerDataProps = {
  selectedCustomerId: number;
  setSelectedCustomerId: (idx: number) => void;
};

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

const CustomerData: FC<TCustomerDataProps> = ({
  selectedCustomerId,
  setSelectedCustomerId,
}) => {
  const renderCustomers = useMemo(
    () =>
      ({ index, style }: { index: number; style: any }) =>
        (
          <div
            style={{
              ...style,
            }}
            className="flex border border-b-1"
            onClick={() => setSelectedCustomerId(index + 1)}
          >
            <Customer
              customerId={index + 1}
              isSelectedCustomerId={selectedCustomerId === index + 1}
            />
          </div>
        ),
    [selectedCustomerId]
  );

  return (
    <div className="h-full w-full border border-gray-200">
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            width={width}
            className="h-full w-full hide-scrollbar"
            itemCount={data.length}
            itemSize={190}
          >
            {renderCustomers}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default CustomerData;
