const initialState = {
    names: [
        'palak',
        'parul',
        'mohit',
        'papa',
        'mummy',
        'princy',
        'priyanshi jain',
        'priyanshi khetwani',
        'aishwarya shah'
    ],
    searchName: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'palak': return <h1>palak</h1>
    }
}

export default reducer;