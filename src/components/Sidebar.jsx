import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import bxsDashboard from '@iconify-icons/bx/bxs-dashboard';
import chartPie from '@iconify-icons/mdi/chart-pie';
import usersIcon from '@iconify-icons/mdi/users';
import projectFilled from '@iconify-icons/ant-design/project-filled';

function Sidebar() {
  const dashboardLists = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <Icon icon={bxsDashboard} width="24" height="24" />,
      link: '/',
    },
    {
      id: 2,
      name: 'Analytics',
      icon: <Icon icon={chartPie} width="24" height="24" />,
      link: '/analytics',
    },
    {
      id: 3,
      name: 'Users',
      icon: <Icon icon={usersIcon} width="24" height="24" />,
      link: '/users',
    },
    {
      id: 4,
      name: 'Project',
      icon: <Icon icon={projectFilled} width="24" height="24" />,
      link: '/project',
    },
  ];

  return (
    <div className='bg-[#023AA2] w-[253px] h-[832px]'>
      <h2 className='text-[#FFFFFF] text-[20px] absolute top-[61px] left-[44px] w-[126px] h-[47px] font-[inter] font-bold weight-[700]'>
        NELAUTOS
      </h2>
      <div className='absolute top-[150px] left-[41px]'>
        <ul className='flex flex-col gap-[30px]'>
          {dashboardLists.map((item) => (
            <li
              className='text-[#FFFFFF] w-[130px] h-[19px] text-[20px] font-bold weight-[700]'
              key={item.id}
            >
              <Link to={item.link} className='flex justify-start items-center gap-2'>
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
