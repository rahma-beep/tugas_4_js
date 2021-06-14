var shella = 153;
var nana = 155;
var rahma = 158;
var urutanTinggi = [rahma, nana, shella];

function badanTinggi() {
  if (shella > rahma) {
    console.log("Shella adalah anak yang paling tinggi")
  }
  else if (nana > rahma) {
    console.log("Nana adalah anak yang paling tinggi")
  }
  else {
    console.log("Rahma adalah anak paling yang tinggi")
  }
}
badanTinggi()

function keduaTinggi() {
  if (nana < rahma) {
    console.log("Nana adalah kedua paling tinggi")
  }
  else if (nana < shella) {
    console.log("Shella adalah kedua paling tinggi")
  }
  else {
    console.log("Rahma adalah kedua paling tinggi")
  }
}
keduaTinggi()

function badanPendek() {
  if (rahma < nana) {
    console.log("Rahma adalah kedua paling tinggi")
  }
  else if (shella < nana) {
    console.log("Shella adalah anak yang paling pendek")
  }
  else {
    console.log("Nana adalah kedua paling tinggi")
  }
}
badanPendek()
