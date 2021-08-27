import Reat from 'react';

const Avatar = (props) =>
{
    return (
        <img src={props.src} className={props.className}/>
    )
}

export default Avatar;