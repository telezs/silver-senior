import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="hero-section" className="p-5 text-center bg-image rounded-3">
      <div className="mask ms-md-auto">
        <div className="d-flex justify-content-center align-items-center h-200">
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 2, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-hero">
              <h1 className="mb-3">
                "To care for those who once cared for us is one of the highest
                honors"
              </h1>
              <h4 className="mb-3">Join Silver Senior in our mission</h4>
              <a
                data-mdb-ripple-init
                className="btn btn-hero btn-lg"
                href="/mission"
                role="button"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
