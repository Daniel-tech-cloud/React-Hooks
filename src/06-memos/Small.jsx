// import { memo } from "react";

// export const Small = memo (({value}) => {
//     console.log('Me volví a redibijar :(');
//   return (
//     <small> {value} </small>
//   )
// })

import React from "react";

export const Small = React.memo (({value}) => {
    console.log('Me volví a redibijar :(');
  return (
    <small> {value} </small>
  )
})


