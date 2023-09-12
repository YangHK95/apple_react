import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./component/modal";

function App() {
  let post = " 강남 우동 맛집";
  // documnet.querySelector('h4')l.innerHTML = post;
  // let [글제목, a] = useState("남자 코트 추천");
  // let [글제목2, b] = useState("강남 우동맛집");
  // let [글제목3, c] = useState("파이썬독학");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let [cancel, setCancel] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
          <button
            onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자코트 추천";
              글제목변경(copy);
            }}
          >
            글수정
          </button>
        </h4>

        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                // copy 여기서 원한는 자료 삭제
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제버튼
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          console.log(입력값);
          let copy = [...글제목];
          // copy = [...copy, 입력값]; -내 정답
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        버튼
      </button>
      {modal ? <Modal 글제목={글제목} title={title}></Modal> : ""}
    </div>
  );
}

export default App;
