import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Clock, MapPin, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  description: string;
}

export function InternshipList() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchInternships() {
    setLoading(true);
    const response = await fetch("http://localhost:8000/api/fetchinternships");
    const data = await response.json();
    setInternships(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-end mb-4">
        <Button onClick={fetchInternships} variant="ghost" disabled={loading}>
          <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {internships.map((internship) => (
          <motion.div 
            key={internship.id} 
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="flex flex-col relative overflow-hidden bg-opacity-20 backdrop-blur-lg rounded-xl border border-transparent shadow-lg hover:border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-bold">{internship.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm text-gray-400">
                  <Building2 className="h-4 w-4 text-yellow-400" />
                  {internship.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-col space-y-2 text-gray-300">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-green-400" />
                    {internship.duration}
                  </div>
                  <Badge className="w-fit mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md">
                    {internship.type}
                  </Badge>
                  <p className="mt-2 text-sm">{internship.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <motion.button 
                  className="w-full py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold tracking-wide shadow-lg hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Apply Now 🚀
                </motion.button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
