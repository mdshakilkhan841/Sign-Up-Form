import React, { useState } from 'react'
import Account from '../Components/Account';
import Personal from '../Components/Personal';
import Image from '../Components/Image';
import Finish from '../Components/Finish';
import Button from '../Components/Button';

const Signup = () => {
    const [width, setWidth] = useState(25);
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        contact: "",
        alternateContact: "",
    });

    const nextStep = () => {
        setPage(page + 1);
        if (width < 100) {
            setWidth(width + 25);
        }
    };

    const prevStep = () => {
        setPage(page - 1);
        if (width > 25) {
            setWidth(width - 25);
        }
    };

    const pageDisplay = () => {
        if (page === 0) {
            return (<Account formData={formData} setFormData={setFormData} />)
        }
        else if (page === 1) {
            return (<Personal formData={formData} setFormData={setFormData} />)
        }
        else if (page === 2) {
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
                <div>
                    <div className="mt-10 mb-6 h-1 rounded w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-1 bg-[#34AC26] rounded" style={{ width: `${width}%` }}>
                        </div>
                    </div>
                    <div className="mt-10 h-4 rounded w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-4 bg-[#34AC26] rounded loader" style={{ width: `${width}%` }}></div>
                    </div>
                </div>

                <form className='mt-6'>
                    {/* components */}
                    <div>{pageDisplay()}</div>

                    <div className='mt-10 mb-10 space-y-6'>
                        {
                            page < 3 ? <Button onClick={nextStep}>{page === 2 ? 'Submit' : 'Next'}</Button> : null
                        }

                        {
                            page > 0 && page < 3 ? <Button onClick={prevStep}>Previous</Button> : null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup