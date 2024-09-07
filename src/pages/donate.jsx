import React from 'react'
import { motion } from "framer-motion"

export default function Donate() {
  return (
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 2,  }}
    transition={{ duration: 0.5 }}
  >
    <div id ="donation-funct">
        <div className="container-fluid">
            <div className="img-fluid mx-auto" id="img-donate">
                <h1 className="donate-text text-white text-xxl-center">Lets Make A Change!</h1>
            </div>
        </div>
        <div className="container-fluid" id="donation-info">
            <div className="row">
                <div className="col-md-5">
                    <h1>Donation Information</h1>
                </div>
                <div className="col-md-4" id="account-info">
                    <p>Bank: ACB Bank</p>
                    <p>STK: 41727147</p>
                    <p>Ho Dieu Anh</p>
                </div>
                <div className="col-md-1">
                <img src="https://www.imgonline.com.ua/examples/qr-code.png" alt="placeholder qr dont scan" className="donation-qr"/>
                <p className="donate-qr-text">
                scan this qr to donate
                </p>
                </div>
                </div>
        </div>
                <div className="container-fluid" id="donation-amount">
                    <div className="row">
                        <h3>thanks to your contribution, we have raised:</h3>
                        <h1>xxxx VND</h1>
                        <p>your support means everything.</p>
                    </div>
                </div>
                <div className="container-fluid" id="donation-thank">
                    <div id="thank-img">
                        <div className="col-sm-5 thank-text">
                            <h1>Thank You.</h1>
                            <p>In the eyes of the elderly, our donations reflect a simple truth: they are seen, they are loved, and they are never forgotten. We highly appreciate your act of kindness! </p>
                        </div>
                    </div>
                </div>
        </div>
    </motion.div>
  )
}
