# Fashion Try-On Affiliate App 👗

Aplikasi mobile untuk virtual try-on fashion dengan program affiliate yang memungkinkan pengguna mencoba pakaian secara virtual menggunakan kamera dan mendapatkan komisi dari penjualan.

## Fitur Utama ✨

- 📸 **Virtual Try-On** - Coba pakaian secara real-time menggunakan kamera
- 💰 **Affiliate Program** - Dapatkan komisi 15% dari setiap penjualan
- ❤️ **Wishlist** - Simpan pakaian favorit Anda
- 📊 **Dashboard Affiliate** - Tracking penjualan dan penghasilan
- 👤 **Profile Management** - Kelola akun dan pengaturan

## Tech Stack 🛠️

- **React Native** - Framework mobile cross-platform
- **Expo** - Platform untuk membangun dan deploy React Native apps
- **React Navigation** - Navigation library
- **Expo Camera** - Akses kamera device
- **Axios** - HTTP client untuk API requests

## Instalasi 📦

### Prasyarat
- Node.js v16 atau lebih tinggi
- npm atau yarn
- Expo CLI

### Langkah-Langkah

1. **Clone repository**
```bash
git clone https://github.com/Fadlirinaldi98/fashion-tryon-affiliate.git
cd fashion-tryon-affiliate
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Setup Expo**
```bash
npm install -g expo-cli
```

## Menjalankan di Android 📱

### Opsi 1: Menggunakan Expo Go (Paling Cepat)

```bash
# Mulai development server
npm run android

# atau
expo start --android
```

Ini akan membuka Expo Go app di Android device/emulator Anda.

### Opsi 2: Build APK Menggunakan EAS (Recommended untuk Production)

1. **Setup EAS Account**
```bash
npm install -g eas-cli
eas login
```

2. **Build APK**
```bash
eas build --platform android --local
```

3. **Download dan Install APK**
APK akan di-generate dan bisa di-download dari Expo dashboard.

### Opsi 3: Build APK Lokal

Jika Anda punya Android SDK installed:

```bash
# Install Android development tools
# kemudian jalankan:
npm run build-apk
```

## Struktur Folder 📁

```
fashion-tryon-affiliate/
├── src/
│   └── screens/
│       ├── HomeScreen.js
│       ├── CameraScreen.js
│       ├── AffiliateScreen.js
│       └── ProfileScreen.js
├── App.js
├── app.json
├── package.json
└── README.md
```

## Environment Variables 🔐

Buat file `.env` di root directory:

```
API_URL=https://api.fashiontryon.com
API_KEY=your_api_key_here
AFFILIATE_KEY=your_affiliate_key
```

## Konfigurasi Android 🔧

File `app.json` sudah dikonfigurasi dengan:
- Package name: `com.fashiontryon.affiliate`
- Permissions: CAMERA, INTERNET, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE
- Adaptive icon support

## Build untuk Production 🚀

### Langkah-Langkah:

1. **Update versi di `app.json`**
```json
"version": "1.0.0"
```

2. **Build APK untuk Production**
```bash
eas build --platform android --local
```

3. **Sign APK**
APK akan otomatis di-sign jika Anda sudah setup signing credentials.

## Troubleshooting 🔧

### APK tidak terinstall
- Pastikan device dalam Developer Mode
- Izinkan instalasi dari sumber unknown
- Clear cache: `npm cache clean --force`

### Kamera tidak bekerja
- Izin CAMERA harus diberikan
- Cek `app.json` untuk permission configuration
- Restart device jika diperlukan

### Build gagal
- Update Node.js ke versi terbaru
- Delete `node_modules` dan install ulang
- Clear expo cache: `expo start -c`

## API Integration 🔌

API endpoints untuk affiliate system:

```
POST /api/affiliate/referral - Create referral
GET /api/affiliate/stats - Get earnings stats
POST /api/affiliate/withdraw - Withdraw earnings
```

## Contributing 🤝

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License 📄

MIT License - lihat file LICENSE untuk detail

## Support 💬

Untuk bantuan:
- Email: support@fashiontryon.com
- Issues: [GitHub Issues](https://github.com/Fadlirinaldi98/fashion-tryon-affiliate/issues)

---

**Dibuat dengan ❤️ oleh Fadli Rinaldi**
