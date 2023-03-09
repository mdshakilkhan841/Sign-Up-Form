import React from 'react'

const Personal = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='flex justify-between font-semibold text-2xl mb-6'>
                <h1>Personal Information:</h1>
                <h1>Step 2 - 4</h1>
            </div>
            <div className="mb-6">
                <label for="firstName" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">First Name: <span className='text-rose-600'>*</span></label>
                <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label for="lastName" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Last Name: <span className='text-rose-600'>*</span></label>
                <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label for="number" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Contact No.: <span className='text-rose-600'>*</span></label>
                <input type="tel" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact No." required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label for="Alternate Contact No." className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Alternate Contact No.: <span className='text-rose-600'>*</span></label>
                <input type="tel" id="alt-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alternate Contact No." required
                    value={formData.alternateContact}
                    onChange={(e) => setFormData({ ...formData, alternateContact: e.target.value })}
                />
            </div>
        </div>
    )
}

export default Personal