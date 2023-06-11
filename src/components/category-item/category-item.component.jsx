import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <div className="category-container">
            <img className="background-image" style={
                //Dinamik CSS object
                {
                    backgroundImage: ({ imageUrl }) //template string syntax
                }
            } alt="" src={imageUrl} />
            <div className="description">
                <p>
                    <b>{title}</b>
                </p>
            </div>
            <button className="button" >Ürün Seç
            </button>
        </div >
    );
}

export default CategoryItem;