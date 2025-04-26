import { Tlayanankami } from "@/type/Tlayanankami";
import { ShoppingBasket, Trash2Icon } from "lucide-react";

export const layanankami: Tlayanankami[] = [
  {
    id: 1,
    title: "Setor Limbah",
    desc: "Composite menyediakan layanan penyetoran limbah organik bagi siapa pun yang ingin ikut berkontribusi pada bumi yang lebih sehat. Kamu bisa menyetorkan sisa makanan, daun kering, atau limbah dapur lainnya ke titik pengumpulan terdekat, lalu kami akan mengolahnya secara profesional menjadi pupuk kompos. Setiap setoranmu adalah langkah kecil yang berdampak besar bagi lingkungan.",
    icon: Trash2Icon,
  },
  {
    id: 2,
    title: "Marketplace",
    desc: "Lewat marketplace kami, kamu bisa membeli pupuk kompos berkualitas tinggi yang dihasilkan dari limbah organik masyarakat. Semua produk di sini merupakan hasil dari proses daur ulang yang berkelanjutan, sehingga setiap transaksi bukan hanya memberi manfaat untuk tanamanmu, tapi juga membantu membentuk ekosistem ekonomi sirkular yang lebih adil dan ramah lingkungan.",
    icon: ShoppingBasket,
  },
];
