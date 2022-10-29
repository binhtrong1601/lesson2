import "./list-music.css";

function ListMusic(props) {
  return (
    <div className="homePage">
      <div className="menu">
        <div className="menuContainer">
          <div className="menuTitle">
            <p>Mới Phát Hành</p>
          </div>
          <div className="menuOption">
            <div className="option1">
              <p>BÀI HÁT</p>
              <p>ALBUM</p>
            </div>
            <div className="option2">
              <p>TẤT CẢ {">"} </p>
            </div>
          </div>
        </div>
        <div className="listSong">
          {props.data.map((song) => (
            <div className="song">
              <img src={song.img} alt="" className="img" />
              <div className="containers">
                <h5 className="songName">{song.name}</h5>
                <div className="singer">{song.singer}</div>
                <div className="time">{song.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ListMusic };
