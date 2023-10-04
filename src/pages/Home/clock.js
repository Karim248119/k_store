import React, { useEffect, useState } from "react";

const Clock = ( { deadline } ) =>
{
    const [ days, setDays ] = useState( 0 );
    const [ hours, setHours ] = useState( 0 );
    const [ minutes, setMinutes ] = useState( 0 );
    const [ seconds, setSeconds ] = useState( 0 );

    const leading0 = ( num ) =>
    {
        return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = ( deadline ) =>
    {
        const time = Date.parse( deadline ) - Date.parse( new Date() );
        if ( time < 0 )
        {
            setDays( 0 );
            setHours( 0 );
            setMinutes( 0 );
            setSeconds( 0 );
        } else
        {
            setDays( Math.floor( time / ( 1000 * 60 * 60 * 24 ) ) );
            setHours( Math.floor( ( time / ( 1000 * 60 * 60 ) ) % 24 ) );
            setMinutes( Math.floor( ( time / 1000 / 60 ) % 60 ) );
            setSeconds( Math.floor( ( time / 1000 ) % 60 ) );
        }
    };

    useEffect( () =>
    {
        setInterval( () => getTimeUntil( deadline ), 1000 );

        return () => getTimeUntil( deadline );
    }, [ deadline ] );

    return (
        <div className=" m-auto text-blue-gray-700 font-bold md:text-3xl text-sm">
            <div className="Clock-days border-t-2 border-gray-400 md:p-3 p-1">{ leading0( days ) } Days</div>
            <div className="Clock-hours border-t-2 border-gray-400 md:p-3 p-1">{ leading0( hours ) } Hours</div>
            <div className="Clock-minutes border-t-2 border-gray-400  md:p-3 p-1">{ leading0( minutes ) } Minutes</div>
            <div className="Clock-seconds border-t-2 border-gray-400 border-b-2 md:p-3 p-1">{ leading0( seconds ) } Seconds</div>
        </div>
    );
};

export default Clock;
