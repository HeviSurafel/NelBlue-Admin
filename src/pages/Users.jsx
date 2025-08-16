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
      model: "Truck20144",
    },
  ];

  const mechanicData = [
    {
      name: "Jonas Blong",
      contact: "0906607126",
      address: "35 home avenue, ontario",
      specialization: ["Buses", "Hunda"],
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

      {/* Project Details
      <div className="absolute w-[188px] h-[28px] left-[447px] top-[149px]">
        <h3 className="text-xl font-semibold">Project Details</h3>
      </div> */}

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
      <div className="relative left-[40px] top-[294px] w-[914px]">
        <table className="w-full table-auto text-left border-separate border-spacing-y-3">
          <thead className="bg-[#F5F5F5] h-[64px] text-sm font-semibold">
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

          <tbody>
            {active === "Mechanic"
              ? mechanicData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="text-sm text-center bg-[#E1E1E1] rounded-md"
                  >
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-[32px] h-[32px] rounded-full border"
                        />
                        <div className="text-left flex flex-col">
                          <p className="text-md text-[16px]">{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="text-left">
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
                    <td className="px-4 py-2 text-[#319F43] font-medium">
                      {item.status}
                    </td>
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
                    className="text-sm text-center bg-[#E1E1E1] rounded-md cursor-pointer"
                    onClick={() => openDetails(item)}
                  >
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-[32px] h-[32px] rounded-full border"
                        />
                        <div className="text-left flex flex-col">
                          <p className="text-md text-[16px]">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.vehicleType}: {item.model}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="text-left">
                        <p className="text-sm">{item.address}</p>
                        <p className="text-xs text-gray-500">{item.phone}</p>
                      </div>
                    </td>
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
        <div className="fixed inset-0  bg-opacity-40 flex items-center  justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold relative  y-[34px]">
                Project Details
              </h3>
              <button
                onClick={closeDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* User Info Box */}
            <div className="w-full h-[85px] bg-[#F5F5F5]  p-4 rounded-[10px] mb-5">
              <div className="flex justify-between items-center gap-4">
                <div className="flex justify-center gap-2  items-center ">
                  <img
                    src={image}
                    alt={selectedUser.name}
                    className="w-[50px] h-[50px] rounded-full border"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{selectedUser.name}</p>
                    <p className="font-normal text-[12px]">Client</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-black font-semibold ">Tesla</p>
                  <p className="text-sm text-gray-600">Truck20144</p>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="flex flex-col gap-2 bg-[#F5F5F5] rounded-[10px]">
              {/*  describing the mechanic */}
              <div className="w-full flex justify-between items-center gap-4 px-5 py-6 ">
                <div className=" flex justify-center gap-2  items-center ">
                  <img
                    src={image}
                    alt={selectedUser.name}
                    className="w-[50px] h-[50px] rounded-full border"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{selectedUser.name}</p>
                    <p className="font-normal text-[12px]">Mechanic</p>
                  </div>
                </div>

                <div className="flex justify-evenly items-center gap-3  bg-[#C4D9FF]/55">
                  <p className="text-sm text-black">Buses</p>
                  <p className="text-sm text-black">Honda</p>
                </div>
              </div>
              <hr className="w-[401px] mx-auto bg-[#000000]/50" />
              <div className="grid grid-cols-3 gap-4 mb-6 px-5 py-6">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-[14px]">25/05/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Plan</p>
                  <p className="text-[14px]">Milestone</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service Fee</p>
                  <p className="text-[14px]">$400</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-[14px]">3PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="text-[14px]">Card</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium text-green-600">Completed</p>
                </div>
              </div>
               <hr className="w-[401px] mx-auto bg-[#000000]/50" />
            {/* Services Section */}
            <div className="px-5 py-6  bg-[#F5F5F5] ">
              <p className="text-sm font-semibold mb-2 text-[#121212]">
                Services
              </p>
              <ul className="space-y-2 ">
                <li className="flex items-center px-2  border-l-2 border-[#023AA2]">
                  <span>Brake Pad Servicing</span>
                </li>
                <li className="flex items-center px-2 border-l-2 border-[#023AA2]">
                  <span>Gear oil maintenance</span>
                </li>
              </ul>
            </div>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
