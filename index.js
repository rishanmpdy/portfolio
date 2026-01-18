
  function sendMail() {

    var params = {
      name: document.getElementById("footerName").value,
      email: document.getElementById("footerEmail").value,
      message: document.getElementById("footerMessage").value
    };

    const serviceID = "service_dqqwzkn";
    const templateID = "template_shtp6xt";




    emailjs.send(serviceID, templateID, params)
      .then(function (res) {

        // Clear fields
        document.getElementById("footerName").value = "";
        document.getElementById("footerEmail").value = "";
        document.getElementById("footerMessage").value = "";

        console.log(res);
        alert("Your message sent successfully!");

      })
      .catch(function (err) {
        console.error("FAILED...", err);
        alert("Failed to send message!");
      });
  }

