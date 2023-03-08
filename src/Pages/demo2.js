import React, { useState } from 'react'
import Account from '../Components/Account';
import Personal from '../Components/Personal';
import Image from '../Components/Image';
import Finish from '../Components/Finish';
import Button from '../Components/Button';

const Signup = () => {

    const [step, setStep] = useState(1);
    const [width, setWidth] = useState(25);
    const [formData, setFormData] = useState({});

    const nextStep = () => {
        setStep(step + 1);
        if (width < 100) {
            setWidth(width + 25);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
        if (width > 25) {
            setWidth(width - 25);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submitForm = () => {
        console.log('Form submitted'); // you can add form submission logic here
        console.log(formData); // Log form data in JSON format
        setStep(4);
        setWidth(100);

    }

    const updateFormData = (data) => {
        setFormData({ ...formData, ...data });
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

                <form className='mt-6' onSubmit={handleSubmit}>
                    {/* ------------------components------------------------- */}
                    {step === 1 && <Account />}
                    {step === 2 && <Personal />}
                    {step === 3 && <Image />}
                    {step === 4 && <Finish />}

                    {/* ------------------Button Section------------------- */}
                    <div className='mt-10 mb-10 space-y-6'>
                        {step === 1 && (
                            <Button name='Next' onClick={nextStep} />
                        )}
                        {step === 2 && (
                            <>
                                <Button name='Next' onClick={nextStep} />
                                <Button name='Previous' onClick={prevStep} />
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <Button name='Submit' onClick={submitForm} />
                                <Button name='Previous' onClick={prevStep} />
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
