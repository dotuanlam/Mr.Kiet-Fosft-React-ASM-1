import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="avatar">
          <img
            alt="Avatar"
            src="https://i.pinimg.com/564x/77/7a/6f/777a6f00d23c69c61abe57dc0078ab07.jpg"
          ></img>
        </div>
        <div className="name-position">
          <h3>Đỗ Tuấn Lâm</h3>
          <h4>Front End Developer</h4>
        </div>
      </div>
      <div className="container">
        <div className="container-infor">
          <h3> Thông tin liên hệ</h3>
          <ul>
            <li>
              <a>
                {" "}
                <i class="fa-solid fa-cake-candles"></i> 02/01/2000
              </a>
            </li>
            <li>
              <a>
                {" "}
                <i class="fa-solid fa-phone"></i>099999999
              </a>
            </li>
            <li>
              <a>
                {" "}
                <i class="fa-solid fa-envelope"></i>Dotuanlam@gmail.com
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-link"></i>facebook/dotuanlam
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-location-dot"></i>Ho Chi Minh City{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="container-experience">
          <h3>
            <i class="fa-brands fa-react"></i>Kinh nghiệm làm việc
          </h3>
          
          <ul>
          <h5>Các dự án cá nhân</h5>
            <li>
              <h7>Project Show case</h7>
              <p>
                link github: https://github.com/dotuanlam/PROJECT-SHOW-CASE.git
              </p>
              <p>Mô tả: Thiết kế giao diện UI (HTML,CSS)</p>
            </li>
            <li>
              <h7>Web xem phim</h7>
              <p>
                Link github: https://github.com/dotuanlam/PROJECT-SHOW-CASE.git
              </p>
              <p>Công nghệ sử dụng: React, Redux, ReactRouter</p>
            </li>
            <li>
              <h7>Web bán quần áo thể thao</h7>
              <p>
                Link github: https://github.com/dotuanlam/PROJECT-SHOW-CASE.git
              </p>
              <p>Công nghệ sử dụng: React, Redux, ReactRouter, NodeJS</p>
            </li>
          </ul>
        </div>
        <div className="graduation">
          <h4>Học vấn</h4>
          <p>Tốt nghiệp trường Đẳng Kinh Tế Kỹ Thuật ngành Cơ-điện tử Tự Động Hóa</p>
        </div>
        <div className="graduation  skill">
          <h4>Skill</h4>
          <p>HTML, CSS, Javascript, ReactJS, NodeJS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
