import React from "react";
import { AnimatePresence, motion } from "framer-motion";


   export const pageTransitions = {
    in:{
      opacity: 1, 
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100"
    }
  }
