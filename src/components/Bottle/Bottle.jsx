import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, img, stock} = bottle
    
  return (
    <div className='bottle'>
        <h4> Name : {name} </h4>
        <img src={img} alt={name} />
        <p> Price : ${price} </p>
        <p> Stock : {stock} </p>
        <button 
          onClick={() => handleAddToCart(bottle)}
          disabled={stock === 0}
          style={{ opacity: stock === 0 ? 0.5 : 1 }}
        >
          {stock === 0 ? 'Out of Stock' : 'Purchase'}
        </button>
    </div>
  )
}

export default Bottle