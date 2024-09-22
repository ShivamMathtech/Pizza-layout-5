setInterval(show_time, 1000);
function show_time() {
  let d = new Date();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  hrs = hrs <= 12 ? String(0) + hrs : hrs - 12;
  document.getElementById("hrs").textContent = hrs;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;
}
