"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, LogOut, Newspaper } from "lucide-react";
import { motion } from "framer-motion";

export function BasicSidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 bg-opacity-60 backdrop-blur-lg shadow-lg border-r border-gray-800 text-white"
    >
      <div className="flex flex-col h-full">
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-center h-16 bg-gray-950 shadow-md">
          <h1 className="text-xl font-bold tracking-wider text-white">🚀 Dashboard</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            {[
              { href: "/internships", label: "Internships", icon: Briefcase },
              { href: "/blogs", label: "Blogs", icon: Newspaper },
              { href: "/resume", label: "Resume", icon: FileText },
            ].map(({ href, label, icon: Icon }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  className={`flex items-center gap-3 p-3 rounded-md transition-all duration-300 ${
                    pathname === href
                      ? "bg-blue-600 shadow-md shadow-blue-400/50"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <motion.button
            whileHover={{ x: 3, rotate: -1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 w-full p-3 rounded-md text-red-500 hover:bg-gray-700 transition-all"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
