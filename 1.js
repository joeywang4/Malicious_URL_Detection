function a() {
    if (true) {
        alert("！");
        a.bind.call();
        return false;
    }
    else {
        form.submit();
        return true;
    }
}
