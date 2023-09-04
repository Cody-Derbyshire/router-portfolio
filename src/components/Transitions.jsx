import { motion } from "framer-motion";
const animationConfiguration = {
  initial: { x: -100 },
  animate: { x: 0 },
  exit: { x: -100 },
};
const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 500 }}
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
