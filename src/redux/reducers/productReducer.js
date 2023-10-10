import { APPLY_FILTER, ENABLE_LOADING, GET_PRODUCT, GET_PRODUCTS, REMOVE_COLOUR_FILTER, REMOVE_COST_FILTER, REMOVE_DESIGN_TEMPLATES_FILTER, REMOVE_TYPE_FILTER, SET_COLOUR_FILTER, SET_COST_FILTER, SET_DESIGN_TEMPLATES_FILTER, SET_TYPE_FILTER, SET_SEARCH_FILTER } from "."

const initialState = {
    products: [],
    product: {},
    costFilter: [],
    colourFilter: "all",
    designTemplateFilter: [],
    typeFilter: [],
    searchFilter: "",
    loading: true,
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload],
                loading: false
            }
        case GET_PRODUCT: 
            return {
                ...state,
                product: {
                    ...action.payload
                },
                loading: false
            }
        case ENABLE_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_COST_FILTER:
            return {
                ...state,
                costFilter: [...state.costFilter, action.payload]
            }
        case REMOVE_COST_FILTER:
            const updatedCostFilter = state.costFilter.filter(cost => !(cost[0] === action.payload[0] && cost[1] === action.payload[1]));

            return {
                ...state,
                costFilter: updatedCostFilter
            }
        case SET_COLOUR_FILTER:
            return {
                ...state,
                colourFilter: action.payload
            }
        case REMOVE_COLOUR_FILTER:
            return {
                ...state,
                colourFilter: "all"
            }
        case SET_DESIGN_TEMPLATES_FILTER:
            return {
                ...state,
                designTemplateFilter: [...state.designTemplateFilter, action.payload]
            }
        case REMOVE_DESIGN_TEMPLATES_FILTER:
            const removeDesignTemplateFilter = state.designTemplateFilter.filter(designTemplate => designTemplate !== action.payload);
            return {
                ...state,
                designTemplateFilter: [...removeDesignTemplateFilter]
            }
        case SET_TYPE_FILTER:
            return {
                ...state,
                typeFilter: [...state.typeFilter, action.payload]
            }
        case SET_SEARCH_FILTER:
            return {
                ...state,
                searchFilter: action.payload
            }
        case REMOVE_TYPE_FILTER:
            const removeTypeFilter = state.typeFilter.filter(filter => filter !== action.payload);
            return {
                ...state,
                typeFilter: [...removeTypeFilter]
            }
        case APPLY_FILTER:
            console.log("hello every one")
            const filteredProducts = state.products.filter(product => {
                
                const costFilter = state.costFilter.sort();
                const min = costFilter.length !== 0 && costFilter[0][0];
                const max = costFilter.length !== 0 && costFilter[costFilter.length - 1][1] !== null ? costFilter[costFilter.length - 1][1] : Infinity;
                
                const costFilterPass = costFilter.length === 0 || (min <= product.price && product.price <= max)

                const colorFilterPass = state.colourFilter === 'all' || product.colors.includes(state.colourFilter);
                

                let designTemplateFilterPass = state.designTemplateFilter.length === 0;
                state.designTemplateFilter.forEach(template => {
                    designTemplateFilterPass = designTemplateFilterPass || parseInt(template) === product.designTemplate || (template === "3+" && product.designTemplate > 3)
                });

                const typeFilterPass = state.typeFilter.length === 0 || state.typeFilter.includes(product.type);

                const searchFilterPass = !state.searchFilter || product.title.toLowerCase().includes(state.searchFilter)

                return colorFilterPass && typeFilterPass && designTemplateFilterPass & costFilterPass & searchFilterPass;
            });
            return {
                ...state,
                products: filteredProducts
            }
        default:
            return state;
    }
}

export { productReducer }