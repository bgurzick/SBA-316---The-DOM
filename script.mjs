const form = document.getElementById("buildRegistration");
const websiteName = form.elements["websiteName"];
const email = form.elements["email"];
const menuItems = form.elements["menuItems"];
const colorScheme = form.elements["colorScheme"];
const backupEmail = form.elements["backupEmail"];
const myProduct = form.elements["myProduct"]


function validate(evt) {
    const websiteNameVal = validatewebsiteName();
    if (websiteNameVal === false) {
      evt.returnValue = false;
      return false;
    }

    const emailVal = validateEmail();
    if (emailVal === false) {
      evt.returnValue = false;
      return false;
    }

    const menuItemsVal = validatemenuItems();
    if (menuItemsVal === false) {
      evt.returnValue = false;
      return false;
    }

    const colorSchemeVal = validatecolorScheme();
    if (colorSchemeVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const backupEmailVal = validatebackupEmail();
    if (backupEmailVal === false) {
      evt.returnValue = false;
      return false;
    }
  
  
  //what to do here with the menuItems section?
    alert(`websiteName: ${websiteNameVal}
  Email: ${emailVal}
  Country: ${colorSchemeVal}
  Zip Code: ${zipVal}
  menuItems: ...that's a secret.`);
  
    return true;
  }


  // Simple email validation.
// We added a check to make sure the name exists!
// Note that this could also be solved via adding
// the "required" attribute to the HTML, but the
// focus of this activity is DOM events.
function validateEmail() {
    let emailVal = email.value;
  
    if (emailVal === "") {
      alert("Umm... E-MAIL!");
      email.focus();
      return false;
    }
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
  
    return emailVal;
  }
  
  // websiteName Validation
  function validatewebsiteName() {
    if (websiteName.value === "") {
      alert("Please provide a websiteName!");
      websiteName.focus();
      return false;
    }
    return websiteName.value;
  }
  
  // menuItems Validation
  function validatemenuItems() {
    if (menuItems.value === "") {
      alert("Please provide a menuItems.");
      menuItems.focus();
      return false;
    }
    return menuItems.value;
  }
  
  // Terms & Conditions Validation
  function validatecolorScheme() {
    if (colorScheme.value === "") {
      alert("Please accept the Terms & Conditions.");
      colorScheme.focus();
      return false;
    }
    return colorScheme.value;
  }
  
  // Repeat menuItems Validation
  function validatebackupEmail() {
    if (backupEmail.value === "") {
      alert("menuItemsS DO NOT MATCH! OH MY GOD.");
      backupEmail.focus();
      return false;
    }
  ////make this where the menuItemss have to match
    if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
      alert("Zip codes must be in the format #####.");
      zip.focus();
      return false;
    }
  
    return zip.value;
  }