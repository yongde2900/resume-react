export default () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center drop-shadow-md py-6">
      <img
        src="/profile.png"
        className="rounded-full w-48 mb-6 drop-shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Jimmy Lin</h1>
      <p className="text-xl font-medium text-gray-600 mb-6">
        Back-End Developer
      </p>
      <div className="max-w-lg text-center">
        <p className="text-gray-700 mb-4">
          嗨,我是Jimmy，現在在創科資訊作為一名學員，擅長利用Node.js 以及其框架
          Express，來架構一個 Web Application，也會使用 React 來展示前端畫面。
          {/* Hi, I'm John. I have been working as a full stack developer for 5 years. I specialize in building web applications using React and Node.js. */}
        </p>
        <p className="text-gray-700 mb-4">
          在閒暇之餘，我樂於學習新的技術，新的知識，近期正在學習 AWS
          ，期望自己能在 3 個月裡通過 SAA 。以下是我近期開發的專案：
          {/* In my spare time, I enjoy contributing to open source projects and experimenting with new technologies. Some of my recent projects include: */}
        </p>
        <ul className="text-left list-disc list-inside">
          <li className="mb-2">
            <a
              className="text-lg text-blue-700 hover:text-blue-500"
              href="https://github.com/yongde2900/thermoeter-back-end"
            >
              Theremometer
            </a>
            :
            <div className="pl-5">
              <p className="pt-2">
                這是一個可以即時顯示溫濕度的 APP
                ，也可以透過圖表來選擇要查看，過去一小時、過去一天或者是過去一週的歷史資料。
              </p>
              <p className="pt-2">
                開發模式為三人協作，採用前後端分離的架構，在樹莓派串連一個溫濕度傳感器，並且架設一個
                <span className="font-semibold text-gray-700 underline decoration-blue-700">
                  {" "}
                  MQTT Broker{" "}
                </span>{" "}
                來傳遞資料，後端使用{" "}
                <span className="font-semibold text-gray-700 underline decoration-blue-700">
                  Express{" "}
                </span>
                作為 API 伺服器並且處理網頁的畫面， APP 則是使用{" "}
                <span className="font-semibold text-gray-700 underline decoration-blue-700">
                  React-Native
                </span>{" "}
                來開發。
              </p>
              <p className="pt-2">
                個人負責 MQTT Broker 架設以及資料的傳遞，開發後端 API ， APP
                端的即時顯示的畫面與功能，以及深色模式的開發。
              </p>
            </div>
          </li>
          <li className="  mb-2">
            <a
              className="text-lg text-blue-700 hover:text-blue-500"
              href="https://github.com/yongde2900/twitter-fullstack-2020-team"
            >
              Simple Twitter
            </a>
            :
            <div className="pl-5">
              <p className="pt-2">
                這是一個模仿
                twitter的社群網站，可以推文、回文、按讚、聊天室以及後台管理。{" "}
              </p>

              <p className="pt-2">
                開發模式為三人協作，採用 MVC 架構
                ，使用Express.js作為框架，Handlebars
                為模板引擎，MySQL資料庫，Git版本控制
              </p>

              <p className="pt-2">
                個人負責 MVC
                架構設定，建立資料庫資料表的關連與種子檔案，首頁與登入的畫面與功能，使用{" "}
                <span className="font-semibold text-gray-700 underline decoration-blue-700">
                  Web Socket{" "}
                </span>
                建立聊天室功能。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
