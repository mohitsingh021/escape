document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0101', 'r0102', 'r0103', 'r0104', 'r0105', 'r0106', 'r0107', 'r0108', 'r0109', 'r0110', 'r0111', 'r0112', 'r0113', 'r0114', 'r0115', 'r0116', 'r0117', 'r0118', 'r0119', 'r0120'];

    // Add a click event listener to the main container to handle clicks on rows
    document.querySelector('.maze').addEventListener('click', function (event) {
        // Check if the clicked element has the class 'rows'
        if (event.target.classList.contains('rows')) {
            const clickedBoxId = event.target.id;

            // Call the function to change the background color to #4a6553
            changeColorToCustom(event.target, '#4a6553');

            // Check if the clicked box ID matches the expected order
            const expectedBoxId = correctOrderQueue.shift();
            if (clickedBoxId === expectedBoxId) {
                // Box clicked in the correct order
                console.log('Correct box clicked:', clickedBoxId);

                // Check if the user has completed the maze
                if (correctOrderQueue.length === 0) {
                    console.log('Congratulations! You have completed the maze!');
                    // You can add further actions or UI updates for completing the maze
                    showModal('Congratulations! You have completed the maze!');
                }
            } else {
                // Box clicked in the wrong order
                console.log('Wrong box clicked. Resetting the maze.');
                // You can add actions to reset the maze or provide feedback to the user
                // resetMaze();
                showModal('Sorry, wrong move. Reset the maze?');
            }
        }
    });

    // Function to change the background color to a custom color
    function changeColorToCustom(element, color) {
        element.style.backgroundColor = color;
    }

    // Function to reset the maze
    function resetMaze() {
        location.reload(); // Reloads the page.
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the message element
    var messageElement = document.getElementById("message");

    // Get the retry button
    var retryButton = document.getElementById("retryButton");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    resetMaze();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetMaze();
    }
    }

    // Function to display the modal with the message
    function showModal(message) {
    messageElement.textContent = message;
    modal.style.display = "block";
    }

    // Add click event listener to retry button
    retryButton.addEventListener("click", function() {
    // Close the modal
    modal.style.display = "none";
    // Add your logic to reset the maze or restart the game here
    resetMaze();
    });

});
