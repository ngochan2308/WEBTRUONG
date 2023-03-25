function SendInfo() {
    hoten = $("#txtHoTen").val();
    email = $("#txtEmail").val();
    phone = $("#txtPhone").val();
    donvi = $("#txtDonVi").val();
    // guiden =("#txtGuiDen").val();
    noidung = $("#txtNoiDung").val();
    capt = $("#txtCaptcha").val();

    //check hoten
    if (hoten == ""||hoten==null||hoten==undefined) {
        alert("Vui lòng nhập họ tên! ")
        return;
    }

     //check mail
     if (validateEmail(email) === false || (validateEmail(email) === null) ) {
        alert("Email không hợp lệ!")
        return;
    }

    //check phone
    if (validatePhone(phone) === false || (validatePhone(phone) === null)) {
        alert("Số điện thoại không hợp lệ!")
        return;
    }
  
    //don vi
    if (donvi == ""||donvi==null||donvi==undefined) {
        alert("Vui lòng nhập đơn vị!")
        return;
    }

        //gui den
    // if (guiden == "" || guiden == null || guiden == undefined)
    // {
    //     alert("Vui lòng chọn nơi nhận!")
    //     return;
    // }

    //noi dung
    if (noidung == ""||noidung==null||noidung==undefined) {
        alert("Vui lòng nhập nội dung!")
        return;
    }

    //captcha
    if (capt == ""||capt==null||capt==undefined) {
        alert("Vui lòng nhập mã captcha!")
        return;
    }
    else
    {
      if(capt !="qGphJD")
        {
          alert("Mã captcha không chính xác!")
          return;
        }
    }

        //email
    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };

    // const validatePhone = (phone) => {
    //     return String(phone)
    //         .toLowerCase()
    //         .match(
    //             /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    //         );
    // };
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePhone = (phone) => {
    return String(phone)
        .toLowerCase()
        .match(
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        );
};