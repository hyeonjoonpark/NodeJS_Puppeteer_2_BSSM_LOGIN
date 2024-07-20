const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 }); // headless: false로 설정하면 브라우저가 실제로 열립니다.
  const page = await browser.newPage();
  await page.goto('https://school.busanedu.net/bssm-h/main.do', { waitUntil: 'networkidle2' });

  // 로그인 페이지로 이동
  await page.goto('https://school.busanedu.net/bssm-h/lo/login/loginPage.do', { waitUntil: 'networkidle2' });

  // 로그인 폼 작성
  await page.type('#mberId', 'jjoon1379'); // 아이디 입력 필드의 선택자를 변경하세요.
  await page.type('#mberPassword', 'phjj@3473'); // 비밀번호 입력 필드의 선택자를 변경하세요.

  // 폼 제출
  await page.click('.btn_login'); // 로그인 버튼의 선택자를 변경하세요.
  await page.waitForNavigation();

  // 로그인 후 페이지 확인
  console.log('로그인 성공');

  // 추가 작업을 여기에 작성합니다.
  
  await browser.close();
})();
