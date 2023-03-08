import React, { useState } from 'react';
import Account from '../Components/Account';
import Personal from '../Components/Personal';
import Image from '../Components/Image';
import Finish from '../Components/Finish';
import Button from '../Components/Button';
import { FaCheck, FaUnlock, FaCamera } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';


const Signup = () => {
    const [width, setWidth] = useState(25);
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        contact: "",
        alternateContact: "",
        image: null,
        signature: null
    });


    const nextStep = () => {
        setPage(page + 1);
        if (width < 100) {
            setWidth(width + 25);
        }
        //------ submit button function ------//
        if (page === 3) {
            console.log(formData);
        }
    };

    const prevStep = () => {
        setPage(page - 1);
        if (width > 25) {
            setWidth(width - 25);
        }
    };

    const pageDisplay = () => {
        if (page === 1) {
            return (<Account formData={formData} setFormData={setFormData} />)
        }
        else if (page === 2) {
            return (<Personal formData={formData} setFormData={setFormData} />)
        }
        else if (page === 3) {
            return (<Image formData={formData} setFormData={setFormData} />)
        }
        else {
            return (<Finish />)
        }
    };

    return (
        <div>
            <div className='container lg:px-96 md:px-24 px-5 pt-10  mx-auto text-center'>
                <div>
                    <h1 className='sm:font-medium sm:text-3xl text-2xl font-bold'>SIGN UP YOUR ACCOUNT</h1>
                    <p className=''>Fill all form field to go to next step</p>
                </div>
                <div className=''>
                    <div className="mt-12 mb-6 h-1 rounded w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-1 bg-[#34AC26] rounded relative" style={{ width: `${width}%` }}>
                        </div>
                        <div className='flex justify-around text-neutral-200 dark:text-neutral-600'>
                            <div className='relative -top-6 right-0 left-0'>
                                <div className='flex flex-col items-center  font-semibold space-y-1'>
                                    <div className='flex items-center justify-center rounded-full bg-neutral-200 h-10 w-10 text-center text-xl font-bold'>
                                        <FaUnlock className='text-white' />
                                    </div>
                                    <p className=''>Account</p>
                                </div>
                            </div>
                            <div className='relative -top-6 right-0 left-0'>
                                <div className='flex flex-col items-center  font-semibold space-y-1'>
                                    <div className='flex items-center justify-center rounded-full bg-neutral-200 h-10 w-10 text-center text-xl font-bold'>
                                        <IoPersonSharp className='text-white' />
                                    </div>
                                    <p className=''>Personal</p>
                                </div>
                            </div>
                            <div className='relative -top-6 right-0 left-0'>
                                <div className='flex flex-col items-center font-semibold space-y-1'>
                                    <div className='flex items-center justify-center rounded-full bg-neutral-200 h-10 w-10 text-center text-xl font-bold'>
                                        <FaCamera className='text-white' />
                                    </div>
                                    <p className=''>Image</p>
                                </div>
                            </div>
                            <div className='relative -top-6 right-0 left-0'>
                                <div className='flex flex-col items-center font-semibold space-y-1'>
                                    <div className='flex items-center justify-center rounded-full bg-neutral-200 h-10 w-10 text-center text-xl font-bold'>
                                        <FaCheck className='text-white' />
                                    </div>
                                    <p className=''>Finish</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-16 h-4 rounded w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-4 bg-[#34AC26] rounded loader" style={{ width: `${width}%` }}></div>
                    </div>
                </div>

                <form className='mt-6'>
                    {/* components */}
                    <div>{pageDisplay()}</div>

                    <div className='mt-10 mb-10 space-y-6'>
                        {
                            page < 4 ? <Button onClick={nextStep}>{page === 3 ? 'Submit' : 'Next'}</Button> : null
                        }

                        {
                            page > 1 && page < 4 ? <Button onClick={prevStep}>Previous</Button> : null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup