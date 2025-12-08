import { motion } from "framer-motion";
import ScrollingStrap from "./ScrollingStrap";

export default function HeroStrap() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <ScrollingStrap />
    </motion.div>
  );
}
