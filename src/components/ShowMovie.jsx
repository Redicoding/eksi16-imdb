import React from 'react'

const ShowMovie = ({ movie }) => {

    return (
        <div className='bg-white p-7 m-2 rounded-xl'>
            <img src={movie.image} alt={movie.titleOriginal} className="h-80 rounded-lg" />
            <div className='text-sm font-bold my-3 block'>{movie.titleOriginal.substring(0, 28)}</div>
            <hr />
            <div>
                <div className='flex flex-row my-1'>
                    <div className='flex-1'>Rating : </div>
                    <div className='font-bold text-green-500'>{movie.rating}</div>
                </div>
                <hr />
                <div className='flex flex-row my-1'>
                    <div className='flex-1'>Year : </div>
                    <div className='font-bold '>{movie.year}</div>
                </div>
                <hr />
                <div className='flex flex-row my-1'>
                    <div className='flex-1'>Genres : </div>
                    <div className='font-bold '>{movie.genres[0].name}</div>
                </div>
                <hr />
                <div className='flex flex-row my-1'>
                    <div className='flex-1'>Countries : </div>
                    <div className='font-bold '>{movie.countries[0].name}</div>
                </div>
            </div>
        </div>
    )
}

export default ShowMovie