import React from 'react';

function Hello({ color, name, isSpecial }){
return (

<div style={{color}}>
    {isSpecial && '스페셜하다!'}
    {}
    안녕하세요{name}</div> 

    );
}

Hello.defaultProps = {
    name: '이름없음'
}



export default Hello;