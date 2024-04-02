function Operation(form){
    var a="admin@admin.com";
    var b="12345";
    var d=form.inputbox1.value;
    var c=form.inputbox2.value;
    if(a===d && c==b){
        window.alert("Login Successfully");
    }
    else{
        window.alert("Login Failed");
    }
}