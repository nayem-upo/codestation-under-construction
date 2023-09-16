// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Subscription = () => {
    const [countdown, setCountdown] = useState({
        days: 35,
        hours: 17,
        minutes: 28,
        seconds: 50,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                let newCountdown = { ...prevCountdown };

                if (newCountdown.seconds > 0) {
                    newCountdown.seconds--;
                } else {
                    if (newCountdown.minutes > 0) {
                        newCountdown.minutes--;
                        newCountdown.seconds = 59;
                    } else {
                        if (newCountdown.hours > 0) {
                            newCountdown.hours--;
                            newCountdown.minutes = 59;
                            newCountdown.seconds = 59;
                        } else {
                            if (newCountdown.days > 0) {
                                newCountdown.days--;
                                newCountdown.hours = 23;
                                newCountdown.minutes = 59;
                                newCountdown.seconds = 59;
                            } else {
                                clearInterval(interval);
                            }
                        }
                    }
                }

                return newCountdown;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex md:px-32 flex-col text-[#5b5b5b] px-5">
            <h1 className="my-10 text-orange-500 font-bold cursor-pointer">Codestation</h1>
            <>
                <p className="text-2xl py-5">
                    Our website is <br />
                    <span className="font-semibold">Coming Soon</span>, follow us for <br />
                    update now!
                </p>
                <p className="font-semibold md:hidden">Will be live:</p>
                <p className="flex gap-2 pb-4 md:hidden">
                    <span className="">Days: {countdown.days}</span>
                    <span className="">Hours: {countdown.hours}</span>
                    <span className="">Minutes: {countdown.minutes}</span>
                    <span className="">Seconds: {countdown.seconds}</span>
                </p>
                <div className="flex flex-col gap-2 md:w-[350px]">
                    <input
                        name="name"
                        placeholder="Your Name"
                        id="name"
                        type="text"
                        className="bg-white pr-10 shadow appearance-none border-2 border-orange-100 rounded py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                    <input
                        name="password"
                        placeholder="Your Email"
                        id="password"
                        type="text"
                        className="bg-white pr-10 shadow appearance-none border-2 border-orange-100 rounded py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                    <button className="transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Subscribe
                    </button>
                    <p className="text-sm text-[#7d7d7d]">And don’t worry, we hate spam too! You can unsubscribe at any time.</p>
                </div>
                <div className="flex gap-2 items-center my-4">
                    <button className="bg-blue-500 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-blue-600 hover:text-gray-100 transition duration-300">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </button>

                    <button className="bg-blue-400 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-blue-500 hover:text-gray-100 transition duration-300">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                    </button>

                    <button className="bg-red-600 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-red-700 hover:text-gray-100 transition duration-300">
                        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 01 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 01 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 01 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 01 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                    </button>
                </div>
            </>
        </div>
    );
};

export default Subscription;
