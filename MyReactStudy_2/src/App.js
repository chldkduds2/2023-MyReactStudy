import React,{useState, useRef, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


//1. <배열>
  // 리액트에서 배열을 렌더링할 때에는 각 원소들만의 고유한 key값이 존재하여야 한다.(효율적인 렌더링을 위함)
  // key값이 원소마다 정해져 있지 않다면 key={index}사용
  // key값이 있다면 효율적으로 각 원소, 배열을 조작할 수 있지만,
  // key값이 없다면 비효율적으로 조작하게 된다.

//2. <useRef 컴포넌트 안에 변수 만들기>
  //컴포넌트 안에서 조회하거나 수정할 변수관리

//3. <배열 항목 추가하기>
  //불변성을 유지하기 위해, 기존 배열을 복사하여 사용하여야 한다 (함수 사용 불가) 
  //(1)spread 연산자 사용 (객체 펼치기, 복사하여 기존 배열 재사용)
  //(2)concat 힘수 사용 (기존 배열을 수정하지 않고, 새로운 원소 추가)

//4. <배열 항목 제거하기>
  //불변성을 유지하며 삭제하기 ->  filter

//5. <배열 항목 수정하기>
  //불변성을 유지하며 업데이트 하기 -> map

//6.<useEffect 사용>
  //(마운트, 언마운트, 업데이트)시 할 작업 고르기
  //deps에 특정 값 삽입 -> 컴포넌트 처음 마운트, 언마운트, 지정 값 수정 전 호출, 수정 후 호출  
  //useEffect안에서 사용할 상태,props가 있다면 deps 값으로 넣어 지정 함수 호출, 수정 후 작동되도록 하여야 한다.   
  //deps 생략 -> 컴포넌트가 리렌더링 될 때 호출 (리액트 : 부모 컴포넌트 리렌더링 -> 자식 컴포넌트 리렌더링 )

//7.<useMemo 사용 연산한 값 재사용하기>(memozied)
 // 불필요한 호출(리렌더링) 자원 낭비가 생기는 문제 해결
 //특정 결과 값을 재사용

//8.<useCallback을 사용하여 함수 재사용하기>
 //특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용


function countActiveUsers(users){
 console.log('활성 사용자 수 세는 중...');
 return users.filter(user => user.active).length;
}


const App = () => {

const [inputs, setInputs] = useState({
userName : "",
email : ""
});


const {userName, email} = inputs;

const onChange = useCallback(
  e=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  });


  const [users, setUser] = useState([
    {
      id: 1,
      userName: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      userName: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      userName: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

 const nextId= useRef(4);
 
 const onCreate=()=>{
  const user={
    id: nextId.current,
    userName,
    email
  }
//  setUser([...users,user]); //spread 연산자 사용
setUser(users.concat(user));// concat 연산자 사용


 setInputs({
  userName:"",
  email:""
 })
  nextId.current+=1;
 };


const onRemove = id =>{
//user.id가 파라미터로 일치하지 않는 원소만 추출헤서 새로운 배열 생성
//= user.id가 id인 것을 찾아서 제거
setUser(users.filter(user => user.id !== id));
}

const onToggle = id =>{
  setUser(
    users.map(user => 
      user.id === id ? {...user, active: !user.active} : user )
  );
}

const count = useMemo(()=> countActiveUsers(users),[users])

  return(
    <>
       <CreateUser
       userName={userName}
       email={email}
       onChange={onChange}
       onCreate={onCreate}
       />
       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
       <div>활성 사용자 수 : {count}</div>
    </>
  );
  };

export default App;