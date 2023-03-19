import React, {useState, useRef} from 'react';

//1. props을 통해 컴포넌트에 값 전달하기
// const Study = (props) => {
//   return (
//     <div>{props.name}</div>
//   )
// }

// export default Study

// const Study = (props) => {
//     return (
//       <div style={{color:props.color}}>Hi, {props.name}</div>
//     )
//   }
//   export default Study


//비구조할당
// const Study = ({name, color}) => {
//     return (
//       <div style={{color}}>Hi, {name}</div>
//     )
//   }
//   export default Study;


//defaultProps로 기본값 설정
//propsChildren(컴포넌트 사이에 넣은 값 조회)
//   const Study = ({name, color}) => {
//     return (
//       <div style={{color}}>Hi, {name}</div>
//     )
//   }

//   Study.defaultProps={
//    name:'no name'
//   }

//   export default Study;

//2. 조건부 렌더링(특정 조건에 따라 다른 결과물 렌더링)
//3항 연산자 사용 {isSpecial ? <b>*</b>:null}, (?, && -> 불리언 판독)

//3. 여러개의 input 관리하기
const Study = () => {

const [inputs, setInputs]=useState({
    name:'',
    nickName:'',
    explanation:""
});

//비구조할당
const {name, nickName, explanation} = inputs;

const [viewContent, setViewContent] = useState([]);

//ref Hook 이용 DOM에 직접 접
const nameInput = useRef();

const onChange = e => {
    const {name, value} =e.target; // e.target에서 name, value 추출
    setInputs({
    ...inputs, // 기존의 input객체 복사
    [name]:value // name키를 가진 value값으로 설정
    });
};

const onReset = e => {
    setInputs({
        name:'',
        nickName:'',
        explanation:''
    });
    nameInput.current.focus(); //함수 적용시 현재 nameInput DOM에 접근하여 포커스
};

const onPost = e =>{
  setViewContent(viewContent.concat({...inputs})); //ViewContent배열안에 inputs객체를 복사하여 넣어줌

};



  return (
    <>
    
    <input name='name' value={name} placeholder='name' onChange={onChange} ref={nameInput}/>
    <input name='nickName' value={nickName} placeholder='nickName' onChange={onChange}/>
    <input name='explanation' value={explanation} placeholder='explanation' onChange={onChange}/>
    <button onClick={onReset}>Reset</button>
    <button onClick={onPost}>Post</button>

    {/* map함수를 이용하여 웹 페이지 내에 렌더링 */}
    <div className='contentViewer'>
     {viewContent.map(element=>
      <div>
        <ul>
          <li>name : {element.name}</li>
          <li>nickName : {element.nickName}</li>
          <li>explanation : {element.explanation}</li>
        </ul>
      </div>
      )}
    </div>
    </>
  )
}

export default Study