function searchStays() {

    const place =
        document.getElementById("place").value;

    const checkin =
        document.getElementById("checkin").value;

    const checkout =
        document.getElementById("checkout").value;


    if (place === "") {
        alert("Please enter a destination.");
        return;
    }

    if (checkin === "" || checkout === "") {
        alert("Please select your dates.");
        return;
    }


    alert(
        "Searching stays in " +
        place +
        "..."
    );


    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });
}



function bookRoom(room, price) {

    document.getElementById("selectedStay").innerHTML =
        "Selected stay: <strong>" +
        room +
        "</strong><br>₹" +
        price +
        " / night";


    document.getElementById("bookingModal").style.display =
        "flex";
}



function openBooking() {

    document.getElementById("bookingModal").style.display =
        "flex";
}



function closeBooking() {

    document.getElementById("bookingModal").style.display =
        "none";
}



function confirmBooking(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("bookingEmail").value;


    alert(
        "🎉 Booking Request Submitted!\n\n" +
        "Thank you, " + name + "!\n" +
        "Confirmation will be sent to " +
        email + "."
    );


    closeBooking();

}



function subscribe() {

    const email =
        document.getElementById("email").value;


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    alert(
        "🌿 Thank you for subscribing to EcoStay!"
    );


    document.getElementById("email").value = "";

}



window.onclick = function(event) {

    const modal =
        document.getElementById("bookingModal");

    if (event.target === modal) {

        closeBooking();

    }

};