import { ListMusic } from "../../component/list-music/list-music.js";
import { data } from "../../apis/data";
import { HotMusic } from "../../component/hotMusic/hot-music.js";
import "./styles.css";

function HomePage() {
  return (
    <>
      <ListMusic data={data.song} />
      <HotMusic data={data.song} />
    </>
  );
}

export { HomePage };
