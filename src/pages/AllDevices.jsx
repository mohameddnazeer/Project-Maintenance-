import React from "react";
import { Navbar } from "../components/utils/Navbar";
import { SearchInput } from "../components/utils/SearchInput";
import FilterInputs from "../components/utils/FilterInputs";
import maintenance from "../assets/images/maintenance.svg";
const AllDevices = () => {
  return (
    <div>
      <Navbar />
      <SearchInput />
      <FilterInputs />
      <div className="w-11/12 m-auto  mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse block md:table text-white ">
            {/* Head */}
            <thead className="bg-blue-900 h-11 ">
              <tr>
                <th className="p-4   text-center text-sm font-semibold rounded-l-md ">
                  رقم المالك
                </th>
                <th className="p-4   text-center text-sm font-semibold  ">
                  اسم المالك
                </th>
                <th className="p-4   text-center text-sm font-semibold  ">
                  عنوان MAC
                </th>
                <th className="p-4   text-center text-sm font-semibold  ">
                  نوع الجهاز
                </th>
                <th className="p-4   text-center text-sm font-semibold rounded-r-md">
                  رقم الجهاز{" "}
                </th>
              </tr>
            </thead>
            <tbody className="">
              {/* Row 1 */}
              <tr className="hover:bg-gray-700">
                <th className="p-4   text-center flex items-center justify-center gap-x-2">
                  <img src={maintenance} />
                  0101278549
                </th>
                <td className="p-4   text-center">nazeer</td>
                <td className="p-4   text-center">15156-65466-5455</td>
                <td className="p-4   text-center">Lenovo</td>
                <td className="p-4   text-center">3</td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-700 bg-custom-gray">
                <th className="p-4   text-center flex items-center justify-center gap-x-2">
                  <img src={maintenance} />
                  0101278549
                </th>
                <td className="p-4    text-center">nazeer</td>
                <td className="p-4   text-center">15156-65466-5455</td>
                <td className="p-4   text-center">Lenovo</td>
                <td className="p-4   text-center">1</td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-700">
                <th className="p-4   text-center flex items-center justify-center gap-x-2">
                  <img src={maintenance} />
                  0101278549
                </th>
                <td className="p-4   text-center">nazeer</td>
                <td className="p-4   text-center">15156-65466-5455</td>
                <td className="p-4   text-center">Lenovo</td>
                <td className="p-4   text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDevices;
