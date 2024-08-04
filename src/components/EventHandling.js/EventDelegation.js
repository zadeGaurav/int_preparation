import React from 'react'

const EventDelegation = () => {
   const handleClick = (event) => {
        if (event.target.tagName === 'LI') {
          // Handle the click on the list item
          console.log('You clicked: ' + event.target.textContent);
        }
      };
  return (
    <div className='parent'>
      <ul onClick={handleClick}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>making the use of Event bubbling I handled the events in parent i.e. ul </li>
        <li>this component is just printing textContent from li</li>
        <li>Event Delegation Component</li>
      </ul>
    </div>
  )
}

export default EventDelegation

/*We attach the onClick event handler to the <ul> (unordered list) element.
When a list item (<li>) is clicked, the event bubbles up to the parent <ul>.
Inside the handleClick function, we check if the clicked element’s tag name is 
'LI'. If so, we handle the click. */