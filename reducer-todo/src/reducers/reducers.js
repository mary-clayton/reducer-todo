// ### STEP 1 - Build a simple reducer and initial state

// - In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
// - In the same file, build your initial state object that has a list of todos with the following shape:

// ```js
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// ```

// - Export both the reducer and the initial state object


export const todo = [
    {
        item: 'Learn more about array methods',
        completed: false,
        id: 123
    },
    {
        item: 'Study my reducers',
        completed: false,
        id: 234
    },
    {
        item: 'Practice react',
        completed: false,
        id: 345
    }
];
export const reducer = (state, action) => {
    switch (action.type) {
      // ADD
  
      case "ADD_TASK":
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ];
  
      // TOGGLE
  
      case "TOGGLE_COMPLETED":
        let Clicktoggle = state.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        return Clicktoggle;
  
      // SUBTRACT
  
      case "CLEAR_COMPLETED":
        let Subtract = state.filter(item => {
          if (item.completed === true) {
            return !item.completed;
          } else {
            return item;
          }
        });
        return Subtract;
  
      default:
        return state;
    }
  };