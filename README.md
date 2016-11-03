# Laman Pengembalian Barang - *Mobile First*
*Highlight* atau hal-hal pokok dari laman yang dikembangkan adalah sebagai berikut.
### Pembagian *form* menjadi 3 bagian/tahap
Meninjau komponen yang sangat banyak dan dimuat secara sekaligus pada *mockup* laman web, pada laman *mobile first* ini keseluruhan *form* yang diisi dibagi menjadi 3 bagian (data pengguna, data barang yang akan dikembalikan, dan data pengembalian). Hal ini disesuaikan dengan keterbatasan ukuran layar yang hanya menampilkan secara jelas sedikit komponen laman web dalam satu waktu. Pembagian *form* menjadi 3 tahap pengisian juga membuat pengguna tidak perlu melakukan *scrolling* sangat jauh jika keseluruhan form disatukan dalam satu bagian. Pengguna dapat berpindah bagian *form* untuk mengubah data yang dimasukkan sebelumnya.
### Meminimalisir kesalahan *input* pengguna dan interaksi
Kebanyakan validasi *form* dilakukan dengan mengecek isi *form* (misalnya data wajib sudah terisi atau belum) pada saat *submit*, sehingga pengguna harus kembali mengisi data yang terlewat dan melakukan *submit* kembali. Interaksi berlebih dan validasi *error* ini dikurangi dengan cara tidak mengaktifkan tombol *submit* atau *next* jika ada data wajib yang belum diisi. 
### *Layout* yang juga rapi dan sesuai untuk ditampilkan dari layar *desktop*
Pengembangan laman ini tidak hanya mempertimbangkan *layout mobile/tablet* saja, namun juga melihat apakah laman dapat ditampilkan dengan baik dan rapi untuk pengguna yang mengakses dari halaman web. Desain yang digunakan adalah desain *flat* yang sederhana dan dirasa cocok untuk halaman dengan banyak konten/tulisan.
### *Single-page app* 
Penggunaan *single-page app* untuk meminimalisir *loading time* dari laman yang dikembangkan.

> Pengembangan laman dilakukan dengan menggunakan *static page generator* dari *framework* **Node.js** yaitu **Harp** (berisi *preprocessor* HTML yaitu **Jade** dan **Less** sebagai *preprocessor* CSS). *Framework* lain yang juga digunakan yaitu **Bootstrap 3** dan **jQuery**.
