const toggleProfileButton = document.getElementById(
  "toggleProfileButton"
) as HTMLButtonElement;
const profileImage = document.getElementById(
  "profileImage"
) as HTMLImageElement;

let isProfileVisible = true;

toggleProfileButton.addEventListener("click", () => {
  if (isProfileVisible) {
    profileImage.style.display = "none"; 
    toggleProfileButton.textContent = "View Profile Picture"; 
  } else {
    profileImage.style.display = "block"; 
    toggleProfileButton.textContent = "Hide Profile Picture"; 
  }

  isProfileVisible = !isProfileVisible;
});
