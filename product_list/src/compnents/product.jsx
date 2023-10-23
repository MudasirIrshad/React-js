import "./product.css"

export default function Products(props){

    return(
        <>
        <div className="product">
            <div>
                <img src={props.img} alt="Product Picture" />
            </div>
            <div>
            <strong>Product name: <h1>{props.name}</h1>
            Release Year: <h2>2012</h2></strong>
            </div>
            <div className="pricing">
                <strong>Price: {props.price}$ <br />Free Shipping</strong>
                <button>Order now</button>
            </div>
        </div>
        </>
    )
}