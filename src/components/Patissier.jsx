import React from 'react'

function Patissier() {
    return (
        <section className="patissier-part px-[1rem] sm:px-[2rem] grid grid-cols-12 gap-4 mt-36">
            <div className="col-span-12 sm:col-span-6 sm:order-first">
                <div className="patissier-left-box rounded-xl h-full flex items-center justify-center py-32 sm:py-0">
                    <img src={require("../images/patissier-image.png")} alt="" className="w-72 sm:w-96" />
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 order-first sm:order-last relative">
                <div className="patissier-right-box px-4 py-[5rem] sm:py-[2rem] h-full rounded-xl">
                    <h2 className='font-sans font-semibold text-white text-6xl w-48 uppercase m-0'>patissier PEINTRE ux ui ETC..</h2>
                    <img src={require("../images/patissier-bg-purple-1.png")} alt="" className='absolute top-[5.6rem] sm:top-[1.6rem] left-[2.5rem] w-[9rem] sm:w-[11rem]' />
                    <img src={require("../images/patissier-bg-purple-2.png")} alt="" className='absolute top-[9.6rem] sm:top-[4.3rem] left-[1.7rem] w-[9rem] sm:w-[11rem]' />
                    <img src={require("../images/patissier-bg-purple-3.png")} alt="" className='absolute top-[14.5rem] sm:top-[10.8rem] left-[1rem] w-[9rem] sm:w-[11rem]' />
                </div>
                <a target="_blank" rel="noreferrer" href="https://jobmi.fr/test" className="patissier-right-box-bottom absolute bottom-6 right-6 flex items-center gap-3 no-underline">
                    <div className="info">
                        <h5 className='font-sans text-white text-base font-semibold m-0'>N’HÉSITEZ PLUS !</h5>
                        <h6 className='font-sans text-white text-sm font-normal m-0'>Faites le test</h6>
                    </div>
                    <img
                        src={require("../images/accordion-arrow.png")}
                        alt="arrow-icon"
                        className="w-7"
                    />
                </a>
            </div>
        </section>
    )
}

export default Patissier
