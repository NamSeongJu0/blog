import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  let [title, setTitle] = useState(['경기도', '강원도', '제주도']);
  let [clickup, setClickup] = useState([0, 0, 0]);
  let [input, setInput] = useState('');
  let [titlenum, setTitlenum] = useState(0);

  let [modal, setModal] = useState(false);
  
  return (

    
    <div className="App">
      <div className="black-nav">
        <h4 style = {{color: 'red',
      fontSize: '20px'}}>Reat Blog</h4>
      </div>

      {
        title.map(function (a, i) {
          return (
            <div className="list" key = {i}>
              <h4 onClick = {() => {
                setModal(!modal);
              }}>{title[i]} <span onClick={(e) => {
                let copy = [...clickup];
                copy[i] = clickup[i] +1;
                setClickup(copy);
                e.stopPropagation();
              }}>👍</span>{clickup[i]}</h4>
              <p>2월 18일 발행</p>

              {/* <button onClick = {() => {
                let copy = [...clickup];
                copy.splice(i, 1);
                setClickup(copy);
              }}>like remove</button> */}

              <button onClick = {() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);

                let copy1 = [...clickup];
                copy1.splice(i, 1);
                setClickup(copy1);
              }}>글 삭제</button>
            </div>
          )
        })
      }

      <input type="text" onChange = {(e) => {
        setInput(e.target.value);
      }}/>

      <button onClick={() => {
        let copy = [...title];
        copy.unshift(input);
        setTitle(copy);
        
        let copy1 = [...clickup];
        copy1.unshift(0);
        setClickup(copy1);
      }}>글 추가</button>

      {/* <Modal title = {title} color = {'skyblue'}></Modal>
      <Modal title = {title} color = {'lightgray'}></Modal>  */}


        {
          modal === true ? <Modal title = {title} setTitle = {setTitle} setModal = {setModal} titlenum = {titlenum} /> : null
        }


        
    </div>

    

  );
}


function Modal(props) {
return(
  <div className="modal">
    <h4>{props.title[props.titlenum]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={() => {
      props.setModal(false);
    }}>창닫기</button>

    
  </div>
);
}
export default App;
