import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Search() {
  const [placeholderText, setPlaceholderText] = useState("");
  const text = "Search..."; // Typing animation text

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPlaceholderText((prev) => text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-sm p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl shadow-2xl"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="relative w-full bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-2">
        <SearchIcon className="absolute left-2.5 top-3 h-5 w-5 text-pink-400 drop-shadow-md" />
        <Input
          type="search"
          placeholder={placeholderText}
          className="w-full pl-10 py-2 text-white bg-transparent border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>
    </motion.div>
  );
}
