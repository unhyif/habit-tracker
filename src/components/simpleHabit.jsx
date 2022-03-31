import React, { useState, useRef, useCallback, useEffect } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // state 설정, 업데이트 함수 // 기존 state 값 메모리에 저장
  // const [level, setLevel] = useState(0);

  const spanRef = useRef(); // 기존 레퍼런스를 메모리에 저장하여 재사용
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }); // 동일 레퍼런스의 콜백함수

  useEffect(() => console.log("mounted or updated"), []); // mount만 됐을 때, 특정 데이터 변경됐을 때만 호출 가능

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

export default SimpleHabit;
