import React, {use} from 'react';
import Banner from './Banner';
import TricketCard from './cards/TricketCard';
import { useState } from 'react';
import TricketStatusCard from './cards/TricketStatusCard';

const TicketContainer = ({ promise }) => {
  const data = use (promise);
  const [trickets, setTricket] = useState(data);

  const [tricketStatus, setTricketStatus] = useState([]);

  const [resolvedTask, setResolvedTask] = useState([]);

  const handleResolved=(tricket)=>{
    const newResolveTask=[...resolvedTask, tricket];
    setResolvedTask(newResolveTask);

    const remaining = tricketStatus.filter(item=> item.title !== tricket.title);
    setTricketStatus(remaining);

    const remainingTricket = trickets.filter((item)=> item.id !== tricket.id )
    setTricket(remainingTricket)

  }
  

  const handleTricket=(trickets)=>{
    const newTricketStatus= [...tricketStatus, trickets];
    setTricketStatus(newTricketStatus);
    };
 

    return (
        <div>
            <Banner tricketsStatusTotal={tricketStatus.length} tricketsTotal={trickets.length}
            resolveTotal={resolvedTask.length}
            ></Banner>

        <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>

        <div className='lg:col-span-7'>
            <h2 className='font-bold text-3xl'>Customer Tickets</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                trickets.map(trickets => 
                <TricketCard handleTricket={handleTricket} key={trickets.id} trickets={trickets}></TricketCard>)
            }
        </div>
        </div>

        <div className='lg:col-span-5 space-y-5'>
            <h2 className='font-bold text-3xl'>Task Status</h2>
            <div className='shadow p-10 space-y-5 text-center'>
                {
                    tricketStatus.map(trickets => <TricketStatusCard handleResolved={handleResolved} key={trickets.id} trickets={trickets}></TricketStatusCard>)
                }
            </div>

            <h2 className='font-bold text-3xl'>Resolved Task</h2>
            <div className='shadow p-10 space-y-5 text-center'>{resolvedTask.map(trickets=><h3>{trickets.title}</h3>)}</div>

        </div>

        </section>

        </div>
    );
};

export default TicketContainer;