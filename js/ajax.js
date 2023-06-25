function  contactUsForm() {
    var request = {
        fullName : document.getElementById("fullName").value,
        subject : document.getElementById("subject").value,
        email : document.getElementById("email").value,
        phoneNumber : document.getElementById("phoneNumber").value,
        message : document.getElementById("message").value
    }

    if(!request.fullName){
        alert("Please Enter your Name");
        return;
    }

    if(!request.phoneNumber){
        alert("Please Enter your phone number");
        return;
    }

    if(!request.message){
        alert("Please Enter Some message");
        return;
    }

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        async: false,
        url: '/contactUs',
        data:  JSON.stringify(request),
        success: function (data) {
            document.getElementById("fullName").value = '';
            document.getElementById("subject").value = '';
            document.getElementById("email").value = '';
            document.getElementById("phoneNumber").value = '';
            document.getElementById("message").value = '';
        }
    });

}