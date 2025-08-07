import './MainList.css';

export default function MainList({ abc }) {
  return (
    <div className='Name'>
      <img
        className="img1"
        src={abc.image}
        alt={abc.name}  // Add alt attribute here
        height={200}
        width={200}
      />
      <h4>{abc.name}</h4>
      <p>RS {abc.price}</p>
    </div>
  );
}