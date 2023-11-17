import React, {useEffect} from 'react';
import './App.css';

function App() {

  

  const [num, setNum] = React.useState('-')
  const [state, setState] = React.useState(false)

  const onClick = ()=> {
    // 1~40(1-39채 및 20세 이상 채널) / 0 제외
    let random = Math.floor(Math.random() * (40 - 1 + 1)) + 1
    let channel = random === 2 ? '20세 이상 ' : random > 2 ? `${random-1}` : `${random}`
    setNum(channel)

    // true: ~ 채널 문구, 다시 고르기 show / 버튼 hide
    // false: ~ 채널 문구, 다시 고르기 hide / 버튼 show
    setState(true)

  }

  const undoSelect = ()=> {
    setState(false)
  }
  
  return (
    <div className='wrap'>
      <div className='inner'>
        <div className='content'>
          <strong className='logo-name'>Maplestory</strong>
          <div className='recommend-server-box'>
            <span>이번 주 추천 서버는?</span>
            
            {/* 채널 선택 버튼 */}
            <button type='button' onClick={onClick} className={`btn ${state ? 'd-none' : ''}`}>추천 서버 확인하기 <i className="ri-arrow-right-s-line"></i></button>

            {/* 채널 결과 */}
            <strong className={`server-result ${state ? '' : 'd-none'}`}>{`${state ? num + '채널' : '-채널'}`}</strong>
          </div>

          {/* 다시 고르기 */}
          <div className={`undo-box ${state ? '' : 'd-none'}`}>
            <button type='button' onClick={undoSelect} className='btn-undo'>다시 고르기 <i className="ri-arrow-right-s-line"></i></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
