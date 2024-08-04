import React from 'react'

const EventCapturing = () => {
  return (
    <div className='parent' >
        <div onClickCapture={()=> console.log('this is parent div')}>
            <button onClick={()=> console.log('this is button')} >Click me to capture event by parent</button>
        </div>
        <div>on Button event trigger event is captured by parent div and flows down to target</div>
    </div>
  )
}

/*console result is 
this is parent div
this is button 

The handleCapture function will execute before any child components’ handlers
when an event occurs within the root component.*/

export default EventCapturing