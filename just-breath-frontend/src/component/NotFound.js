import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransitions } from "../pageTransition";

const NotFound = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
      className="image-404"
    >
      <div className="text-404">
        <p>404 PAGE NOT FOUND</p>
      </div>
    </motion.div>
  );
};

export default NotFound;
