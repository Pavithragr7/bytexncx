import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function MainNav() {
  return (
    <motion.div 
      className="flex items-center space-x-4 lg:space-x-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-lg shadow-xl backdrop-blur-xl"
      animate={{ opacity: [0, 1], y: [-20, 0] }}
      transition={{ duration: 1 }}
    >
      <Sparkles className="text-yellow-300 animate-pulse" />

      <Link 
        href="/" 
        className="relative text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 ease-in-out hover:text-yellow-300 hover:scale-110"
      >
        Dashboard
        <motion.span 
          className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 scale-x-0 transition-transform duration-300 hover:scale-x-100"
        />
      </Link>

      <motion.div 
        className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-600 to-pink-500 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </motion.div>
  );
}
