import React from 'react'
import doctor from "../Lottie/img1.json"
import Lottie from "react-lottie"
function Aware() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: doctor,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    return (
        <>
            <section className="d-flex align-items-center awaresection">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 col-md-4 d-flex justify-content-center flex-column">
                                    <h1 className="text-dark section2heading mb-0">Why is it important that<br /><span className="stay">You Stay Home?</span></h1>
                                    <div className="mt-0">
                                        <Lottie options={defaultOptions} height={400} width={630} src={doctor} /></div>
                                </div>

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 col-md-4 d-flex justify-content-center flex-column">
                                    <ul className="ulit">
                                        <li><span className="numli">01</span><p>Covid-19,which is now a fast growing global pandemic.The number of confirmed cases worldwide has exceeded 10million due to the rapid spreading og the virus.</p></li><hr />
                                        <li><span className="numli">02</span><p>Covid-19,spread very easily ,much easier than many other regular illnesses we deal with on a regular basis.That's waht makes it so dangerous.</p></li><hr />
                                        <li><span className="numli">03</span><p>The best course of the action is to stay at home prevent the spread of the disease as well as hospitals getting overwhelmed with the patients who simply shoudn't be there.</p></li><hr />
                                        <li><span className="numli">04</span><p>As of today,there is no know cure and no approved vaccine for the Covid-19
</p></li><hr />
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aware
