import React, { useState } from 'react';

function DatePick() {
    const [date,setDate] = useState();

    console.log("Date", date);
    return (
        <>
        {/* <h1>{date}</h1> */}
        <input type="date" onChange={e=>setDate(e.target.value)} />
        </>
    );
}
export default DatePick;