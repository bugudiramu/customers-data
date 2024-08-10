import { FC, useState } from "react";
import CustomerData from "./components/CustomerData/CustomerData";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";

const App: FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(1);
  return (
    <div className="h-screen w-screen grid grid-cols-6 overflow-hidden">
      <div className="col-span-2 h-screen text-">
        <CustomerData
          selectedCustomerId={selectedCustomerId}
          setSelectedCustomerId={setSelectedCustomerId}
        />
      </div>
      <div className="col-span-4 h-screen">
        <CustomerDetails selectedCustomerId={selectedCustomerId} />
      </div>
    </div>
  );
};

export default App;
