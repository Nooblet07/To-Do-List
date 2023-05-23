// Double click on a subtask will put a line through indicating it is complete.
function toggleLineOut(element) {
    element.classList.toggle('line-out');
  }

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#addItemForm');
    const itemInput = document.querySelector('#itemInput');
    const myList = document.querySelector('#myList');
    const list = document.querySelector('#list');
    // const wrapper = document.getElementById('wrapper'); // Added to append above h2

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const newItem = document.createElement('li');
        newItem.textContent = itemInput.value;
        
        const timestamp = new Date().toLocaleString(); // Get the current timestamp
        const timestampSpan = document.createElement('span');
        timestampSpan.textContent = timestamp;
        timestampSpan.textContent = ' added on: ' + timestamp;
        timestampSpan.className = 'timestamp';
        newItem.appendChild(timestampSpan);
        newItem.ondblclick = function() {
            toggleLineOut(this);
        };

        list.appendChild(newItem); // Append the new item to the list
        // list.insertBefore(newItem, wrapper.nextSibling); //Append above h2

        itemInput.value = ''; // Clear the input field
        
    });
});