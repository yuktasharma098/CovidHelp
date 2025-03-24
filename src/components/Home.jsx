import React from 'react'
import Lottie from "react-lottie"
import home from "../Lottie/img2.json"

import About from "../components/About"
import Aware from "../components/Aware"
import Data from "../components/Data"
import Contact from "../components/Contact"

function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: home,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    console.log("home")
    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 col-md-4 d-flex justify-content-center flex-column">
                                    <button type="button" className="btn  mb-2 button1">Stay Home</button>
                                    <h1 className="mainhead">Stay At Home,</h1>
                                    <h1 className="mainhead">Keep You And Your Family Safe</h1>
                                    <button type="button" className="btn btn-outline-primary mt-4 button morebtn"> More Details</button>

                                </div>
                                <div className="col-md-5 col-5  pt-5 pt-lg-0 order-lg-2 order-1 ml-5">
                                    <div className="lottieimage">
                                        <Lottie options={defaultOptions} height={500} width={600} src={home} className="imagel" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Aware />
            <Data />
            <Contact />
        </>
    )
}

export default Home
