function getYear() {
    let d = new Date();
    let currentYear = d.getFullYear();
    document.getElementById("year").innerHTML = currentYear;
}