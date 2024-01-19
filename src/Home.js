import Product from "./Product";


let slideimg1 = "https://landingi.com/wp-content/uploads/2020/05/cover_ecommerce1.webp";
let slideimg2 = "https://www.shutterstock.com/image-vector/internet-shopping-set-customers-buying-260nw-1643133313.jpg";
let slideimg3 = "https://cdn6.f-cdn.com/contestentries/1399898/20745766/5b80297378cf7_thumb900.jpg";
let slideimg4 = "https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg";
// let slide5="https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";
// let slideimg4 = "";
const image1 = "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/c/u/-original-imagrcjhgmzuh5dz.jpeg?q=70&crop=false";
const image2 = "https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/3/s/l-wt-08-rahi-trendz-original-imagz53uvhpgbvz4.jpeg?q=70";
const image3 = "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/l/r/7-rkt-18222-blue-white-7-atom-white-original-imagugk6yghdpgpm.jpeg?q=70&crop=false";


const Home = () => {
    return (
        <>
            <div className="sliderbox">
                <div className="slider">
                    <img src={slideimg3} className="slide1" />
                    <img src={slideimg2} className="slide1" />
                    <img src={slideimg1} className="slide1" />
                    <img src={slideimg4} className="slide1" />
                </div>
                <div className="dot_box">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="landing">
                <Product img={image1}
                    nam="Bleed Blue Day and Date Functioning Strap Adult Quartz Analog Watch"
                    price="Rs 350  85% off"/>
                <Product img={image2}
                    nam="Casual Regular Sleeves Embellished Women Black Top"
                    price="₹279 86% off"/>
                <Product img={image3}
                    nam="Spring Edge Alpha 2 Sneakers For Men  (White, Blue)"
                    price="₹1,335 59% off" />
            </div>

        </>
    );
}
export default Home;