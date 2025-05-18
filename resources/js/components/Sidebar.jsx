import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { LayoutDashboard, LogOutIcon, MapPinHouse, MessageCircleMore, Newspaper, NewspaperIcon, UnfoldVertical } from 'lucide-react';

export default function Sidebar() {
    return (
        <motion.div 
            className="fixed w-[180px] h-full flex flex-col bg-green-800"
            initial={{ x: -180 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="my-6 mx-auto text-white font-bold">
                Travels
            </div>
            <hr className="text-gray-400" />

            <ul className="flex flex-col gap-5 items-start mt-4 px-5">
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/dashboard" className="flex flex-row gap-1.5 items-center w-full">
                        <LayoutDashboard size={17} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/blog" className="flex flex-row gap-1.5 items-center w-full">
                        <Newspaper size={17} />
                        <span>Blog</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/destination" className="flex flex-row gap-1.5 items-center w-full">
                        <MapPinHouse size={17} />
                        <span>Destination</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/message" className="flex flex-row gap-1.5 items-center w-full">
                        <MessageCircleMore size={17} />
                        <span>Message</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/utils" className="flex flex-row gap-1.5 items-center w-full">
                        <UnfoldVertical size={17} />
                        <span>Utils</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/admin/newsletter" className="flex flex-row gap-1.5 items-center w-full">
                        <NewspaperIcon size={17} />
                        <span>NewsLetters</span>
                    </Link>
                </li>
                <li className="text-md text-white flex flex-row gap-1.5 items-center hover:bg-green-700 p-2 rounded w-full">
                    <Link href="/logout" method="post" as="button" className="flex flex-row gap-1.5 items-center w-full">
                        <LogOutIcon size={17} />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}