import React, { useEffect } from 'react';


// user리스트 정보를 표시하는 함수
function User({ user, onRemove, onToggle }) {

  //
  useEffect(() => {
    console.log('user 값이 설정됨'); 
    console.log(user)
    return () => {
      console.log('user이 바뀌기 전...');
      console.log(user)
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.userName}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

//user리스트 구조를 만드는 함수
function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;