//따라오는 커서 만들기
const cursor = document.querySelector(".mouse_cursor");
const cursor2 = document.querySelector(".mouse_cursor2");

//커서 좌표값 불러오기
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";

  //gsap으로 불러오기
  gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
  gsap.to(cursor2, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });
});

//모바일 메뉴
const gnb = document.getElementById("gnb");
const toggleArea = document.querySelector(".menu_toggle");
const lineGnb = document.querySelector(".menu_line");
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
let isMenu = false;

// 메뉴 토글
function onClickMenu() {
  if (isMenu == true) {
    isMenu = false;
    gnb.style.width = "100%";
    lineGnb.style.height = "3px";
    lineGnb.style.top = "17px";
    menuLine1.style.transform = "rotate(45deg)";
    menuLine2.style.transform = "rotate(-45deg)";
    gnb.style.display = block;
  }
  if (isMenu == false) {
    isMenu = true;
    gnb.style.width = "0%";
    lineGnb.style.height = "40px";
    lineGnb.style.top = "0";
    menuLine1.style.transform = "rotate(0deg)";
    menuLine2.style.transform = "rotate(0deg)";
  }
}

toggleArea.addEventListener("click", onClickMenu);

// 비디오 요소와 초기 위치 가져오기
const bgVideo = document.getElementById("bg_video");
const initialLeft = -20;
const initialTop = -20;

// 비디오 요소에 마우스 이벤트 추가
bgVideo.addEventListener("mousemove", moveBackground);

// 배경을 이동하는 함수 정의
function moveBackground(event) {
  // 마우스 이벤트에서 마우스의 x, y 위치 가져오기
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  // 비디오 요소의 새로운 위치 계산
  const newLeft = initialLeft + (mouseX / window.innerWidth) * 50;
  const newTop = initialTop + (mouseY / window.innerHeight) * 50;

  // 비디오 요소의 위치 업데이트
  bgVideo.style.transition = "all 0.5s";
  bgVideo.style.left = `${newLeft}px`;
  bgVideo.style.top = `${newTop}px`;
}

//메뉴 클릭 시 해당 섹션으로 스크롤이동
const menuItems = document.querySelectorAll(".menu li");
const sections = document.querySelectorAll("main section");

menuItems.forEach((menuItem, i) => {
  menuItem.addEventListener("click", () => {
    sections[i].scrollIntoView({ behavior: "smooth" });
    onClickMenu();
  });
});

//각 section
const portfolioSection = document.getElementById("portfolio");
const aboutSection = document.getElementById("about");
const notionGitSection = document.getElementById("notion_git");
//section안의 h3
const portfolioTitle = document.getElementById("portfolio_title");
const aboutTitle = document.getElementById("about_title");
const notionGitTitle = document.getElementById("notion_git_title");

//스크롤이 움직이면 해당 section에서 인터렉션 효과
window.addEventListener("scroll", () => {
  const portfolioRect = portfolioSection.getBoundingClientRect();
  const aboutRect = aboutSection.getBoundingClientRect();
  const notionGitRect = notionGitSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // portfolio 섹션이 화면에 부분적으로 보일 때도 h3 요소를 나타냄
  if (
    portfolioRect.bottom >= 0 &&
    portfolioRect.top <= windowHeight &&
    !portfolioTitle.classList.contains("visible")
  ) {
    portfolioTitle.classList.add("visible");
  } else if (portfolioRect.top > windowHeight || portfolioRect.bottom < 0) {
    portfolioTitle.classList.remove("visible");
  }

  // about 섹션이 화면에 부분적으로 보일 때도 h3 요소를 나타냄
  if (
    aboutRect.bottom >= 0 &&
    aboutRect.top <= windowHeight &&
    !aboutTitle.classList.contains("visible")
  ) {
    aboutTitle.classList.add("visible");
  } else if (aboutRect.top > windowHeight || aboutRect.bottom < 0) {
    aboutTitle.classList.remove("visible");
  }

  // notion_git 섹션이 화면에 부분적으로 보일 때도 h3 요소를 나타냄
  if (
    notionGitRect.bottom >= 0 &&
    notionGitRect.top <= windowHeight &&
    !notionGitTitle.classList.contains("visible")
  ) {
    notionGitTitle.classList.add("visible");
  } else if (notionGitRect.top > windowHeight || notionGitRect.bottom < 0) {
    notionGitTitle.classList.remove("visible");
  }
});
