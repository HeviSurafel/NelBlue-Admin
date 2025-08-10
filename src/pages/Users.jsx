import React, { useState } from "react";
import { Icon } from "@iconify/react";
import mailO from "@iconify-icons/mdi/email-outline";
import userIcon from "@iconify-icons/mdi/account";
import rightArrow from "@iconify-icons/icon-park-outline/right";
import notificationIcon from "@iconify-icons/tdesign/notification";
import dotsVertical from "@iconify-icons/mdi/dots-vertical";

import image from "../assets/4c1a900b3b3e49a09cbd22efaee47a0cec00b79a.jpg";

function Users() {
  const [active, setActive] = useState("Client");
  const [selectedUser, setSelectedUser] = useState(null);

  const clientData = [
    {
      name: "Jonas Blong",
      address: "35 home avenue, ontario",
      phone: "0906607126",
      category: "Car",
      vehicleType: "Tesla",
      model: "Trunck56",
    },
  ];

  const mechanicData = [
    {
      name: "Jonas Blong",
      contact: "0906607126",
      address: "35 home avenue, ontario",
      specialization: ["bus", "car"],
      status: "Approved",
    },
  ];

  const openDetails = (user) => {
    setSelectedUser(user);
  };

  const closeDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="absolute left-[325px] top-[55px] w-[918px] h-[49px] overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[40px]">Users</h2>
          </div>
          <div className="w-[264px] h-[35px]">
            <div className="flex space-x-4 items-center">
              <span>
                <Icon icon={mailO} width="30" height="30" />
              </span>
              <span>
                <Icon icon={notificationIcon} width="30" height="30" />
              </span>
              <span className="flex items-center space-x-1">
                <Icon icon={userIcon} width="30" height="30" />
                <span>Victor</span>
                <Icon icon={rightArrow} width="30" height="30" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle buttons */}
      <div className="w-[291px] h-[40px] absolute top-[134px] left-[352px] rounded-[10px] flex">
        <button
          className={`px-20 py-5 flex justify-center items-center ${
            active === "Mechanic" ? "bg-[#014F8E] text-white" : ""
          }`}
          onClick={() => setActive("Mechanic")}
        >
          Mechanic
        </button>
        <button
          className={`px-20 py-5 flex justify-center items-center ${
            active === "Client" ? "bg-[#014F8E] text-white " : ""
          }`}
          onClick={() => setActive("Client")}
        >
          Client
        </button>
      </div>

      {/* Search input */}
      <div className="absolute left-[917px] top-[227px] w-[286px] h-[40px] flex items-center border border-[#121212BF]/75 rounded-[8px] px-3">
        <input
          type="text"
          placeholder="Search Professional"
          className="w-full outline-none text-sm"
        />
        <Icon
          icon="mdi:magnify"
          width="24"
          height="24"
          className="text-[#121212BF]"
        />
      </div>

      {/* Table */}
      <div className="relative left-[40px] top-[294px] w-[914px] h-[511px] border rounded-[5px] ">
        <table
          className="w-full  text-left"
          style={{ borderCollapse: "separate", borderSpacing: "0 13px" }}
        >
          <thead className="bg-[#F1F0F0] w-[898px] h-[64px] text-sm font-semibold">
            <tr>
              <th className="text-center font-semibold text-[14px]">Client</th>
              {active === "Mechanic" ? (
                <>
                  <th className="text-center font-semibold text-[14px]">
                    Contact
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    Specialization
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    Status
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    Action
                  </th>
                </>
              ) : (
                <>
                  <th className="text-center font-semibold text-[14px]">
                    Contact
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    Catagories
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    VehicleType
                  </th>
                  <th className="text-center font-semibold text-[14px]">
                    Model
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody className="w-[883px] h-[85px] bg-white text-center ">
            {active === "Mechanic"
              ? mechanicData.map((item, idx) => (
                  <tr key={idx} className="border bg-[#E1E1E140] ">
                    <td className="w-[168px] h-[39px] p-6">
                      <div className="flex items-start gap-2 pl-5">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-[41px] h-[39px] rounded-full border"
                        />
                        <p className="text-md text-[16px]">{item.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div  className="text-start">
                        <p className="text-sm">{item.address}</p>
                        <p className="text-xs text-gray-500">{item.contact}</p>
                      </div>
                    </td>

                    <td className="px-4 py-2">
                      {item.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 px-2 py-1 rounded text-xs mr-1"
                        >
                          {spec}
                        </span>
                      ))}
                    </td>
                    <td className="px-4 py-2 text-[#319F43]">{item.status}</td>
                    <td
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => openDetails(item)}
                    >
                      <Icon icon={dotsVertical} width="24" height="24" />
                    </td>
                  </tr>
                ))
              : clientData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border bg-[#E1E1E140] cursor-pointer"
                    onClick={() => openDetails(item)}
                  >
                    <td className="w-[168px] h-[39px] p-6">
                      <div className="flex items-start gap-2 pl-5">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-[41px] h-[39px] rounded-full border"
                        />
                        <p className="text-md text-[16px]">{item.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">{item.address}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.vehicleType}</td>
                    <td className="px-4 py-2">{item.model}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* View Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <h3 className="text-xl font-semibold mb-4">User Details</h3>
            <img
              src={image}
              alt={selectedUser.name}
              className="w-20 h-20 rounded-full mx-auto border mb-4"
            />
            {Object.entries(selectedUser).map(([key, value]) => (
              <p key={key} className="mb-1">
                <strong>{key}:</strong>{" "}
                {Array.isArray(value) ? value.join(", ") : value}
              </p>
            ))}
            <button
              onClick={closeDetails}
              className="mt-4 px-4 py-2 bg-[#014F8E] text-white rounded hover:opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
