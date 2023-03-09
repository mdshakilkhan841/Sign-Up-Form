import React, { useState } from 'react';
import Account from '../Components/Account';
import Personal from '../Components/Personal';
import Image from '../Components/Image';
import Finish from '../Components/Finish';
import Button from '../Components/Button';
import Header from '../Components/Header';


const Signup = (props) => {
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

    //------ Next Button Function ------//
    const nextStep = () => {

        //------ Blank Field Checking  ------//
        const form = document.querySelector('form');
        if (!form.checkValidity()) {
            return;
        }
        //------ Both password match Checking  ------//
        if (page === 1) {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
        }

        setPage(page + 1);
        if (width < 100) {
            setWidth(width + 25);
        }
        //------ submit button function ------//
        if (page === 3) {
            console.log(formData);
        }
    };

    //------ Previous Button Function ------//
    const prevStep = () => {
        setPage(page - 1);
        if (width > 25) {
            setWidth(width - 25);
        }
    };

    //------ Form Component Display ------//
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

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <div className='container lg:px-96 md:px-24 px-5 pt-10  mx-auto text-center'>
                <Header width={width} />
                <form className='mt-6' onSubmit={handleSubmit}>
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