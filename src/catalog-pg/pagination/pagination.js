import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
    paginationElem: document.querySelector('.tui-pagination'),
}

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  // template: {
  //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
  //   currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
  //   moveButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</a>',
  //   disabledMoveButton:
  //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</span>',
  //   moreButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
  //       '<span class="tui-ico-ellip">...</span>' +
  //     '</a>'
  // }
};

const pagination = new Pagination(refs.paginationElem, options);
console.log('pagination:', pagination)
let pageForPagination = 1;


// const pageForPagination = pagination.getCurrentPage();
 console.log('pageForPagination:', pageForPagination)

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
   pageForPagination = currentPage;  
  console.log(currentPage);

  
});
console.log('pageForPagination:', pageForPagination)
export { pageForPagination };

//  Зроблено зпочатку, але не до кінця 

// const refs = {
//     prevNextBtn: document.querySelectorAll('.prevNext'),
//     numbers: document.querySelectorAll('.pagination_item')
// }

// let currentStep = 0;

// refs.numbers.forEach((number, numIdx) => { 
//     number.addEventListener('click', (e) => { 
//         e.preventDefault();
//         currentStep = numIdx;
//         document.querySelector('.pagination_item_active').classList.remove('pagination_item_active');
//         number.classList.add('pagination_item_active');
//         updateBtn();
//     })
// })

// refs.prevNextBtn.forEach(button => {
//     button.addEventListener('click', (e) => {
//         currentStep += e.target.id === "next" ? 1 : -1;
//         //console.log(currentStep);
//         refs.numbers.forEach((num, numIdx) => {
//             num.classList.toggle('pagination_item_active', numIdx === currentStep);
//             updateBtn();
//         })
//     })
// })

// function updateBtn() {
//     if (currentStep === 2) {
//         refs.prevNextBtn[1].disabled = true;
//     } else if (currentStep === 0) {
//         refs.prevNextBtn[0].disabled = true;
//     } else {
//         refs.prevNextBtn[1].disabled = false;
//         refs.prevNextBtn[0].disabled = false;
//     }
// }