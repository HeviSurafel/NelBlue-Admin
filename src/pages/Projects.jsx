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

// Dummy feedback data with random messages and client images
const feedbacks = [
  {
    clientName: "Alice",
    clientImage: image,
    rating: 5,
    message: "Great service, very professional!",
  },
  {
    clientName: "Bob",
    clientImage: image,
    rating: 4,
    message: "Timely and efficient work, thanks!",
  },
  {
    clientName: "Charlie",
    clientImage: image,
    rating: 5,
    message: "Highly recommend Jones Stones.",
  },
];

function Projects() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailType, setDetailType] = useState(null); // 'project' or 'handyman'
  const [dropdownIndex, setDropdownIndex] = useState(null); // Which row dropdown is open
  const [tab, setTab] = useState("services"); // for handyman modal tabs

  const dropdownRef = useRef();

  const data = [
    {
      client: "Jonas Blong",
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
        services: [
          { name: "Brake Pad", price: "$200" },
          { name: "Brake Pad", price: "$200" },
          { name: "Brake Pad", price: "$200" },
          { name: "Brake Pad", price: "$200" },
        ],
      },
    },
    {
      client: "Tesla: Truck20144",
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
        services: [
          { name: "Oil Change", price: "$100" },
          { name: "Electrical Repair", price: "$150" },
        ],
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

  const openDetails = (user, type) => {
    setSelectedUser(user);
    setDetailType(type);
    setDropdownIndex(null);
    if (type === "handyman") setTab("services");
  };

  const closeDetails = () => {
    setSelectedUser(null);
    setDetailType(null);
  };

  // Helper to render rating stars
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
    <div>
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
      <div className="relative left-[40px] top-[294px] w-[914px] h-[511px] border rounded-[5px] overflow-auto">
        <table
          className="w-full text-left"
          style={{ borderCollapse: "separate", borderSpacing: "0 13px" }}
        >
          <thead className="bg-[#F1F0F0] w-[898px] h-[64px] text-sm font-semibold">
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

          <tbody className="w-[883px] h-[85px] bg-white text-center">
            {data.map((item, idx) => (
              <tr key={idx} className="border bg-[#E1E1E140]">
                <td className="w-[168px] h-[39px] p-6">
                  <div className="flex items-center gap-2 pl-5">
                    <img
                      src={item.image}
                      alt={item.client}
                      className="w-[41px] h-[39px] rounded-full border"
                    />
                    <p className="text-md text-[16px]">{item.client}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{item.task}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.time}</td>
                <td className="px-4 py-2">{item.amount}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    item.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="relative px-4 py-2 cursor-pointer">
                  <Icon
                    icon={dotsVertical}
                    width="24"
                    height="24"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownIndex(dropdownIndex === idx ? null : idx);
                    }}
                  />
                  {dropdownIndex === idx && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-1 bg-white border rounded shadow-lg z-50 w-[180px]"
                    >
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => openDetails(item, "project")}
                      >
                        View Project Details
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => openDetails(item, "handyman")}
                      >
                        View Handyman Details
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Project Details Modal */}
      {selectedUser && detailType === "project" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] max-h-[90vh] overflow-auto">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <img
              src={selectedUser.image}
              alt={selectedUser.client}
              className="w-20 h-20 rounded-full mx-auto border mb-4"
            />
            <p>
              <strong>Client:</strong> {selectedUser.client}
            </p>
            <p>
              <strong>Task:</strong> {selectedUser.task}
            </p>
            <p>
              <strong>Date:</strong> {selectedUser.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedUser.time}
            </p>
            <p>
              <strong>Amount:</strong> {selectedUser.amount}
            </p>
            <p>
              <strong>Status:</strong> {selectedUser.status}
            </p>
            <button
              onClick={closeDetails}
              className="mt-4 px-4 py-2 bg-[#014F8E] text-white rounded hover:opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Handyman Details Modal */}
      {/* Handyman Details Modal */}
      {selectedUser && detailType === "handyman" && (
        <div className=" inset-0 w-[834px] h-[616px] absolute top-[142px] left-[342px] bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            {/* Header */}
            <div
              className="flex items-center p-4 border-b"
              style={{
                position: "absolute",
                width: "702px",
                height: "122px",
                left: "calc(50% - 702px / 2 + 118px)",
                top: "calc(50% - 122px / 2 - 125px)",
                background: "rgba(225, 225, 225, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={selectedUser.handyman.image}
                alt={selectedUser.handyman.name}
                className="w-[76px] h-[76px] rounded-full border mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  {selectedUser.handyman.name}
                </h3>
                <div className="flex mt-1">
                  {renderStars(selectedUser.handyman.rating)}
                </div>
              </div>
            </div>

            {/* Main content flex container */}
            <div className="flex p-4 space-x-8">
              {/* Left column with info */}
              <div className="flex-1 space-y-2 border-r pr-8">
                <p>
                  <strong>Specialization:</strong>{" "}
                  {selectedUser.handyman.specialization.join(", ")}
                </p>
                <p>
                  <strong>Availability:</strong>{" "}
                  {selectedUser.handyman.availabilityDays}
                </p>
                <p>
                  <strong>Hours:</strong>{" "}
                  {selectedUser.handyman.availabilityHours}
                </p>
                <p>
                  <strong>Contact Phone Number:</strong>{" "}
                  {selectedUser.handyman.phone}
                </p>
                <p>
                  <strong>Address:</strong> {selectedUser.handyman.address}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.handyman.email}
                </p>
              </div>

              {/* Right column with tabs */}
              <div className="flex-1 flex flex-col">
                <div className="flex border-b mb-4">
                  <button
                    className={`mr-4 pb-2 ${
                      tab === "services"
                        ? "border-b-2 border-blue-600 font-semibold"
                        : "text-gray-600"
                    }`}
                    onClick={() => setTab("services")}
                  >
                    Services
                  </button>
                  <button
                    className={`pb-2 ${
                      tab === "feedback"
                        ? "border-b-2 border-blue-600 font-semibold"
                        : "text-gray-600"
                    }`}
                    onClick={() => setTab("feedback")}
                  >
                    Feedback
                  </button>
                </div>

                {/* Services Tab */}
                {tab === "services" && (
                  <div className="overflow-auto max-h-[300px]">
                    {selectedUser.handyman.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between border-b py-2 text-gray-700"
                      >
                        <span>{service.name}</span>
                        <span className="font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feedback Tab */}
                {tab === "feedback" && (
                  <div className="overflow-auto max-h-[300px] space-y-4">
                    {feedbacks.map((fb, idx) => (
                      <div key={idx} className="flex gap-4 items-center">
                        <img
                          src={fb.clientImage}
                          alt={fb.clientName}
                          className="w-12 h-12 rounded-full border"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <strong className="mr-2">{fb.clientName}</strong>
                            <div>{renderStars(fb.rating)}</div>
                          </div>
                          <p className="text-gray-600 text-sm">{fb.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeDetails}
                className="px-4 py-2 bg-[#014F8E] text-white rounded hover:opacity-80"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
