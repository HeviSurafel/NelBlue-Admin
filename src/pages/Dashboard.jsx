import React from "react";
import { Icon } from "@iconify/react";
import mailO from "@iconify-icons/mdi/email-outline";
import userIcon from "@iconify-icons/mdi/account"; // Replacing user24 with mdi/account
import rightArrow from "@iconify-icons/icon-park-outline/right";
import notificationIcon from "@iconify-icons/tdesign/notification";
import dollarIcon from "@iconify-icons/mdi/dollar";
import {
  LineChart,
  Line,
  XAxis,
  Area,
  AreaChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import image from "../assets/4c1a900b3b3e49a09cbd22efaee47a0cec00b79a.jpg";
function Dashboard() {
  const data = [
    { day: "Sun", tasks: 500 },
    { day: "Mon", tasks: 1000 },
    { day: "Tue", tasks: 1500 },
    { day: "Wed", tasks: 2000 },
    { day: "Thu", tasks: 1800 },
    { day: "Fri", tasks: 1400 },
    { day: "Sat", tasks: 1600 },
  ];

  return (
    <div className="w-full h-screen">
      <div className="absolute left-[325px] top-[55px] w-[918px] h-[63px] overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[40px]">Dashboard</h2>
            <span className="text-[20px]">See the world from here</span>
          </div>
          <div className="w-[264px] h-[35px] top-[69px] left-[979px]">
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
      <div className="w-[902px] h-[100px] absolute top-[143px] left-[326px]  rounded-[10px] flex gap-[10px]">
        <div className="w-[218px] h-[100px]  rounded-[10px]  flex items-center justify-between px-[18px] py-[28px] border border-[#12121280]/50 ">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[10px] bg-[#014F8E] ">
            <Icon
              icon={dollarIcon}
              className="text-[#ffffff]"
              width="20"
              height="20"
            />
          </div>

          {/* Right side content */}
          <div className="w-[114px] h-[50px] flex flex-col  justify-start ">
            <span className=" text-[25px]  font-semibold w-[114px] h-[20px ">
              $15,000
            </span>
            <span className="w-[84px] h-[20px]  text-gray-500">Revenue</span>
          </div>
        </div>
        <div className="w-[218px] h-[100px]  rounded-[10px]  flex items-center justify-between px-[18px] py-[28px] border border-[#12121280]/50 ">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[10px] bg-[#014F8E] ">
            <Icon
              icon="hugeicons:loading-03"
              className="text-[#ffffff]"
              width="20"
              height="20"
            />
          </div>

          {/* Right side content */}
          <div className="w-[114px] h-[50px] flex flex-col  justify-start ">
            <span className=" text-[25px]  font-semibold w-[114px] h-[20px ">
              278
            </span>
            <span className="w-[84px] h-[20px]  text-gray-500">Ongoing</span>
          </div>
        </div>
        <div className="w-[218px] h-[100px]  rounded-[10px]  flex items-center justify-between px-[18px] py-[28px] border border-[#12121280]/50 ">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[10px] bg-[#014F8E] ">
            <Icon
              icon="mingcute:check-fill"
              className="text-[#ffffff]"
              width="20"
              height="20"
            />
          </div>

          {/* Right side content */}
          <div className="w-[114px] h-[50px] flex flex-col  justify-start ">
            <span className=" text-[25px]  font-semibold w-[114px] h-[20px ">
              150
            </span>
            <span className="w-[84px] h-[20px]  text-gray-500">Completed</span>
          </div>
        </div>
        <div className="w-[218px] h-[100px]  rounded-[10px]  flex items-center justify-between px-[18px] py-[28px] border border-[#12121280]/50 ">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[10px] bg-[#014F8E] ">
            <Icon
              icon="proicons:cancel"
              className="text-[#ffffff]"
              width="20"
              height="20"
            />
          </div>

          {/* Right side content */}
          <div className="w-[114px] h-[50px] flex flex-col  justify-start ">
            <span className=" text-[25px]  font-semibold w-[114px] h-[20px ">
              24
            </span>
            <span className="w-[84px] h-[20px]  text-gray-500">Cancelled</span>
          </div>
        </div>
      </div>
      <div className="w-[903px] h-[304px] absolute top-[268px] left-[326px] flex gap-4">
        {/* Left: Task Progress */}
        <div className="w-[564px] h-[304px] rounded-[10px] border flex flex-col gap-3">
          {/* Header Section */}
          <div className="flex justify-between items-center w-[495px] h-[30px] mx-[35px] my-[12px]">
            <h2 className="font-semibold text-[20px]">Task Progress</h2>
            <div className="flex w-[163.7325439453125px] h-[20px]">
              <span className="border text-[12px] w-[63.49668502807617px] h-[30px] text-center text-[#12121280]/50 font-[400]">
                Daily
              </span>
              <span className="border text-[12px] w-[63.49668502807617px] h-[30px] text-center text-[#12121280]/50 font-[400]">
                Weekly
              </span>
              <span className="border text-[12px] w-[63.49668502807617px] h-[30px] text-center text-[#121212] font-[400]">
                Monthly
              </span>
            </div>
          </div>

          {/* Chart Section */}
          <div className="w-[500px] h-[189px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#67BD8C" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#E1E1E1" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E1E1E1",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#67BD8C"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTasks)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: New User Card */}
        <div className="w-[323px] h-[304px] border border-[#12121280]/50 flex flex-col rounded-[10px] stroke-[121212]/50">
          {/* Title */}
          <div className="flex justify-between py-4 px-4">
            <h2 className="font-semibold ">New User</h2>
            <span>See All</span>
          </div>

          {/* Content */}
          <div className="mx-[16px] my-[10px] ">
            <div className="flex items-center justify-between border rounded-[5px] stroke-[#12121280]/50  p-[10px]">
              {/* Image + Name/Role */}
              <div className="flex items-center">
                <img
                  src={image}
                  alt="User"
                  className="w-[25px] h-[25px]  rounded-[5px]"
                />
                <div className="ml-4 flex flex-col justify-start gap-2">
                  <p className="w-[85px] h-[12px] font-semibold">John Doe</p>
                  <p className="w-[64px] h-[12px] text-[10px] text-[#121212BF]/75">
                    Client
                  </p>
                </div>
              </div>

              {/* Status + Time */}
              <div className="text-right">
                <p className="text-[#319F43]  text-[10px] font-medium">
                  Approved
                </p>
                <p className="text-[8px] text-[#121212]/30">10 min ago</p>
              </div>
            </div>
          </div>
          <div className="mx-[16px] my-[10px] ">
            <div className="flex items-center justify-between border rounded-[5px] stroke-[#12121280]/50 p-[10px]">
              {/* Image + Name/Role */}
              <div className="flex items-center">
                <img
                  src={image}
                  alt="User"
                  className="w-[25px] h-[25px]  rounded-[5px]"
                />
                <div className="ml-4 flex flex-col justify-start gap-2">
                  <p className="w-[85px] h-[12px] font-semibold">John Doe</p>
                  <p className="w-[64px] h-[12px] text-[10px] text-[#121212BF]/75">
                    Client
                  </p>
                </div>
              </div>

              {/* Status + Time */}
              <div className="text-right">
                <p className="text-[#319F43] text-[10px] font-medium">
                  Approved
                </p>
                <p className="text-[8px] text-[#121212]/30">10 min ago</p>
              </div>
            </div>
          </div>
          <div className="mx-[16px] my-[10px] ">
            <div className="flex items-center justify-between border rounded-[5px] stroke-[#12121280]/50 p-[10px]">
              {/* Image + Name/Role */}
              <div className="flex items-center">
                <img
                  src={image}
                  alt="User"
                  className="w-[25px] h-[25px]  rounded-[5px]"
                />
                <div className="ml-4 flex flex-col justify-start gap-2">
                  <p className="w-[85px] h-[12px] font-semibold">John Doe</p>
                  <p className="w-[64px] h-[12px] text-[10px] text-[#121212BF]/75">
                    Client
                  </p>
                </div>
              </div>

              {/* Status + Time */}
              <div className="text-right">
                <p className="text-[#319F43]  text-[10px] font-medium">
                  Approved
                </p>
                <p className="text-[8px] text-[#121212]/30">10 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[900px] h-[251px] left-[325px] top-[597px] border rounded-[6px] overflow-visible">
        {/* Title */}
        <h2 className="text-[20px] font-semibold relative left-[45px] top-[20px]">Project</h2>
        {/* Table */}
        <table className="w-full table-auto text-left border-separate border-spacing-y-3 relative left-0 top-[43px]">
          {/* Table Head */}
          <thead className="bg-[#F5F5F5] h-[64px] text-sm font-semibold">
            <tr>
              <th className="text-center font-semibold text-[14px] w-[56px] h-[21px]">
                Client
              </th>
              <th className="text-center font-semibold text-[14px] w-[42px] h-[21px]">
                Task
              </th>
              <th className="text-center font-semibold text-[14px]">Date</th>
              <th className="text-center font-semibold text-[14px]">Time</th>
              <th className="text-center font-semibold text-[14px]">Amount</th>
              <th className="text-center font-semibold text-[14px]">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="text-sm text-center bg-[#E1E1E1] rounded-md">
              <td className="px-4 py-2 w-2/6">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={image}
                    alt="Jonas Blong"
                    className="w-[32px] h-[32px] rounded-full border"
                  />
                  <div className="text-left flex flex-col">
                    <p className="text-md text-[16px]">Jonas Blong</p>
                    <p className="text-xs text-gray-500">Tesla: Truck20144</p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-2 w-2/6">
                <p className="text-md border-l border-[#023AA2]">Brake Pad Servicing</p>
                <p className="text-md border-l border-[#023AA2]">Gear oil maintenance</p>
              </td>
              <td className="px-4 py-2 w-1/6">25/03/2025</td>
              <td className="px-4 py-2 w-1/6">3PM</td>
              <td className="px-4 py-2 w-1/6">$500</td>
              <td className="px-4 py-2 w-1/6 text-green-600 font-medium">
                Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
