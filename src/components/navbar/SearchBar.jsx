import React from 'react'
import { Input } from '../ui/input'

function SearchBar() {
    return (
        <>
            <div className='sm:w-1/3 w-full'>
                <Input 
                    type='text'
                    placeholder='search...'
                    className='rounded-2xl pl-6 pb-1'
                />
            </div>
        </>
    )
}

export default SearchBar
