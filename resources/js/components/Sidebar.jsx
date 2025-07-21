import React from 'react';
import { motion } from 'framer-motion';
import { Link, useForm } from '@inertiajs/react';
import { LayoutDashboard, LogOutIcon, MapPinHouse, MessageCircleMore, Newspaper, NewspaperIcon, UnfoldVertical } from 'lucide-react';

export default function Sidebar() {
    const { post } = useForm();
    const handleLogout = () => {
        post("/auth/logout");
    };

    const menuItems = [
        { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/admin/dashboard" },
        { icon: <Newspaper size={18} />, label: "Blog", href: "/admin/blog" },
        { icon: <MapPinHouse size={18} />, label: "Destination", href: "/admin/destination" },
        { icon: <MessageCircleMore size={18} />, label: "Message", href: "/admin/message" },
        { icon: <UnfoldVertical size={18} />, label: "Utils", href: "/admin/utils" },
        { icon: <NewspaperIcon size={18} />, label: "NewsLetters", href: "/admin/newsletter" },
    ];

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.div 
            className="fixed w-[220px] h-full flex flex-col bg-gradient-to-b from-green-800 to-green-900 shadow-xl"
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <motion.div 
                className="my-6 mx-auto text-white font-bold text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Travels
            </motion.div>
            
            <hr className="border-green-600 mx-4" />

            <motion.ul 
                className="flex flex-col gap-2 items-start mt-6 px-4"
                initial="closed"
                animate="open"
                transition={{ staggerChildren: 0.1 }}
            >
                {menuItems.map((item, index) => (
                    <motion.li 
                        key={index}
                        variants={itemVariants}
                        className="w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link 
                            href={item.href} 
                            className="text-white flex flex-row gap-3 items-center p-3 rounded-lg transition-all hover:bg-green-700 hover:shadow-md w-full"
                        >
                            <span className="text-green-300">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>

            <div className="mt-auto mb-6 px-4">
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                >
                    <button 
                        onClick={handleLogout}
                        className="text-white flex flex-row gap-3 items-center p-3 rounded-lg transition-all hover:bg-red-600 hover:shadow-md w-full"
                    >
                        <span className="text-red-300"><LogOutIcon size={18} /></span>
                        <span className="font-medium">Logout</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}