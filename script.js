function validate() {

    let result = '';
    if (document.myForm.project.value == "") {
        result = 'project Cannot Be Empty';
        document.getElementById("comment").innerHTML = result;
        document.myForm.project.focus();
        return false;
    }

    if (document.myForm.Email.value == "") {
        result = 'Email Cannot Be Empty';
        document.getElementById("comment").innerHTML = result;
        document.myForm.email.focus();
        return false;
    }
    var EmailId = document.myForm.Email.value;
    let atposn = EmailId.indexOf("@");   
    let dotposn = EmailId.lastIndexOf(".");


    if (atposn < 1 || dotposn - atposn < 2) {
        result = 'Enter Valid Email';
        document.getElementById("comment").innerHTML = result;
        document.myForm.Email.focus();
        return false;
    }


    if (document.myForm.wordsproject.value == "") {
        result = 'wordsproject Cannot Be Empty';
        document.getElementById("comment").innerHTML = result;
        document.myForm.wordsproject.focus();
        return false;
    }

    if (document.myForm.wordsproject.value == "") {
        result = 'wordsproject Cannot Be Empty';
        document.getElementById("comment").innerHTML = result;
        document.myForm.wordsproject.focus();
        return false;
    }


    if(document.myForm.Telegram.value == "") {
        result = 'Telegram name Cannot Be Empty';
        document.getElementById("comment").innerHTML = result;
        document.myForm.Telegram.focus();
        return false;
    }


else
    return (true);


}


