import React from "react";
import { Icon } from "@iconify/react";
import mailO from "@iconify-icons/mdi/email-outline";
import userIcon from "@iconify-icons/mdi/account";
import rightArrow from "@iconify-icons/icon-park-outline/right";
import notificationIcon from "@iconify-icons/tdesign/notification";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Bar, BarChart, ComposedChart } from "recharts";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, ChartTooltip, Legend);

function Analaytics() {
  const data = [
    { day: "Sun", tasks: 500 },
    { day: "Mon", tasks: 1000 },
    { day: "Tue", tasks: 1500 },
    { day: "Wed", tasks: 2000 },
    { day: "Thu", tasks: 1800 },
    { day: "Fri", tasks: 1400 },
    { day: "Sat", tasks: 1600 },
  ];

  const revenue = 356000;
  const withdrawal = 204000;

  const chartData = {
    labels: ["Revenue", "Withdrawal"],
    datasets: [
      {
        data: [revenue, withdrawal],
        backgroundColor: ["#7800F8", "#E33629"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <div className="absolute left-[325px] top-[55px] w-[918px] h-[49px] overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[40px]">Analytics</h2>
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

      {/* Main Content */}
      <div className="w-[903px] h-[304px] absolute top-[170px] left-[326px] flex gap-2">
        {/* Left: Task Progress */}
        <div className="w-[564px] h-[304px] rounded-[10px] border flex flex-col gap-3">
          <div className="flex justify-between items-center w-[495px] h-[30px] mx-[35px] my-[12px]">
            <h2 className="font-semibold text-[20px]">Task Progress</h2>
            <div className="flex">
              <span className="border text-[12px] w-[63px] h-[30px] text-center text-[#12121280]/50 font-[400]">
                Daily
              </span>
              <span className="border text-[12px] w-[63px] h-[30px] text-center text-[#12121280]/50 font-[400]">
                Weekly
              </span>
              <span className="border text-[12px] w-[63px] h-[30px] text-center text-[#121212] font-[400]">
                Monthly
              </span>
            </div>
          </div>

          <div className="w-[500px] h-[189px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#014F8E"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Combined Revenue & Withdrawal Chart */}
        <div className="w-[323px] h-[304px] border border-[#12121280]/50 ">
          <h2 className="w-[94px] h-[20px] relative top-[24px] left-[33px] ">
            Revenue
          </h2>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-[160px] h-[160px] relative">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-lg font-bold">
                  ${(revenue + withdrawal) / 1000}k
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start gap-2">
              <div className="w-[200px] h-[48px] flex items-center gap-4">
                {/* Deposit */}
                <div className="w-[89px] h-[48px] flex flex-col justify-center items-center p-4 bg-[#61B1F114]">
                  <span className="text-[14px] font-semibold">$365k</span>
                  <span className="flex items-center gap-1">
                    <span className="text-lg leading-none">•</span> Deposit
                  </span>
                </div>

                {/* Withdraw */}
                <div className="w-[89px] h-[48px] flex flex-col justify-center items-center p-4 bg-[#61B1F114]">
                  <span className="text-[14px] font-semibold text-[#221F20]">
                    $204k
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-lg leading-none">•</span> Withdraw
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Users Line + Bar Chart */}
      <div className="w-[903px] h-[304px] rounded-[10px] absolute top-[528px] left-[325px] border ">
        <div className="flex justify-between items-center px-[50px] py-[30px]">
          <h2 className="font-semibold  text-[20px] ">Users</h2>
          <span className="flex space-x-6">
            <span className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#014F8E]"></span>
              <span>Professional</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-[#E33629]"></span>
              <span>Client</span>
            </span>
          </span>
        </div>

        <ResponsiveContainer
          width="100%"
          height={163.00337437109013}
          className="absolute top-[98px]"
        >
          <BarChart
            data={[
              { day: "Sun", professional: 2000, client: 1500 },
              { day: "Mon", professional: 1500, client: 1000 },
              { day: "Tue", professional: 1000, client: 500 },
              { day: "Wed", professional: 500, client: 0 },
              { day: "Thu", professional: 1200, client: 800 },
              { day: "Fri", professional: 1700, client: 900 },
              { day: "Sat", professional: 1400, client: 600 },
            ]}
            barSize={20}
            className="w-[693px] h-[163px] rounded-br-[40px] rounded-bl-[40px]"
          >
            <CartesianGrid />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="professional"
              fill="#014F8E" // updated to blue
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="client"
              fill="#E33629" // updated to red
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analaytics;
