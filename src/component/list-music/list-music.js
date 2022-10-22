import "./list-music.css";

function ListMusic(props) {
  return (
    <div className="homePage">
      <div className="menu">
        <div className="menuContainer">
          <div className="menuTitle">
            <h2>Mới Phát Hành</h2>
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
            <a href="/#" key={song.name}>
              <div className="song">
                <img src={song.img} alt="" className="img" />
                <div className="containers">
                  <h4 className="songName">{song.name}</h4>
                  <div className="singer">{song.singer}</div>
                  <div className="time">{song.time}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ListMusic };
