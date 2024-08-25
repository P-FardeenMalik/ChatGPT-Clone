import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg"
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleSend = async() => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"> <img src={gptLogo} alt="Logo" className="logo" /> <span className="brand">ChatGPT</span></div>
          <button className="midBtn"> <img src={addBtn} alt="" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"> <img src={msgIcon} alt="Query" />What is Programming ?</button>
            <button className="query"> <img src={msgIcon} alt="Query" />How to use an API ?</button>
          </div>

        </div>

        <div className="lowerSide">
          <div className="listItems"> <img src={home} alt="Home"className="listItemsImg" />Home</div>
          <div className="listItems"> <img src={saved} alt="Saved"className="listItemsImg" />Saved</div>
          <div className="listItems"> <img src={rocket} alt="Upgrade"className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
          <div className="chats">
              <div className="chat">
                <img className="chatImg" src={userIcon} alt="" /> <p className="txt">Lorem</p>
              </div>

              <div className="chat bot">
                <img className="chatImg" src={gptImgLogo} alt="" /> <p className="txt">lorem adf adf adfla f lfaljf la daldfjajfa    ja lfl jla a ls fa l l;fa ;aff ;f fsadla ;l fldasl;f dj asj jldjajfoejaooea oiejfoi hghuijfjaljfoidajf oiodf ajfifajfoiofhhgkdnfkanfkjkjdfjehfakjnfjknnj  fjdfafjioifoi io djajfoiejlkfvknfkakfkfjf  fardeen akmalkjfldjlkka fardeene almlaljojmmal a j jioadjfm  maklj  kmakljkj  malik af dlf  fl d</p>
              </div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}> <img src={sendBtn} alt="Send" /></button>
            </div>
            <p>ChatGPT can make mistakes. Check important info.</p>
          </div>
      </div>
    </div>
  );
}

export default App;







