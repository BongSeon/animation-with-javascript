// 애니메이션을 위한 gsap라이브러리 사용
// to 사용
// gsap.to(".text", { y: 50, opacity: 0, duration: 1 });

// fromTo
// gsap.fromTo(".text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

// time line
const tl = gsap.timeline({ defaults: { duration: 0.75 } });

// tl.fromTo(".cookie-container", { scale: 0 }, { scale: 1 });
// easing 적용한 버전
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);

// 위 animation이 다 끝나야 다음 animation이 시작된다.
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
  // <50%을 옵션으로 주면 이전 애니메이션이 절반 실행될 때 시작된다.
);
// '<' 옵션을 주게되면 바로 이전 애니메이션과 같은 시간으로 싱크가 된다.
tl.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

// 쿠키 조각 애니메이션 cookie crumbs
tl.fromTo(
  ".cookie",
  { y: 10, rotation: "0deg" },
  { y: -10, rotation: "-20deg", yoyo: true, repeat: -1 }
);
tl.fromTo(
  "#crumbs",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 },
  "<"
);

// 버튼 클릭시 쿠키 컨테이너 사라지도록
const button = document.querySelector("button");

button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: -100,
    duration: 0.75,
    ease: "powder1.out",
  });
});

///
// gsap.to
// gsap.Fromto
// gsap.timeline

// '<'
// '<50%'

// yoyo : 제자리로 돌아오도록하는 옵셥
// repeat : 애니메이션 반복 횟수 (-1: 무한반복)
