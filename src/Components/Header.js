import React from 'react';
import { FaCheck, FaUnlock, FaCamera } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const Header = ({width}) => {
    return (
        <div>
            <div>
                <h1 className='sm:font-medium sm:text-3xl text-2xl font-bold'>SIGN UP YOUR ACCOUNT</h1>
                <p className=''>Fill all form field to go to next step</p>
            </div>
            <div className=''>
                <div className="mt-12 mb-6 h-1 rounded w-full bg-neutral-200 dark:bg-neutral-600">
                    <div className="h-1 bg-[#34AC26] rounded relative" style={{ width: `${width}%` }}>
                    </div>
                    <div className='flex justify-around' >
                        <div className='relative -top-6 right-0 left-0' style={ width >= 25 ? { color: '#34AC26' } : { color: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                            <div className='flex flex-col items-center  font-semibold space-y-1'>
                                <div className='flex items-center justify-center rounded-full h-10 w-10 text-center text-xl font-bold' style={ width >= 25 ? { backgroundColor: '#34AC26' } : { backgroundColor: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                                    <FaUnlock className='text-white' />
                                </div>
                                <p className=''>Account</p>
                            </div>
                        </div>
                        <div className='relative -top-6 right-0 left-0' style={ width >= 50 ? { color: '#34AC26' } : { color: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                            <div className='flex flex-col items-center  font-semibold space-y-1'>
                                <div className='flex items-center justify-center rounded-full h-10 w-10 text-center text-xl font-bold' style={ width >= 50 ? { backgroundColor: '#34AC26' } : { backgroundColor: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                                    <IoPersonSharp className='text-white' />
                                </div>
                                <p className=''>Personal</p>
                            </div>
                        </div>
                        <div className='relative -top-6 right-0 left-0' style={ width >= 75 ? { color: '#34AC26' } : { color: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                            <div className='flex flex-col items-center font-semibold space-y-1'>
                                <div className='flex items-center justify-center rounded-full h-10 w-10 text-center text-xl font-bold' style={ width >= 75 ? { backgroundColor: '#34AC26' } : { backgroundColor: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                                    <FaCamera className='text-white' />
                                </div>
                                <p className=''>Image</p>
                            </div>
                        </div>
                        <div className='relative -top-6 right-0 left-0' style={ width === 100 ? { color: '#34AC26' } : { color: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
                            <div className='flex flex-col items-center font-semibold space-y-1'>
                                <div className='flex items-center justify-center rounded-full h-10 w-10 text-center text-xl font-bold' style={ width === 100 ? { backgroundColor: '#34AC26' } : { backgroundColor: 'rgb(229 229 229 / var(--tw-bg-opacity))' }}>
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
        </div>
    )
}

export default Header