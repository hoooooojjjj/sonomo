const todoModalOpenBtn = document.querySelector("#todoModalOpen");
const modalContent = document.querySelector('.modal-content');



function modalOpen(){ // 버튼 클릭하면 모달 열림
    if(modalContent.style.display === 'block'){
    modalContent.style.display = 'none';}
    else{
        modalContent.style.display = 'block';
    }
}

function modalClose(){ // x 누르면 모달 닫힘
    modalContent.style.display = 'none';
}

todoModalOpenBtn.addEventListener("click", modalOpen); // 모달 여는 이벤트

