import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import mailO from "@iconify-icons/mdi/email-outline";
import userIcon from "@iconify-icons/mdi/account";
import rightArrow from "@iconify-icons/icon-park-outline/right";
import notificationIcon from "@iconify-icons/tdesign/notification";
import dotsVertical from "@iconify-icons/mdi/dots-vertical";
import starIcon from "@iconify-icons/mdi/star";
import starOutlineIcon from "@iconify-icons/mdi/star-outline";
import image from "../assets/4c1a900b3b3e49a09cbd22efaee47a0cec00b79a.jpg";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showClientDetails, setShowClientDetails] = useState(false);
  const dropdownRef = useRef();

  const data = [
    {
      client: "Jonas Blong",
      clientDetails: {
        name: "Jonas Blong",
        category: "Car",
        vehicleType: "Tesla",
        model: "Truck345674",
        address: "35 home avenue, canada",
        phone: "+234 7890543",
        email: "JonasBlong@gmail.com",
      },
      task: "Brake Pad Servicing",
      date: "25/03/2025",
      time: "3PM",
      amount: "$500",
      status: "Completed",
      image: image,
      handyman: {
        name: "Jones Stones",
        rating: 4,
        image: image,
        specialization: ["Buses", "Honda"],
        availabilityDays: "Monday - Friday",
        availabilityHours: "08:00AM - 06:00PM",
        phone: "+1 738 4896 5432",
        address: "James street Canada",
        email: "Jonestens@gmail.com",
        services: ["Brake Pad Servicing", "Gear oil maintenance"],
      },
    },
    {
      client: "Tesla: Truck20144",
      clientDetails: {
        name: "Tesla Company",
        category: "Cars",
        vehicleType: "Tesla Semi",
        model: "Truck20144",
        address: "1 Tesla Road, Austin, TX",
        phone: "+1 555 789 1234",
        email: "fleet@tesla.com",
      },
      task: "Gear oil maintenance",
      date: "26/03/2025",
      time: "11AM",
      amount: "$300",
      status: "Pending",
      image: image,
      handyman: {
        name: "Jane Smith",
        rating: 3,
        image: image,
        specialization: ["Oil Change", "Electrical"],
        availabilityDays: "Monday - Friday",
        availabilityHours: "09:00AM - 05:00PM",
        phone: "+1 555 123 4567",
        address: "Main street, NY",
        email: "janesmith@example.com",
        services: ["Oil Change", "Electrical Repair"],
      },
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (idx) => {
    if (dropdownIndex === idx) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(idx);
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowClientDetails(false);
    setDropdownIndex(null);
  };

  const openClientDetails = (project) => {
    setSelectedProject(project);
    setShowClientDetails(true);
    setDropdownIndex(null);
  };

  const closeDetails = () => {
    setSelectedProject(null);
    setShowClientDetails(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          icon={i <= rating ? starIcon : starOutlineIcon}
          className={`inline-block ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          width="20"
          height="20"
        />
      );
    }
    return stars;
  };

  return (
    <div className="">
      {/* Header */}
      <div className="absolute left-[325px] top-[55px] w-[918px] h-[49px] overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[40px]">Projects</h2>
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

      {/* Search input */}
      <div className="absolute left-[917px] top-[227px] w-[286px] h-[40px] flex items-center border border-[#121212BF]/75 rounded-[8px] px-3">
        <input
          type="text"
          placeholder="Search Projects"
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
              <th className="text-center font-semibold text-[14px]">Task</th>
              <th className="text-center font-semibold text-[14px]">Date</th>
              <th className="text-center font-semibold text-[14px]">Time</th>
              <th className="text-center font-semibold text-[14px]">Amount</th>
              <th className="text-center font-semibold text-[14px]">Status</th>
              <th className="text-center font-semibold text-[14px]">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="text-sm text-center bg-[#E1E1E1] rounded-md"
              >
                <td className="px-4 py-2">
                  <div
                    className="flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => openClientDetails(item)}
                  >
                    <img
                      src={image}
                      alt={item.client}
                      className="w-[32px] h-[32px] rounded-full border"
                    />
                    <div className="text-left flex flex-col">
                      <p className="text-md text-[16px]">
                        {item.client.split(":")[0]}
                      </p>
                      {item.client.includes(":") && (
                        <p className="text-xs text-gray-500">
                          {item.client.split(":")[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <p className="border-l border-[#023AA2]">{item.task}</p>
                </td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.time}</td>
                <td className="px-4 py-2">{item.amount}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    item.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="relative px-4 py-2">
                  <Icon
                    icon={dotsVertical}
                    width="24"
                    height="24"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(idx);
                    }}
                  />
                  {dropdownIndex === idx && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                    >
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProjectDetails(item);
                        }}
                      >
                        View Project Details
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Client Details Modal - Only shown when clicking client name */}
      {selectedProject && showClientDetails && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Client Details</h3>
              <button
                onClick={closeDetails}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Client Header Section */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={image}
                alt={selectedProject.clientDetails.name}
                className="w-16 h-16 rounded-full border-2 border-gray-200"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {selectedProject.clientDetails.name}
                </h4>
                <p className="text-sm text-gray-500">Client</p>
              </div>
            </div>

            {/* Client Details Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Categories
                  </p>
                  <p className="text-sm">
                    {selectedProject.clientDetails.category}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Vehicle Type
                  </p>
                  <p className="text-sm">
                    {selectedProject.clientDetails.vehicleType}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Model
                  </p>
                  <p className="text-sm">
                    {selectedProject.clientDetails.model}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Phone Number
                  </p>
                  <p className="text-sm">
                    {selectedProject.clientDetails.phone}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Address
                </p>
                <p className="text-sm">
                  {selectedProject.clientDetails.address}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <p className="text-sm text-blue-600">
                  {selectedProject.clientDetails.email}
                </p>
              </div>
            </div>

           
          </div>
        </div>
      )}

      {/* Project Details Modal - Only shown when clicking "View Details" in dropdown */}
      {selectedProject && !showClientDetails && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Project Details</h3>
              <button
                onClick={closeDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Client Info Box */}
            <div className="w-full h-[85px] bg-[#F5F5F5] p-4 rounded-[10px] mb-5">
              <div className="flex justify-between items-center gap-4">
                <div className="flex justify-center gap-2 items-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.client}
                    className="w-[50px] h-[50px] rounded-full border"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">
                      {selectedProject.client.split(":")[0]}
                    </p>
                    <p className="font-normal text-[12px]">Client</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-black font-semibold">
                    {selectedProject.client.includes(":")
                      ? selectedProject.client.split(":")[0].includes("Tesla")
                        ? "Tesla"
                        : ""
                      : ""}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedProject.client.includes(":")
                      ? selectedProject.client.split(":")[1]
                      : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="flex flex-col gap-2 bg-[#F5F5F5] rounded-[10px]">
              {/* Mechanic Info */}
              <div className="w-full flex justify-between items-center gap-4 px-5 py-6">
                <div className="flex justify-center gap-2 items-center">
                  <img
                    src={selectedProject.handyman.image}
                    alt={selectedProject.handyman.name}
                    className="w-[50px] h-[50px] rounded-full border"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">
                      {selectedProject.handyman.name}
                    </p>
                    <p className="font-normal text-[12px]">Mechanic</p>
                  </div>
                </div>
                <div className="flex justify-evenly items-center gap-3 bg-[#C4D9FF]/55 px-3 py-1 rounded">
                  {selectedProject.handyman.specialization.map(
                    (spec, index) => (
                      <p key={index} className="text-sm text-black">
                        {spec}
                      </p>
                    )
                  )}
                </div>
              </div>
              <hr className="w-[401px] mx-auto bg-[#000000]/50" />

              {/* Project Details */}
              <div className="grid grid-cols-3 gap-4 mb-6 px-5 py-6">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-[14px]">{selectedProject.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Plan</p>
                  <p className="text-[14px]">Milestone</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service Fee</p>
                  <p className="text-[14px]">{selectedProject.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-[14px]">{selectedProject.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="text-[14px]">Card</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p
                    className={`font-medium ${
                      selectedProject.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {selectedProject.status}
                  </p>
                </div>
              </div>
              <hr className="w-[401px] mx-auto bg-[#000000]/50" />

              {/* Services Section */}
              <div className="px-5 py-6 bg-[#F5F5F5]">
                <p className="text-sm font-semibold mb-2 text-[#121212]">
                  Services
                </p>
                <ul className="space-y-2">
                  {selectedProject.handyman.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center px-2 border-l-2 border-[#023AA2]"
                    >
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
