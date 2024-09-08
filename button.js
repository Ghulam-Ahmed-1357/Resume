var toggleProfileButton = document.getElementById("toggleProfileButton");
var profileImage = document.getElementById("profileImage");
var isProfileVisible = true;
toggleProfileButton.addEventListener("click", function () {
    if (isProfileVisible) {
        profileImage.style.display = "none"; // Hide the image
        toggleProfileButton.textContent = "View Profile Picture"; // Change button text
    }
    else {
        profileImage.style.display = "block"; // Show the image
        toggleProfileButton.textContent = "Hide Profile Picture"; // Change button text
    }
    isProfileVisible = !isProfileVisible;
});
