var uidV, fnameV, mnameV, snameV, genderV, addressV, emailV;

function readFom() {
  uidV = document.getElementById("uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("mname").value;
  snameV = document.getElementById("sname").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  console.log(uidV, fnameV, mnameV, snameV, addressV, genderV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      uid: uidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      gender: genderV,
      address: addressV,
      email: emailV
    });
  alert("Data Inserted"); 
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   uid: uidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      gender: genderV,
      address: addressV,
      email: emailV
    });
  alert("Data Update");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
