const axios = require('axios');
require('dotenv').config();

// Auth Key
const authKey = process.env.authKey;

const reverseGeocode = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://geocode.xyz/${latitude},${longitude}?json=1&auth=${authKey}`);
    const data = response.data;

    if (!data.staddress || !data.city || !data.country) {
      throw new Error('Tidak ada hasil yang ditemukan');
    }

    const formattedAddress = `${data.staddress}, ${data.city}, ${data.region}, ${data.country}`;
    return formattedAddress;
  } catch (error) {
    console.error('Terjadi kesalahan dalam melakukan reverse geocoding:', error.message);
    throw error;
  }
};

const absensiKaryawan = async (latitude, longitude) => {
  try {
    const address = await reverseGeocode(latitude, longitude);
    console.log('Karyawan absen di alamat:', address);
  } catch (error) {
    console.error('Terjadi kesalahan dalam melakukan absensi karyawan:', error.message);
  }
};

const latitude = -6.917464;
const longitude = 107.619125;

absensiKaryawan(latitude, longitude);

// John dapat menggunakan layanan lain yang biayanya jauh lebih rendah dibandingkan Google Maps. Pada contoh ini saya menggunakan Geocode.xyz. Untuk pemilihan layanan tidak haruslah layanan yang saya gunakan saat ini, tetapi ini adalah contoh solusi untuk menggunakan layanan lain yang lebih murah dibandingkan menggunakan google maps.
// Juga terdapat solusi lain yang mungkin John terapkan, yakni:
// - Menghubungi pihak Google Maps jika dia merasa bahwa request yang dia punya sudah cukup besar dan layak untuk mendapatkan diskon tambahan
// - Menerapkan caching data dari hasil reverse geocoding. Agar request yang sudah pernah diambil tidak ulang kembali.
