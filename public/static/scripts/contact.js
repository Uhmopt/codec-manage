(function() {
  var isContactPage = document.getElementById("contact-page");
  if (isContactPage) {
    var attachment = document.getElementById("attachment");
    attachment.addEventListener("change", onAttachmentChanged);
    var popups = document.querySelectorAll(".contact_popup");
    popups = [].slice.call(popups);
    var question_type_selector = document.getElementById(
      "question_type_selector"
    );
    var files = [];
    question_type_selector.addEventListener("change", function(ev) {
      var value = ev.target.value;

      popups.forEach(function(el) {
        el.style.backgroundColor = "white";
        el.style.opacity = "0";
        if (el.id === value + "_popup") {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });

      var popup_id = document.getElementById(value + "_popup");
      popup_id.style.transition = "all 0.5s ease-in-out";
      setTimeout(function() {
        popup_id.style.backgroundColor = "#f0c230";
        popup_id.style.opacity = "1";
        setTimeout(function() {
          popup_id.style.transition = "none";
        }, 500);
      }, 0);
    });
    document.getElementById("submit_btn").addEventListener("click", send);
    function read_attachment(file) {
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onabort = function() {
          resolve(null);
        };
        reader.readAsDataURL(file);
      });
    } // read_attachment()

    //-----------------------------------------------------------------------------
    async function get_attachment_list() {
      var attachment_list = [];
      var n = files.length;

      for (var i = 0; i < n; i++) {
        var file = files[i];
        var data = await read_attachment(file);
        attachment_list.push({
          name: file.name,
          size: file.size,
          type: file.type,
          data: data
        });
      } // for()

      return attachment_list;
    } // get_attachment_list()

    //-----------------------------------------------------------------------------
    function get_attachements_total_size() {
      var total_size = 0;
      var n = files.length;

      for (var i = 0; i < n; i++) {
        var file = files[i];
        total_size += file.size;
      } // for()

      return total_size;
    } // get_attachements_total_size()

    //-----------------------------------------------------------------------------
    function is_attachments_too_big() {
      var size_max = 5000000; // 5Mo
      return get_attachements_total_size() > size_max;
    } // is_attachments_too_big()

    //-----------------------------------------------------------------------------
    async function onAttachmentChanged() {
      var newFiles = [];
      for (var index = 0; index < attachment.files.length; index++) {
        var file = attachment.files[index];
        newFiles.push(file);
        files.push(file);
      }

      var total_size = get_attachements_total_size();
      var attachment_list = await get_attachment_list();

      var format = function(x) {
        if (x < 1000000) return (x * 0.001).toFixed(2) + " Ko";
        else return (x * 0.000001).toFixed(2) + " Mo";
      };
      var size_max = 5000000; // 5Mo
      var size_max_text = format(size_max);
      var total_size_text = format(total_size);

      document.getElementById("attachments_size").innerText =
        attachment_list
          .map(function(el) {
            return el.name;
          })
          .join(" \n") +
        "\n(" +
        total_size_text +
        " / " +
        size_max_text +
        " max.)";
    } // onAttachmentChanged()

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    } // validate if email matches regexp from https://stackoverflow.com/a/46181

    //-----------------------------------------------------------------------------
    async function send() {
      var question_type = document.getElementById("question_type_selector")
        .value;
      var subject = document.getElementById("subject").value;
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var rcr = grecaptcha.getResponse();
      if ("" == question_type) {
        document.getElementById("error_message").innerHTML =
          "Please select a topic";
      } else if (subject == "") {
        document.getElementById("error_message").innerHTML =
          "Subject is required";
      } else if (name == "") {
        document.getElementById("error_message").innerHTML = "Name is required";
      } else if (!validateEmail(email)) {
        document.getElementById("error_message").innerHTML =
          "Invalid email address.";
      } else if (is_attachments_too_big()) {
        document.getElementById("error_message").innerHTML =
          "The maximum attachments size is 5Mo";
      } else if ("" == rcr && true) {
        document.getElementById("error_message").innerHTML =
          "Confirm you're not a robot";
      } else {
        var attachment_list = await get_attachment_list();
        var json_input = {
          rcr: rcr,
          topic: question_type,
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
          attachments: attachment_list.length > 0 ? attachment_list : null
        };
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
        document.querySelector("#email_sended .loading").style.display =
          "block";
        myXHR(
          h,
          local
            ? "http://localhost:3000/send"
            : "https://egwtbgi9yd.execute-api.eu-west-1.amazonaws.com/prod",
          //: 'https://fwmtvgsyz1.execute-api.eu-west-3.amazonaws.com/prod'
          json_input
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
    function myXHR(headers, endpoint, json_input) {
      return new Promise(async function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        if (null != headers) {
          for (var h in headers) {
            xhr.setRequestHeader(h, headers[h]);
          } // for()
        }
        xhr.onload = function() {
          var json_output = JSON.parse(xhr.responseText);
          resolve(json_output);
        };
        xhr.onerror = function() {
          reject("error");
        };
        s = JSON.stringify(json_input);
        xhr.send(s);
      });
    } // myXHR

    //-----------------------------------------------------------------------------
    function insert(id, json) {
      document.getElementById(id).innerHTML = JSON.stringify(json, null, 4)
        .replace(/\n/g, "<br>")
        .replace(/ /g, "&nbsp;");
    } // insert()
  }
})();
