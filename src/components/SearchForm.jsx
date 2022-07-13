import React from 'react'

const searchForm = () => {
    return (
        <form className='flex gap-2'>
            <input
                required
                className='shadow-sm appearance-none
                  border border-gray-400 hover:border-gray-900 rounded
                  w-full p-2
                  text-gray-700 leading-tight
                  focus:outline-1 focus:outline-gray-900'
                id='todo-input'
                type="text"
                placeholder='Search by name'
                maxLength='75'
            // value={description}
            // onChange={event => setDescription(event.target.value)}
            />

            <input
                required
                className='shadow-sm appearance-none
                  border border-gray-400 hover:border-gray-900 rounded
                  w-full p-2
                  text-gray-700 leading-tight
                  focus:outline-1 focus:outline-gray-900'
                id='todo-input'
                type="text"
                placeholder='Search by genre'
                maxLength='75'
            // value={description}
            // onChange={event => setDescription(event.target.value)}
            />

            <button
                className='bg-gray-500 hover:bg-gray-700
                  text-white font-bold
                  py-2 px-4 rounded
                  focus:outline-1 focus:outline-gray-900 focus:bg-gray-700'
                type='submit'
            // onClick={event => handleAdd(event)}
            >
                Search
            </button>
        </form>
    )
}

export default searchForm