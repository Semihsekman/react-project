import CategoryItem from "../category-item/category-item.component";

import './categories.styles.scss';

const Categories = ({ categories }) => {
    return (
        <div className="shop">
            <div className="shopTitle">
            </div>
            <div className="categories-container">
                {categories.map((category) => {
                    const { id } = category;
                    return (
                        <CategoryItem key={id} category={category} />
                    );
                }
                )}
            </div>
        </div>
    );
}

export default Categories;