import { Redirect } from 'react-router-dom';

const initialState = {
    data: [],
    dark: false,
    id: '',
    search: ' '
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case true: {
            console.log('clicked dark');
            return {
                ...state,
                dark: false
            }
        }
        case false: {
            console.log('clicked');
            return {

                ...state,
                dark: true
            }
        }
        case 'fulljob': {
            const bigCities = state.data.filter((e) => {
                // console.log("hello");
                return e.id === action.value;
            });
            const finalData = bigCities.map(data => data.body)
            console.log(bigCities.map(data => data.id));
            return {
                ...state,
                id: action.value,
                data: finalData
            }

        }
        case 'changeData': {
            return {
                ...state,
                data: action.value
            }
        }


    }
    return state;
}

export default reducer;