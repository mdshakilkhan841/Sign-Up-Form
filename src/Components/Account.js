import React from 'react'

const Account = () => {
    return (
        <div>
            <div className='flex justify-between font-semibold text-2xl mb-6'>
                <h1>Account Information:</h1>
                <h1>Step 1 - 4</h1>
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Email: <span className='text-rose-600'>*</span></label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Id" required />
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Username: <span className='text-rose-600'>*</span></label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Password: <span className='text-rose-600'>*</span></label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Confirm Password: <span className='text-rose-600'>*</span></label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
            </div>
        </div>
    )
}

export default Account