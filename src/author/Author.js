// import React from 'react'

// export default function Author(props) {
//   return (
//     <>
//     <td>{props.name}</td>
//     <td>{props.emailAddress}</td>
//         {/* calling the functionality that is mentioned in App.js, and the func needs and ID, so we're passing ID */}
//     {/* we have accses to the id it's always built in every record */}
//     <td><button onClick={() => {props.editView(props._id)}}>Edit</button></td>
//     </>
//   )
// }

import React from 'react'

export default function Author(props) {
  return (
    <>
        <td>{props.name}</td>
        <td>{props.emailAddress}</td>
        <td><button onClick={() => {props.editView(props._id)}}>Edit</button></td>
        <td><button onClick={() => {props.deleteAuthor(props._id)}}>Delete</button></td>
    </>
  )
}