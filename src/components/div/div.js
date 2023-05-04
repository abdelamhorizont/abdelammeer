import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Div({ children, className }) {
   return (
      <AnimatePresence>
         <motion.div
            className={className}
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: 1200 }}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   )
}
