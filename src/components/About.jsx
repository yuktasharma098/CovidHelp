import React from 'react'
import Virus from "../Lottie/Virus.json"
import Lottie from "react-lottie"
function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Virus,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    return (
        <section className="d-flex align-items-center flex-column">


            <button type="button" className="btn  mt-5 mb-5 button1 text-center ">About Corona</button>

            <div className="container-fluid">

                <div className="row">
                    <div className="col-12 mx-auto">

                        <h1 className="abouthead text-center">Coranavirus Disease(Covid-19)</h1>
                        <h1 className="abouthead mt-0 text-center">Outbreak Situation</h1>
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 col-md-4 d-flex justify-content-center flex-column">
                                <Lottie options={defaultOptions} height={400} width={500} src={Virus} />
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  ">
                                <h1 className="overview text-center mt-4 ">Overview</h1>
                                <p className="mt-3">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                                <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
                                <li className="paralist ">  Avoid touching your face.</li>
                                <li className="paralist">  Cover your mouth and nose when coughing.</li>
                                <li className="paralist">  Stay home if you feel unwell.</li>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>


    )
}

export default About
