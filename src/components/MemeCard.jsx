import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <Card className='card' onClick={(e) => navigate(`/edit?url=${props.img}`)}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className='h3'>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default MemeCard

// const Search = (props) => {

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredMemes = props.memes.filter(meme => {
//     return meme.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div>
//       <div className="search-container">
//         <input type="text" placeholder="Search memes" value={searchTerm} onChange={handleSearch} />
//       </div>
//       <div className="meme-grid">
//         {filteredMemes.map(meme => (
//           <MemeCard key={meme.id} img={meme.imgUrl} title={meme.title} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Search