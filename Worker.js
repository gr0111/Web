onmessage = function(event) {
    const { num1, num2 } = event.data;

    // 두 숫자의 곱 계산
    const result = num1 * num2;

    // 결과를 메인 스레드로 전송
    postMessage({ result });
};
