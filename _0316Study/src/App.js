import React from 'react';
import Study from './Study';
import Study2 from './Study2';

//1. props을 통해 컴포넌트에 값 전달하기 (객체 형태로 전달)
// const App=()=>{
//   return(
//     <>
//     <Study name='react' color='red'/>
//     <Study color='pink'/>
//     </>
//   );
// }
// export default App;

//PropsChildren
// const App=()=>{
//   return(
//     <Study2>
//       <Study name = 'react' color = 'red'/>
//       <Study color = 'pink'/>
//     </Study2>
//   );
// }
// export default App;


//2. 조건부 렌더링(특정 조건에 따라 다른 결과물 렌더링)
//3항 연산자 사용 
//{isSpecial ? <b>*</b> : null } / true = * , false = null

//3. 여러개의 input 관리하기
const App =()=>{
  return(
    <>
    <Study/>
    </>
  );
}
export default App;
