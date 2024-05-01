// var images = document.querySelectorAll('.tickets img');

// // Loop through each image element
// images.forEach(function(image) {
//     // Get the corresponding info element based on the image id
//     var infoId = 'info' + image.id.slice(3); // Extract the number from the image id
//     var info = document.getElementById(infoId);

//     // Add event listener for mouseover event
//     image.addEventListener('mouseover', function() {
//         // Show the corresponding info element
//         info.style.display = 'block';
//     });

//     // Add event listener for mouseout event
//     image.addEventListener('mouseout', function() {
//         // Hide the corresponding info element
//         info.style.display = 'none';
//     });
// });

for (let i=1; i>4; i++){
    let number = i;
    document.getElementById(`img${number}`).addEventListener("mouseover", function(){
        console.log("Test");

    });
}