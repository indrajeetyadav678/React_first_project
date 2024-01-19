

const Product = (props) => {
    return (
        <>
            <div className="cont_box">
                <div className="img"><img src={props.img} /></div>
                <div className="prod_name">{props.nam}</div><br/>
                <p className="detail">{props.price}</p><br/>
                <button className="cartbtn">Add to cart</button>
                <button className="buybtn">Buy</button>
            </div>
        </>
    );
}

export default Product;