import product1 from "./products/1.webp";
import product2 from "./products/2.webp";
import product3 from "./products/3.JPG";
import product4 from "./products/4.png";
import product5 from "./products/5.webp";
import product6 from "./products/6.jpg";
import product7 from "./products/7.jpg";
import product8 from "./products/8.jpg";
import product9 from "./products/9.webp";

import Categories from "../../components/categories/categories.component";
import { Outlet } from 'react-router-dom';

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "Telefon ve Aksesuarları",
            "productImage": product1
        },
        {
            "id": 2,
            "title": "Bilgisayar/Tablet",
            "productImage": product2
        },
        {
            "id": 3,
            "title": "Foto & Kemara",
            "productImage": product3
        },
        {
            "id": 4,
            "title": "Yazıcılar & Projeksiyon",
            "productImage": product4
        },
        {
            "id": 5,
            "title": "Klima ve Isıtıcılar",
            "productImage": product5
        }
        ,
        {
            "id": 6,
            "title": "Elektrikli Ev Aletleri",
            "productImage": product6
        }
        ,
        {
            "id": 7,
            "title": "Oyun ve Konsolları",
            "productImage": product7
        }
        ,
        {
            "id": 8,
            "title": "Beyaz Eşya",
            "productImage": product8
        },
        {
            "id": 9,
            "title": "Tv, Görüntü & Ses Sistemleri",
            "productImage": product9
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


