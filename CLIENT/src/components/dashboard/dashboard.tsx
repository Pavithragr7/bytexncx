"use client"

import { useState } from "react";
import { UserNav } from "@/components/dashboard/user-nav";
import { MainNav } from "@/components/dashboard/main-nav";
import { InternshipList } from "@/components/dashboard/internship-list";
import { BasicSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Search } from "@/components/dashboard/search";
import { Button } from "@/components/ui/button";
import { Filter, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Sidebar with Smooth Animation */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-950 shadow-lg transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <BasicSidebar />
      </motion.div>

      <div className="flex-1 flex flex-col transition-all duration-300">
        
        {/* Header with Glow Effect */}
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-700 bg-opacity-40 backdrop-blur-lg px-6 shadow-lg">
          <Button
            variant="outline"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-gray-100 tracking-wide">🚀 Internships</h1>
            <Button
              variant="outline"
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white"
            >
              <Filter className="h-5 w-5" />
              Filter
            </Button>
          </div>

          {/* Animated Filter Panel */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-6 p-6 rounded-xl bg-gray-850 shadow-lg border border-gray-700"
              >
                <p className="text-gray-400">🔍 Filter options will go here...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Internship List */}
          <InternshipList />
        </main>
      </div>
    </div>
  );
}
