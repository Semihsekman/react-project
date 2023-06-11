import Categories from "../../components/categories/categories.component";
import { Outlet } from 'react-router-dom';

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "Telefon ve Aksesuarları",
            "imageUrl": "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-pro-model-1-1536x1155.jpg"
    
        },
        {
            "id": 2,
            "title": "Bilgisayar/Tablet",
            "imageUrl": "https://cdn.cimri.io/image/1200x1200/dizstbilgisayarfiyatlar_651248343.jpg"
        },
        {
            "id": 3,
            "title": "Foto & Kemara",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsik1lxcvoL0_KOLezFt334N7Y67w9eMlHX0ot960Fo3IAb3ILTVcTb0L-GThQcmQcyhY&usqp=CAU"
        },
        {
            "id": 4,
            "title": "Yazıcılar & Projeksiyon",
            "imageUrl": "https://www.yalcinburo.net/resimler/219db27d851764f903eba23a106efe8e.jpg"
        },
        {
            "id": 5,
            "title": "Klima ve Isıtıcılar",
            "imageUrl": "https://statics.vestel.com.tr/productimages/20234504_r1_1000_1000.jpg"
        }
        ,
        {
            "id": 6,
            "title": "Elektrikli Ev Aletleri",
            "imageUrl": "https://isikgaz.com/226-thickbox_default/elektirikli-cift-kapakli-tost-makinesi-20-dilim.jpg"
        }
        ,
        {
            "id": 7,
            "title": "Oyun ve Konsolları",
            "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/sony/thumb/137956-4_large.jpg"
        }
        ,
        {
            "id": 8,
            "title": "Beyaz Eşya",
            "imageUrl": "https://st1.myideasoft.com/idea/ef/38/myassets/products/876/arcelik-570474-mb-nofrost-buzdolabi_min.jpg?revision=1682688878"
        },
        {
            "id": 9,
            "title": "Tv, Görüntü & Ses Sistemleri",
            "imageUrl": "https://cdn.cimri.io/image/1000x1000/dijitsudtelevizyon_472479650.jpg"
        }

    ]
    return (
        <div>
            <Outlet />
            <Categories categories={categories} />
        </div>
    );
}

export default Home;


