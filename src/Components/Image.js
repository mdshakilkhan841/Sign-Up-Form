import React from 'react'

const Image = ({ imageUpload, setImageUpload }) => {

    return (
        <div>
            <div className='flex justify-between font-semibold text-2xl mb-6'>
                <h1>Image Upload:</h1>
                <h1>Step 3 - 4</h1>
            </div>
            <div className="mb-6">
                <label for="file" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Upload Your Photo: <span className='text-rose-600'>*</span></label>
                <input type="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Id" required
                    onChange={(e) => setImageUpload({ ...imageUpload, image: e.target.files[0] })}
                />
            </div>
            <div className="mb-6">
                <label for="file" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Upload Signature Photo: <span className='text-rose-600'>*</span></label>
                <input type="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Id" required
                    onChange={(e) => setImageUpload({ ...imageUpload, signature: e.target.files[0] })}
                />
            </div>
        </div>
    )
}

export default Image