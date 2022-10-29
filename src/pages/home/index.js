import { ListMusic } from "../../component/list-music/list-music.js";
import { data } from "../../apis/data";
import { HotMusic } from "../../component/hotMusic/hot-music.js";
import SliderImage from "../../component/carousel/SliderImage.js";
import "./styles.css";

function HomePage() {
  return (
    <div className="homeContainer">
      <SliderImage data={data.song} />
      <ListMusic data={data.song} />
      <HotMusic data={data.song} />
    </div>
  );
}

export { HomePage };
