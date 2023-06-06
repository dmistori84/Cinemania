import { createCardsCatalog } from '../../common/card/card.js';
import { pageForPagination } from '../pagination/pagination.js';

const catalogElement = document.querySelector('.catalog-section');

const catalogURL = `https://api.themoviedb.org/3/trending/all/week?page=${pageForPagination}`;

createCardsCatalog(catalogURL, catalogElement);
