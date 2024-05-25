document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("buildRegistration");
  const websiteName = form.elements["websiteName"];
  const websiteType = form.elements["websiteType"];
  const header = document.querySelector('h1');

  // live update of the webpage title / header content
  function updateTitle() {
      document.title = websiteName.value || "One Page DOM BOM Doozy";
      updateHeader();
  }

  // live update of the header content based on website name user input (OR default header)
  function updateHeader() {
      header.textContent = websiteName.value || "My Webpage";
  }

  // live update to the background color based on website type user input (OR default color scheme)
  function updateBackgroundColor() {
      let backgroundColor;
      switch (websiteType.value) {
          case "portfolio":
            // three shades of yellow
              backgroundColor = ["#FFFFCC", "#FFFF99", "#FFFF66"]; 
              break;
          case "blog":
            // three shades of grey
              backgroundColor = ["#CCCCCC", "#999999", "#666666"]; 
              break;
          case "ecommerce":
            // three shades of white
              backgroundColor = ["#FFFFFF", "#F2F2F2", "#E5E5E5"]; 
              break;
          default:
            // default blue/green color scheme
              backgroundColor = "#f125c5"; 
              break;
      }
      document.body.style.background = `linear-gradient(to right, ${backgroundColor.join(',')})`;
  }

// adding a useless button to meet the requirement of "appendChild" - with more time, could make it a useful button
function addNewElement() {
  const uselessButton = document.createElement('button');
  uselessButton.textContent = 'Wow, a new button!';
  uselessButton.addEventListener('click', function() {
      alert("Consider this button 'clicked', bro!");
  });
  document.querySelector('.form-container').appendChild(uselessButton);
}

  // making sure the backup email is different from the first email
  function validateBackupEmail() {
    const backupEmailInput = backupEmail;
    const backupEmailValue = backupEmailInput.value.trim(); 
    const primaryEmailValue = email.value.trim(); 

    if (backupEmailValue === primaryEmailValue) {
        alert("Dude, your backup email needs to be different. You can't use the same email!");
        return false; 
    }
    return true;
}

  // making the title and header change upon user input
  websiteName.addEventListener('keyup', updateTitle);

  // making the background color change
  websiteType.forEach(function(input) {
      input.addEventListener('change', updateBackgroundColor);
  });

  // new element call
  addNewElement();

  // update title/background color call
  updateTitle();
  updateBackgroundColor();
});
