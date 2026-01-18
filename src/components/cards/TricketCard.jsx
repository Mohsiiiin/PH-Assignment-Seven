import React from 'react';

const TricketCard = ({trickets, handleTricket}) => {
    
    return (
            <div onClick={()=> handleTricket(trickets)} className="p-5 rounded-xl shadow-xl relative space-y-3">
            <div className='flex justify-between'>
                <h3 className='font-bold text-xl'>{trickets.title}</h3>  

                <button className={`px-4 py-1 rounded-full ${
                trickets.status === "Open" ? "bg-green-500 text-white" :
                trickets.status === "In Progress" ? "bg-yellow-500 text-white" :
                trickets.status === "Resolved" ? "bg-blue-500 text-white" :
                "bg-gray-200 text-black"
                }`}>{trickets.status}</button>
                
            </div>
            
            <p className='text-gray-500'>{trickets.description}</p>

            <div className='flex gap-4 justify-between'>
                <h6>{trickets.id}</h6>

                <h6 className={` font-semibold ${
                trickets.priority === "Low" ? "text-green-500" :
                trickets.priority === "Medium" ? "text-yellow-500" :
                trickets.priority === "High" ? "text-red-500" :
                trickets.priority === "Critical" ? "text-purple-500" :
                "text-gray-400"
                }`}> {trickets.priority}</h6>

                <h6 className='text-gray-500'>{trickets.customer}</h6>
                <h6>{trickets.createdAt}</h6>
            </div>
        </div>
        
    );
};

export default TricketCard;