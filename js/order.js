function validateSubmit() {
    var valid = true;
    if (!validateQuantity()) {
        var error = document.getElementById('quantityError')
        error.innerHTML = "Please enter a valid quantity number";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validatePhone()) {
        var error = document.getElementById('phoneError')
        error.innerHTML = "Please enter a valid phone";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateEmail()) {
        var error = document.getElementById('emailError')
        error.innerHTML = "Please enter a valid email";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateCardNumber()) {
        var error = document.getElementById('cardnumberError')
        error.innerHTML = "Please enter a valid card number";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateSecureNumber()) {
        var error = document.getElementById('securenumberError')
        error.innerHTML = "Please enter a valid secure number";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateZip()) {
        var error = document.getElementById('zipError')
        error.innerHTML = "Please enter a valid zip code number";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (document.getElementById('identifier').value == "") {
        var error = document.getElementById('identifierError')
        error.innerHTML = "Please enter a valid identifier";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateFirstName()) {
        var error = document.getElementById('firstnameError')
        error.innerHTML = "Please enter a valid first name";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (!validateLastName()) {
        var error = document.getElementById('lastnameError')
        error.innerHTML = "Please enter a valid last name";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (document.getElementById('address').value == "") {
        var error = document.getElementById('addressError')
        error.innerHTML = "Please enter a valid address";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (document.getElementById('holdername').value == "") {
        var error = document.getElementById('holdernameError')
        error.innerHTML = "Please enter a valid holder name";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (document.getElementById('expirationmonth').value == "") {
        var error = document.getElementById('expirationmonthError')
        error.innerHTML = "Please enter a valid expiration date";
        error.className = "error active";
        event.preventDefault();
        valid = false;
    }
    if (valid == false)
        alert("Please check your form.");
    else
        sendEmail();
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    var error = document.getElementById('phoneError');
    var reg = new RegExp("^[0-9]{10}$");
    var valid = reg.test(phone);
    if (!valid) {
        error.innerHTML = "Please enter a valid phone";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return valid;
}

function validateCardNumber() {
    var value = document.getElementById('cardnumber').value;
    var error = document.getElementById('cardnumberError');
    var reg = new RegExp("^[0-9]{16}$");
    var valid = reg.test(value);
    if (!valid) {
        error.innerHTML = "Please enter a valid card number";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return valid;
}

function validateSecureNumber() {
    var value = document.getElementById('securenumber').value;
    var error = document.getElementById('securenumberError');
    var reg = new RegExp("^[0-9]{3}$");
    var valid = reg.test(value);
    if (!valid) {
        error.innerHTML = "Please enter a valid secure number";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return valid;
}

function validateEmail() {
    var email = document.getElementById('email');
    var error = document.getElementById('emailError');
    var valid = email.validity.valid;
    if (!valid) {
        error.innerHTML = "Please enter a valid email";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return email.validity.valid;
}

function validateQuantity() {
    var quantity = document.getElementById('quantity');
    var error = document.getElementById('quantityError');
    var valid = quantity.validity.valid;
    if (!valid) {
        error.innerHTML = "Please enter a valid quantity number";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return quantity.validity.valid;
}

function validateZip() {
    var zip = document.getElementById('zip').value;
    var error = document.getElementById('zipError');
    var reg = new RegExp("^[0-9]{5}$");
    var valid = reg.test(zip);
    if (!valid) {
        error.innerHTML = "Please enter a valid zip code number";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    showZipOption();
    return valid;
}

function validateFirstName() {
    var name = document.getElementById('firstname').value;
    var error = document.getElementById('firstnameError');
    var reg = new RegExp("^[a-zA-Z]*$");
    var valid = reg.test(name);
    if (!valid) {
        error.innerHTML = "Please enter a valid first name";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return valid;
}

function validateLastName() {
    var name = document.getElementById('lastname').value;
    var error = document.getElementById('lastnameError');
    var reg = new RegExp("^[a-zA-Z]*$");
    var valid = reg.test(name);
    if (!valid) {
        error.innerHTML = "Please enter a valid last name";
        error.className = "error";
    }
    else {
        error.className = "error";
        error.innerHTML = "";
    }
    return valid;
}

function sendEmail() {
    var args = [];
    args.push('subject=' + 'Shipping infomation');
    var productname = "Product name: " + window.parent.document.getElementById("head").innerText;
    var identifier = "Product identifier: " + document.getElementById("identifier").value;
    var quantity = "Quantity: " + document.getElementById("quantity").value;
    var radionum = document.getElementsByName("method");
    for (var i = 0; i < radionum.length; i++) {
        if (radionum[i].checked) {
            method = "Shipping method: " + radionum[i].value;
        }
    }
    var customername = "Customer name: " + document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
    var phone = "Phone number: " + document.getElementById("phone").value
    var address = "Shipping address: " + document.getElementById("address").value;
    var email = "Email: " + document.getElementById("email").value;
    var cardnumber = "Credit card number: " + document.getElementById("cardnumber").value;
    var securenumber = "Credit card secure number: " + document.getElementById("securenumber").value;
    var holdername = "Credit card holder's name: " + document.getElementById("holdername").value;
    var expirationdate = "Credit card expiration date: " + document.getElementById("expirationmonth").value;
    var body = productname + "\n" + identifier + "\n" + quantity + "\n" + method + "\n" + customername + "\n" + phone + "\n" + address + "\n" + email + "\n" + cardnumber + "\n" + securenumber + "\n" + holdername + "\n" + expirationdate + "\n";
    if (typeof body !== 'undefined') {
        args.push('body=' + encodeURIComponent(body))
    }

    var url = 'mailto:' + encodeURIComponent('jiaweig3@uci.edu');
    if (args.length > 0) {
        url += '?' + args.join('&');
    }
    window.location = url;
    return url;
}

function processZip(zip) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ()  {
        // 4 means finished, and 200 means okay. 
        if  (xhr.readyState == 4  &&  xhr.status == 200) {
            var result = xhr.responseText;
            var r = result.split (';');
            if (r[0] != ", ")
                document.getElementById("address").value = r[0];
            window.parent.document.getElementById("total").innerHTML = "Total: " + r[1];
        }
    }
    var price = window.parent.document.getElementById("price").innerHTML.substring(1);
    xhr.open("GET", "zip.php?zip=" + zip + "&price=" + price, true);
    xhr.send();
}

function showZipOption() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ()  {
        // 4 means finished, and 200 means okay. 
        if  (xhr.readyState == 4  &&  xhr.status == 200) {
            var result = xhr.responseText;
            var r = result.split (';');
            document.getElementById("ziplist").innerHTML = "";
            for (var i = 0; i < r.length; i++) {
                //window.parent.document.getElementById("total").innerHTML += "" + i + r[i];
                document.getElementById("ziplist").innerHTML += "<option>" + r[i] + "</option>";
            }
        }
    }
    var zip = document.getElementById("zip").value
    xhr.open("GET", "zip.php?zip=" + zip + "&price=-1", true);
    xhr.send();
}