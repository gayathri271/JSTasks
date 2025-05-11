let User = document.getElementById("User");
let UserData = [];

UserData = JSON.parse(localStorage.getItem("userDetails")) || [];
User.addEventListener("click", () => {
  let name = prompt("Enter user Name:").trim();
  let email = prompt("Enter user email: ").trim();

  if (name && email) {
    let userInfo = {
      id: UserData.length + 1,
      Name: name,
      Email: email,
    };
    UserData.push(userInfo);

    console.log(UserData, "after ");
    localStorage.setItem("userDetails", JSON.stringify(UserData));
    window.alert("user added successfully");
  } else {
    window.alert("enter fields");
  }
});
let ShowUsers = document.getElementById("Details");
ShowUsers.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("userDetails")) || [];

  if (data.length === 0) {
    console.log("No user found");
  } else {
    data.map((user, index) => {
      console.log(`id:${index + 1},name:${user.Name},email:${user.Email}`);
    });
  }
});
let ClearUsers = document.getElementById("Clear");
ClearUsers.addEventListener("click", () => {
  //   if (localStorage.getItem("userDetails")) {
  //   localStorage.removeItem("userDetails");
  //   window.alert("User details removed successfully");
  // } else {
  //   window.alert("No user data found");
  // }
  localStorage.clear();
  window.alert("All users cleared");
});
