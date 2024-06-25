// src/components/Newsletter.js
import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                setEmail('');
            })
            .catch(error => {
                console.error('Erreur:', error);
                setMessage('Une erreur est survenue. Veuillez réessayer.');
            });
    };


    return (
        <div className="news-letter-part mx-[1rem] sm:mx-[2rem] px-10 sm:px-16 py-10 sm:py-16 grid grid-cols-12 mt-24 rounded-xl">
            <div className="col-span-12 sm:col-span-4">
                <div className="new-letter-info flex flex-col gap-7 sm:gap-10">
                    <h1 className='font-sans font-semibold text-3xl text-white'>Encore un p’tit<br></br> doute ?</h1>
                    <p className='font-sans text-lg text-white w-full sm:w-64'>Inscris-toi à notre newsletter pour ne rater aucune de nos actualités et de <span className='font-semibold'>nos opportunités !</span></p>
                    
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="news-letter-img mt-[1rem] sm:mt-[3rem]">
                    <img src={require("../images/new-letter-image.png")} alt="" className='w-36 sm:w-80' />
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <form className="input-field relative mt-[6rem] sm:mt-[8rem]" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adresse mail"
                        className="px-4 py-3 rounded-xl w-full text-xl bg-white"
                    />
                    <button type="submit" className='absolute top-3 right-5'><img src={require("../images/new-letter-arrow-icon.png")} alt="" /></button>
                </form>
            </div>
            {message && (
                <div className="col-span-12 text-center mt-4">
                    <p className='text-white'>{message}</p>
                </div>
            )}
        </div>
    );
}

export default Newsletter;