function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
      case "FO_registration":
        iframe.src = "FO_registration.pug";
        break;
      case "registratedFO":
        iframe.src = "registratedFO.pug";
        break;
      case "appiontNewFO":
        iframe.src = "FO_appoint.pug";
        break;
      case "FOauth":
        iframe.src = "FOauth.pug";
        break;
    }
  }