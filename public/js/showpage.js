function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
        case "FOregistration":
            iframe.src = "FOregistration.html";
            break;
        case "registratedFO":
            iframe.src = "registratedFO.html";
            break;
        case "appiontNewFO":
            iframe.src = "appiontNewFO.html";
            break;
        case "FOauth":
            iframe.src = "FOauth.html";
            break;
    }


}
console.log('hello world')