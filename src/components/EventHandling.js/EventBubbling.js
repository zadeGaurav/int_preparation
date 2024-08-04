import React, { useState } from 'react'

const EventBubbling = () => {
  return (
    <div className='parent' onClick={()=> console.log('grandparent clicked')}>
        <div  onClick={()=> console.log('parent clicked')}>
            <button onClick={()=> console.log('button clicked')}>Click me</button>
        </div>
        <div>Click me to bubble event up the tree</div>
    </div>
  )
}
//When you click the button, both the button’s handler and the parent’s handler will execute.
//on clicking the button element click event is bubbling up the tree.

export default EventBubbling




/*Unlike the default (bubbling), event.stopPropagation will prevent the parent element ul
 from showing in the console. Note that the event.stopPropagation method can
  also be used in the capturing phase. */


// const EventBubbling = () => {
//     const [arr] = useState(['bat', 'boll', 'rat', 'cat'])
//     const handleClick = (event) => {
//         event.stopPropagation();
//         console.log('li clicked')
//     }
//   return (
//     <div className='parent'>
//         {arr.map((item) => {
//             return(
//                 <ul onClick={() => console.log('this is parent- ul')}>
//                     <li onClick={handleClick}>{item} </li>
//                 </ul>
//             )
//         })}
//     </div>
//   )
// }

// export default EventBubbling