import React from 'react'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { GiOpenGate } from "react-icons/gi";
import * as RiIcons from 'react-icons/ri'
import * as TablerIcons from "react-icons/tb";
import * as RadixIcons from 'react-icons/rx'
import * as SimpleIcons from 'react-icons/si'
import { FcLeave, FcDepartment } from "react-icons/fc";
// import UserManagement from '../pages/UserManagement';
// import Home from '../pages/Home';
// UserManagement
// Home


export const Sidebardata = [
    {
        title: 'Homepages',
        path: '/',
        icon: <AiIcons.AiFillHome/>,

    },
    {
        title: 'Reports',
        path: '/',
        icon: <TablerIcons.TbReportAnalytics/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Dashboard',
                path: '/Dashboard',
                icon: < RadixIcons.RxDashboard/>,
            },
            {
                title: 'Report',
                path: '/Reports/Report',
                icon: <TablerIcons.TbReport/>,
            }
        ]
    },
    {
        title: 'Forms',
        path: '/',
        icon: <SimpleIcons.SiFormstack/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Vehicle Request Form',
                path: '/Forms/VRF',
                icon: < AiIcons.AiFillCar/>,
            },
            {
                title: 'Leave Form',
                path: '/Forms/Lf',
                icon: <FcLeave/>,
            },
            {
                title: 'Gate Pass Form',
                path: '/Forms/GPF',
                icon: <GiOpenGate/>,
            }
        ]
    },
    {
        title: 'Maintenance',
        path: '/',
        icon: <SimpleIcons.SiFormstack/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Department',
                path: '/Forms/VRF',
                icon: < FcDepartment/>,
            },
            {
                title: 'Position',
                path: '/Forms/Lf',
                icon: <FcLeave/>,
            },
            {
                title: 'Employees',
                path: '/Forms/GPF',
                icon: <GiOpenGate/>,
            },
            {
                title: 'User Management',
                path: '/UserManagement',
                icon: <GiOpenGate/>,
            }
        ]
    }
]