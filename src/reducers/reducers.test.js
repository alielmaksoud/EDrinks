import productsReducer from './products.js';
import filtersReducer from './filters.js';
import featuredReducer from './featured.js';
import * as types from '../constants/ActionTypes.js';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(undefined, {}))
      .toEqual({
        products: [],
        loading: false,
        error: null
      });
  });

  it('should handle FETCH_PRODUCTS_REQUEST', () => {
    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_REQUEST
      })
    ).toEqual({
      products: [],
      loading: true,
      error: null
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    const products = [1, 2, 3];

    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: products
      })
    ).toEqual({
      products: products,
      loading: false,
      error: null
    });
  });

  it('should handle FETCH_PRODUCTS_FAILURE', () => {
    const error = 'Test error.';

    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_FAILURE,
        payload: error
      })
    ).toEqual({
      products: [],
      loading: false,
      error: error
    });
  });
});

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(filtersReducer(undefined, {}))
      .toEqual({
        filterName: '',
        filterGroup: 'All',
        sortType: ''
      })
  });

  it('should handle FILTER_PRODUCTS_BY_NAME', () => {
    const name = 'Test name';
    
    expect(filtersReducer({}, {
        type: types.FILTER_PRODUCTS_BY_NAME,
        payload: name
      })
    ).toEqual({
      filterName: name.trim().toLowerCase()
    });
  });

  it('should handle FILTER_PRODUCTS_BY_GROUP', () => {
    const group = 'Test group';

    expect(filtersReducer({}, {
        type: types.FILTER_PRODUCTS_BY_GROUP,
        payload: group
      })
    ).toEqual({
      filterGroup: group
    });
  });

  it('should handle SORT_PRODUCTS', () => {
    const sortType = 'Test sort';

    expect(filtersReducer({}, {
        type: types.SORT_PRODUCTS,
        payload: sortType
      })
    ).toEqual({
      sortType
    })
  })
});

describe('featured reducer', () => {
  it('should return the initial state', () => {
    expect(featuredReducer(undefined, {}))
      .toEqual({
        featured: [],
        loading: false,
        error: null
      });
  });

  it('should handle FETCH_FEATURED_REQUEST', () => {
    expect(featuredReducer({}, {
        type: types.FETCH_FEATURED_REQUEST
      })
    ).toEqual({
      featured: [],
      loading: true,
      error: null
    });
  });

  it('should handle FETCH_FEATURED_SUCCESS', () => {
    const featured = [0, 1, 2];

    expect(featuredReducer({}, {
        type: types.FETCH_FEATURED_SUCCESS,
        payload: featured
      })
    ).toEqual({
      featured,
      loading: false,
      error: null
    });
  });

  it('should handle FETCH_FEATURED_FAILURE', () => {
    const error = 'Test error.';

    expect(featuredReducer({}, {
        type: types.FETCH_FEATURED_FAILURE,
        payload: error
      })
    ).toEqual({
      featured: [],
      loading: false,
      error
    });
  });
});