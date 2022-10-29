import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SliderImage(props) {
  const newData = props.data.slice(9);
  return (
    <div className="slider">
      <Carousel>
        {newData.map((song) => (
          <Carousel.Item>
            <img
              className="d-block "
              src={song.carousel}
              style={{ width: 1500, height: 500, backgroundSize: "cover" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{song.name}</h3>
              <p>{song.singer}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderImage;
