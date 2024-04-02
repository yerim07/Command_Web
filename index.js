// 계산기 화면을 초기화하는 함수
function clearScreen() {
  document.querySelector(".screen").innerText = "0"; // 화면의 내용을 '0'으로 설정
}

// 화면에 값을 추가하는 함수
function appendToScreen(value) {
  const screen = document.querySelector(".screen"); // 화면 요소를 가져옴
  // 만약 화면이 '0'이고 추가하려는 값이 '.'이 아니라면
  if (screen.innerText === "0" && value !== ".") {
    screen.innerText = value; // 값만 설정
  } else {
    screen.innerText += value; // 값 추가
  }
}

// 계산을 수행하고 결과를 화면에 표시하는 함수
function calculate() {
  const expression = document.querySelector(".screen").innerText; // 화면에 표시된 표현식을 가져옴
  const result = eval(expression); // 표현식을 계산하여 결과를 얻음
  document.querySelector(".screen").innerText = result; // 결과를 화면에 표시
}
