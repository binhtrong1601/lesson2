import "./hot-music.css";

function HotMusic(props) {
  const newData = props.data.slice(7);

  return (
    <div className="container">
      <div className="title">
        <p>Cứ Chill Thôi</p>
      </div>
      <div className="box">
        {newData.map((song) => (
          <div key={song.name}>
            <div className="hotMusic">
              <img src={song.img} className="hotImg" alt="" />
              <div className="hotMusicContainer">
                <h5 className="songName">{song.name}</h5>
                <div className="singer">{song.singer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { HotMusic };
