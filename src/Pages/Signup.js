import React, { useState } from 'react'
import Account from '../Components/Account';
import Personal from '../Components/Personal';
import Image from '../Components/Image';
import Finish from '../Components/Finish';

const Signup = () => {
    const [width, setWidth] = useState(25);

    const next = () => {
        if (width < 100) {
            setWidth(width + 25);
        }
    };

    const previous = () => {
        if (width > 25) {
            setWidth(width - 25);
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
                    <Account />
                    <Personal/>
                    <Image/>
                    <Finish/>

                    <div className='mt-10 mb-10 space-y-6'>
                        <button type="submit" className="bg-neutral-200 hover:bg-[#34AC26] focus:outline-none font-bold rounded-lg text-lg w-full px-5 py-2 text-center" onClick={next}>Next</button>
                        <button type="submit" className="bg-neutral-200 hover:bg-[#34AC26] focus:outline-none font-bold rounded-lg text-lg w-full px-5 py-2 text-center" onClick={previous}>Previous</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup