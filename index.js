const express = require("express");
const app = express();

// Izinkan akses folder gambar
app.use("/uploads", express.static("uploads"));

// Data fix (tidak berubah)
const layanan = [
  {
    gambar: "/uploads/mesin_cuci.jpg",
    nama: "Wash",
    harga: 10000,
    detail: "Wash only"
  },
  {
    gambar: "/uploads/drying.jpg",
    nama: "Dry",
    harga: 8000,
    detail: "Dry only"
  },
  {
    gambar: "/uploads/ironing.jpg",
    nama: "Iron",
    harga: 7000,
    detail: "Iron only"
  },
  {
    gambar: "/uploads/paket_express.jpg",
    nama: "Express Package",
    harga: 15000,
    detail: "Wash + Dry + Iron"
  }
];

// Endpoint API
app.get("/layanan", (req, res) => {
  res.json(layanan);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
