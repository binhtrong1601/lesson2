import "./hot-music.css";

function HotMusic(props) {
  const newData = props.data.slice(7);

  return (
    <div className="container">
      <div className="title">
        <h2>Cứ Chill Thôi</h2>
      </div>
      <div className="box">
        {newData.map((song) => (
          <a href="/#" key={song.name}>
            <div className="hotMusic">
              <img src={song.img} className="hotImg" alt="" />
              <div className="hotMusicContainer">
                <h4 className="songName">{song.name}</h4>
                <div className="singer">{song.singer}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export { HotMusic };
