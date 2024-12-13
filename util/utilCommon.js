'use strict';

if (sessionStorage.getItem("mineSession") === null) {
  sessionStorage.setItem("mineSession", 'white' );
  document.querySelector('html').classList.add('white');
} else if (sessionStorage.getItem("mineSession") === 'white') {
  document.querySelector('html').classList.add('white');
} else if (sessionStorage.getItem("mineSession") === 'dark') {
  document.querySelector('html').classList.add('dark');
}

function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = () => {
  toggleTopButton();
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.querySelector('#scroll-btn').classList.remove('none');
  } else {
    document.querySelector('#scroll-btn').classList.add('none');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem("mineSession") === null) {
    document.querySelector('.header-Icon.global-hd-li img').src = './image/nlogo_white.webp';
  } else if (sessionStorage.getItem("mineSession") === 'white') {
    document.querySelector('.header-Icon.global-hd-li img').src = './image/nlogo_white.webp';
  } else if (sessionStorage.getItem("mineSession") === 'dark') {
    document.querySelector('.header-Icon.global-hd-li img').src = './image/nlogo_dark.webp';
  }
});

window.addEventListener('load', () => {
  // mode
  if (document.querySelectorAll('.mode-transfer').length > 0) {
    let htmlMode = document.querySelector('html');
    let modeBtn = document.querySelector('.mode-transfer');

    modeBtn.addEventListener('click', () => {
      if (sessionStorage.getItem("mineSession") === 'white') {
        sessionStorage.setItem("mineSession", 'dark' );
        htmlMode.classList.replace('white', 'dark');
        document.querySelector('.header-Icon.global-hd-li img').src = './image/nlogo_dark.webp';
      } else if (sessionStorage.getItem("mineSession") === 'dark') {
        sessionStorage.setItem("mineSession", 'white' );
        htmlMode.classList.replace('dark', 'white');
        document.querySelector('.header-Icon.global-hd-li img').src = './image/nlogo_white.webp';
      }
    });
  }

  // header
  if (document.querySelectorAll('.global-Header').length > 0) {
    const hlocation = window.location.search;
    const hsearchParams = Number(hlocation.split('=')[1]);
    let workBtn = document.querySelector('.nav-Btn.WorksBtn');
    let mobileworkBtn = document.querySelector('.mobile-btn.workBtn');
    let achievedBtn = document.querySelector('.nav-Btn.achievedBtn');

    if (isNaN(hsearchParams)) {
      workBtn.href = '#experience';
      mobileworkBtn.href = '#experience';
      // achievedBtn.href = '#achieved';

      if (document.querySelectorAll('.aboutContents-container').length > 0) {
        workBtn.href = '/';
        mobileworkBtn.href = '/';
        // achievedBtn.href = '/';
      }
    } else {
      workBtn.href = '/';
      mobileworkBtn.href = '/';
      // achievedBtn.href = '/';
    }
  }
  
  function alertEvent(event) {
    event.preventDefault();
    alert('준비중입니다.');
  }
  function stopEvent(event) {
    event.preventDefault();
    alert('서비스 중지된 사이트입니다.');
  }

  //scroll Observe
  let globalHeader = document.querySelector('.global-Header');
  let modeTransferBtn = document.querySelector('.mode-transfer');
  let globalHeaderHight;
  let preScrollTop = 0;

  window.addEventListener('scroll',() => {
    let nextScrollTop = window.scrollY;
    globalHeaderHight = globalHeader.clientHeight;
    
    if(preScrollTop < nextScrollTop) {
      if (globalHeader.style.top !== `-${globalHeaderHight}px`) {
        globalHeader.style.top = `-${globalHeaderHight}px`;
        modeTransferBtn.style.display = `none`;
        // console.log('Down!');
      }
    }
    else { // (preScrollTop > nextScrollTop)
      if (globalHeader.style.top !== `0px`) {
        globalHeader.style.top = `0px`;
        modeTransferBtn.style.display = `flex`;
        // console.log('Up!');
      }
    }
    preScrollTop = nextScrollTop;
    if (document.querySelector('html').scrollTop < globalHeaderHight) {
      globalHeader.classList.add('fix');
      document.querySelector('.mode-transfer').classList.add('fix');
    }
    if (document.querySelector('html').scrollTop > globalHeaderHight && globalHeader.classList.contains('fix')) {
      globalHeader.classList.remove('fix');
      document.querySelector('.mode-transfer').classList.remove('fix');
    }
  });

  //Item Observe
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const addEventToEl = (elList) => {
    document.addEventListener('scroll', () => {
      elList.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      })
    })
  }

  if (document.querySelectorAll('.experience-clist-item').length > 0) {
    let boxElList = document.querySelectorAll('.experience-clist-item');
    addEventToEl(boxElList);
  }
  
  if (document.querySelectorAll('.experience-clist-item-project').length > 0) {
    //Hover Func
    let boxItemProject = document.querySelectorAll('.experience-clist-item-project');
    boxItemProject.forEach((item, idx) => {
      item.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
      });
      item.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
      });
    });
  }
  
  function ReStart() {
    let boxElList = document.querySelectorAll('.experience-clist-item');
    addEventToEl(boxElList);

    //Hover Func
    let boxItemProject = document.querySelectorAll('.experience-clist-item-project');
    boxItemProject.forEach((item, idx) => {
      item.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
      });
      item.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
      });
    });
  }

  if (document.querySelectorAll('.leadmoreBtn').length > 0) {
    let leadmoreBt = document.querySelector('.leadmoreBtn');
    let expeEle = document.querySelector('.experience-clist-inner');

    leadmoreBt.addEventListener('click', (e) => {
      leadmoreBt.remove();

      let portTit = [
        '유성한가족병원', '대원산업', '명신메디칼', '오픈엠',
        'BMST', '블랑호텔', 'E&E Chem', 'Duta Technology'
      ]

      for (let i=8; i<16; i++) {
        let createEle = document.createElement('div');
        createEle.classList.add('experience-clist-item');
        createEle.innerHTML = `<div class="experience-clist-item-wrapper">
          <a href="./project.html?num=${i}"} class='experience-clist-item-project'>
            <img src='./image/project/projdoor/exper_0${i}.webp' alt="홈페이지 썸네일" class='polioImg'/>
            <img src='./image/exper_bg0${(i % 4) + 1}.webp' alt="배경화면" class='polioBackImg'/>
          </a>
        </div>
        <div class="experience-clist-item-titlebox">
          <div class="experience-clist-item-tag">
            <div class="experience-clist-item-tagList">
              <img src='./image/taglogo_00.webp' alt="HTML 아이콘" />
              <p class='experience-clist-item-tagTxt'>HTML</p>
            </div>
            <div class="experience-clist-item-tagList">
              <img src='./image/taglogo_01.webp' alt="CSS 아이콘" />
              <p class='experience-clist-item-tagTxt'>CSS</p>
            </div>
            <div class="experience-clist-item-tagList">
              <img src='./image/taglogo_02.webp' alt="JAVASCRIPT 아이콘" />
              <p class='experience-clist-item-tagTxt'>JavaScript</p>
            </div>
          </div>
          <div class="experience-clist-item-title">
            <h3>${portTit[i-8]}</h3>
          </div>
        </div>`;

        expeEle.appendChild(createEle);
      }

      ReStart();
    });
  }
  
  if (document.querySelectorAll('.mobile_section-title').length > 0) {
    let aniTxt = document.querySelector('.mobile_section-title');

    window.addEventListener('scroll', (e) => {
      let scrollNum = document.querySelector('html').scrollTop;
      let transNum = -100 + (scrollNum / 10);

      if (-100 <= transNum && transNum <= -50) {
        aniTxt.style.transform = `translate3d(${transNum}%, -50%, 0px)`;
      }
    });
  }

  if (document.querySelectorAll('.mobilemenu-btn').length > 0) {
    let mobileBtn = document.querySelector('.mobilemenu-btn');
    let mobileNav = document.querySelector('.mobile-nav');
    let eleHtml = document.querySelector('html');
    let mobileflexwrap = document.querySelector('.mobile-flexwrap');

    mobileBtn.addEventListener('click', (e) => {
      if (mobileBtn.classList.contains('off')) {
        mobileBtn.classList.replace('off', 'on');
        mobileNav.style.display = 'block';
        setTimeout(() => {
          mobileNav.classList.replace('off', 'on');
        }, 100);
        eleHtml.classList.remove('menuOff');
        eleHtml.classList.add('menuOn');
      } else {
        mobileBtn.classList.replace('on', 'off');
        mobileNav.classList.replace('on', 'off');
        setTimeout(() => {
          mobileNav.style.display = 'none';
        }, 700);
        eleHtml.classList.remove('menuOn');
        eleHtml.classList.add('menuOff');
      }
    });

    mobileflexwrap.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-btn')) {
        mobileBtn.classList.replace('on', 'off');
        mobileNav.classList.replace('on', 'off');
        setTimeout(() => {
          mobileNav.style.display = 'none';
        }, 700);
        eleHtml.classList.remove('menuOn');
        eleHtml.classList.add('menuOff');
      }
    });
  }

  //cube
  //mouse offset
  function mousemove(event){
    const cubeWrapper = document.querySelector('.main-cube-wrapper');
    let cuteItems = cubeWrapper.querySelectorAll('.main-cube-item');

    cuteItems[0].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientWidth / 2) - event.clientX) / 350)}rem, 
    ${(((cubeWrapper.clientHeight / 2) - event.clientY) / 200)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientHeight / 0.8) - event.clientY) / 50)}deg) 
    rotateY(${(((cubeWrapper.clientWidth / 1.2) - event.clientX) / 45)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[1].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientHeight / 2) - event.clientY) / 400)}rem, 
    ${(((cubeWrapper.clientWidth / 2) - event.clientX) / 400)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientWidth / 1.5) - event.clientX) / 60)}deg) 
    rotateY(${(((cubeWrapper.clientHeight / 0.7) - event.clientY) / 40)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[2].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientHeight / 2) - event.clientY) / 250)}rem, 
    ${(((cubeWrapper.clientWidth / 2) - event.clientX) / 350)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientWidth / 1.0) - event.clientX) / 50)}deg) 
    rotateY(${(((cubeWrapper.clientHeight / 1.0) - event.clientY) / 30)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[3].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientWidth / 2) - event.clientX) / 450)}rem, 
    ${(((cubeWrapper.clientHeight / 2) - event.clientY) / 250)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientHeight / 1.8) - event.clientY) / 65)}deg) 
    rotateY(${(((cubeWrapper.clientWidth / 1.5) - event.clientX) / 40)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;
  }

  if (document.querySelectorAll('.main-cube-item').length > 0) {
    let mainSection = document.querySelector('.section-main');

    mainSection.addEventListener('mousemove', mousemove);
  }

  //gridTill
  if (document.querySelectorAll('.grid-colbox').length > 0) {
    let gridBoxwrapper = document.querySelector('.background-grid_boxwrapper');
    let bgGridCount = 195;

    for (let i=0; i<=bgGridCount; i++) {
      let createEle = document.createElement('div');
      createEle.classList.add('background-grid_box');

      gridBoxwrapper.appendChild(createEle);
    }
  }

  // 
  function protomouse(event) {
    let proSec = document.querySelector('.protools-section');
    let protoolsSec = proSec.querySelector('.protools-tool-contents');

    protoolsSec.style.cssText  = `transform: translate3d(${((proSec.clientWidth / 2) - event.clientX) / 100}%, 
    ${((proSec.clientHeight / 2) - event.clientY) / 50}%, 0px) scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
    transform-style: preserve-3d; 
    will-change: transform;`;
  }

  if (document.querySelectorAll('.protools-section').length > 0) {
    let mainSectiontool = document.querySelector('.protools-section');
    mainSectiontool.addEventListener('mousemove', protomouse);
  }

  //Project
  if (document.querySelectorAll('.projectContents-container').length > 0) {
    const location = window.location.search;
    const searchParams = Number(location.split('=')[1]);
    const projectName = [
      'LG ThinQ App', 'LG Cotent Store', 'LG Seller Lounge', '이화수 전통 육개장', 
      '김형제 고기의 철학', '국제의과 과학아카데미', '여수 요양병원', '대전광역시립 노인병원', 
      '유성한가족병원', '대원산업', '명신메디칼', '오픈엠',
      'BMST', '블랑호텔', 'E&E Chem', 'Duta Technology'
    ];
    const projectUrl = [
      "", "https://kr.lgappstv.com/", "https://seller.lgappstv.com/", "http://ihwasoo.com/", 
      "http://kimbro.co.kr/", "https://www.imsacademy.net/", "http://www.newstart.co.kr/", "http://www.ilovenoin.com/", 
      "http://www.han.or.kr/", "http://daewonic.com/", "http://www.msmedi.com/", "http://openm.com/",
      "http://www.bmst.co.kr/", "http://xn--9i2bm7jdtd81ei0rv2g.kr/", "http://www.enechems.com/", "http://www.duta-rnd.com/"
    ]

    let captureNum = [
      5,1,1,1,1,
      1,1,1,1,1,
      1,1,1,1,1,
      1
    ]

    //타이틀 삽입
    let projectTit = document.querySelector('.projectContents-titleTxt');
    projectTit.innerText = `${projectName[searchParams]}`;

    //컨텐츠 사진 삽입
    let projectContentsBody = document.querySelector('.projectContents-body');
    for (let i=0; i<=captureNum[searchParams]; i++) {
      let createPro = document.createElement('div');
      createPro.classList.add('projectContents-bitem');
      createPro.innerHTML = `<div class="projectContents-bitemWrap">
        <img src='./image/project/capture0${searchParams}_0${i}.webp' alt="컨텐츠 이미지" />
      </div>`;

      projectContentsBody.appendChild(createPro);
    }

    if (searchParams === 0) {
      let experienceListitemtag = document.querySelector('.experience-clist-item-tag');
      let createbadge = document.createElement('div');
      createbadge.classList.add('experience-clist-item-tagList');
      createbadge.innerHTML = `<img src="./image/taglogo_03.webp" alt="Icon 이미지">
      <p class="experience-clist-item-tagTxt">React</p>`;

      experienceListitemtag.appendChild(createbadge);
    }

    let linkAdd = document.querySelector('.project-outLink');
    
    if (searchParams === 0) {
      linkAdd.remove();
    } else {
      linkAdd.href = projectUrl[searchParams];
    }
  }
});