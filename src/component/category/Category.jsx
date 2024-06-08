import { useNavigate } from 'react-router-dom';
import './Category.css'
const category = [
  {
    name: "man",
    imgUrl:
      "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?w=360&t=st=1714477843~exp=1714478443~hmac=7f642992186b9dda7822da883c60e70d529d0aa2d8b572de32afff037df7edff",
  },
  {
    name: "women",
    imgUrl:
      "https://img.freepik.com/premium-photo/beautiful-sports-woman-standing-with-folded-arms-white-background-generative-ai_849906-20014.jpg?w=740",
  },
  {
    name: "kids",
    imgUrl:
      "https://img.freepik.com/free-psd/close-up-kid-expression-portrait_23-2150193289.jpg?t=st=1714478142~exp=1714481742~hmac=bc5e98f8ce54d98f8b2e8d66e7ab7930a47e8ff88a85351baa0e37922ce9939f&w=740",
  },
  {
    name: "home",
    imgUrl:
      "https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    name: "books",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jzKNZw84mH-K18T17Kxx8Ai6sHlXl5viBQ&s",
  },
  {
    name: "mobile",
    imgUrl:
      "https://img.freepik.com/premium-vector/new-version-black-smartphone-with-blank-white-screen_115464-125.jpg?w=740",
  },
  {
    name: "electronics",
    imgUrl:
      "https://www.pngitem.com/pimgs/m/61-612748_home-appliances-background-home-appliances-images-png-transparent.png",
  },
];

function Category() {
  const navigate = useNavigate();


  return (
    <div className="category">
      {category.map((item, index) => {
        return (
          <div key={index}>
            <div  className="cate" onClick={() => navigate(`/category/${item.name}`)}>
              <div >
                <img className="img" src={item.imgUrl} alt="" />
              </div>
              <div >
                <h5 className="cate-Name">{item.name}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
