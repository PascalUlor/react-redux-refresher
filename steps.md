# react-redux-refresher
mini app react-redux for practice


/ STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { quotes, quoteOfTheDay }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

// STEP 2: COME UP WITH ACTION TYPES

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
// No side effects! No randomness! Always return state! (even if unchanged)

// STEP 4: COMBINE REDUCERS
// use combineReducers to create a root reducer off of our reducers

// STEP 5: CREATE THE REDUX STORE

// STEP 6: USE THE PROVIDER TO WRAP THE APP PASSING THE STORE AS PROP

// STEP 7: CREATE ACTION DISPATCHER FUNCTIONS
// action dispatchers can be shared across all components,
// and saves components from having to use props.dispatch explicitly

// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS

// STEP 9: FLESH OUT
// STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
// STEP 11: WE GET THE SLICES OF STATE FROM PROPS
// STEP 12: INJECT THE ACTION DISPATCHERS AS 2ND ARG TO CONNECT
// STEP 13: WE GET THE ACTION DISPATCHERS FROM PROPS
