import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0A0A0A] bg-noise z-[9998] flex flex-col items-center justify-center text-off-white select-none"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-logo text-[1.6rem] tracking-[0.3em] text-[#F5F0EB] uppercase font-light"
          >
            BLACK SWAN
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
