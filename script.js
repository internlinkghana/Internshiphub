// Profile picture and nav-actions rendering on all pages
function renderNavActions() {
  const navActions = document.getElementById("navActions");
  if (!navActions) return;
  const loggedInType = localStorage.getItem("loggedInType");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  if (loggedInType === "student" && loggedInUser.studentIdPic) {
    navActions.innerHTML = `
      <span style="font-weight:500;">${loggedInUser.name}</span>
      <img src="${loggedInUser.studentIdPic}" alt="Profile Picture" class="profile-pic-nav" title="View Profile" onclick="window.location='dashboard.html'">
      <a href="#" onclick="logout();" class="nav-btn">Logout</a>
    `;
  } else if (loggedInType === "company") {
    let imgHtml = "";
    if (
      loggedInUser.permitFile &&
      loggedInUser.permitFile.startsWith("data:image/")
    ) {
      imgHtml = `<img src="${loggedInUser.permitFile}" alt="Company Logo" class="profile-pic-nav" title="View Profile" onclick="window.location='company-dashboard.html'">`;
    } else {
      imgHtml = `<span class="profile-pic-nav" style="display:inline-flex;align-items:center;justify-content:center;background:#f2f1f9;font-size:1.4em;">🏢</span>`;
    }
    navActions.innerHTML = `
      <span style="font-weight:500;">${loggedInUser.name}</span>
      ${imgHtml}
      <a href="#" onclick="logout();" class="nav-btn">Logout</a>
    `;
  } else {
    navActions.innerHTML = `
      <a href="register.html" class="nav-btn">Register</a>
      <a href="login.html" class="nav-btn nav-btn-outline">Login</a>
    `;
  }
}
document.addEventListener("DOMContentLoaded", renderNavActions);

// --- The rest of your previous script.js remains unchanged ---
// (Paste all the code from the earlier script.js here, below the above block)
[...paste the full main script.js code here from previous step, starting from function logout() ... ]