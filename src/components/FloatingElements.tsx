import { motion } from "framer-motion";

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className = "" }: FloatingElementsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary floating orb */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary floating orb */}
      <motion.div
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Small floating particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary/20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-accent/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/25"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingElements;
