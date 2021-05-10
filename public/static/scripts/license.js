(function() {
  document.getElementById("submit_btn").addEventListener("click", send);

  //-----------------------------------------------------------------------------
  async function send() {
    var email = document.getElementById("email").value;
    var rcr = grecaptcha.getResponse();
    if ("" == rcr && true) {
      document.getElementById("error_message").innerHTML =
        "Confirm you're not a robot";
    } else {
      let url =
        "https://cors-anywhere.herokuapp.com/https://egwtbgi9yd.execute-api.eu-west-1.amazonaws.com/prod/retrievepreviouslypurchasedlicenses";
      if ("" !== email && validateEmail(email)) {
        url += "?email_address=" + email;
      } else {
        document.getElementById("error_message").innerHTML =
          "Your email is incorrect";
        return;
      }
      url += "&rcr=" + rcr;
      var h = {};
      n = 1;
      m = 1;
      for (var i = 2; i < 10; i++) {
        n *= i;
        m += n;
      }
      h["f-" + n] = "f-" + m;
      var local = false; // false for AWS cloud
      document.getElementById("form").style.display = "none";
      document.getElementById("email_sended").style.display = "block";
      document.querySelector("#email_sended .loading").style.display = "block";
      myXHR(
        h,
        local ? "http://localhost:3000/send" : url
        //: 'https://fwmtvgsyz1.execute-api.eu-west-3.amazonaws.com/prod'
      )
        .then(async function(json_output) {
          document.getElementById("error_message").innerHTML = "";
          document.querySelector("#email_sended .success").style.display =
            "block";
          document.querySelector("#email_sended .loading").style.display =
            "none";
        })
        .catch(async function(err) {
          document.getElementById("error_message").innerHTML = "";
          document.querySelector("#email_sended .error").style.display =
            "block";
          document.querySelector("#email_sended .loading").style.display =
            "none";
        });
    }
  }

  //-----------------------------------------------------------------------------
  function myXHR(headers, endpoint) {
    return new Promise(async function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (null != headers) {
        for (var h in headers) {
          xhr.setRequestHeader(h, headers[h]);
        } // for()
      }
      xhr.onload = function() {
        if (xhr.status != 200) {
          reject(JSON.parse(xhr.responseText));
        }
        var json_output = JSON.parse(xhr.responseText);
        resolve(json_output);
      };
      xhr.onerror = function() {
        reject("error");
      };
      // s = JSON.stringify(json_input);
      // xhr.send(s);
      xhr.send(null);
    });
  } // myXHR

  //-----------------------------------------------------------------------------
  function insert(id, json) {
    document.getElementById(id).innerHTML = JSON.stringify(json, null, 4)
      .replace(/\n/g, "<br>")
      .replace(/ /g, "&nbsp;");
  } // insert()

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  var emailInputs = document.querySelectorAll(".email_input");
  emailInputs = [].slice.call(emailInputs);
  emailInputs.forEach(function(input) {
    input.addEventListener("blur", function(e) {
      var value = e.target.value;
      var inputId = +e.target.id.slice(-1);
      if (validateEmail(value)) {
        if (inputId !== 5) {
          document.getElementById("email_" + (inputId + 1)).style.display =
            "block";
        }
      }
    });
  });
})();
