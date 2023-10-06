export const baseUrl = "buzzfitnesstrackerapi.zeeshanakhter.repl.co";
export const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  border: "2px solid #000",
  borderRadius: "10px",
  color: "#ddd",
  backgroundColor: "#111",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
export const dispatchActionTypes = {
  GET_EXERCISES_SUCCESS: "GET_EXERCISES_SUCCESS",
  GET_EXERCISES_ERRORS: "GET_EXERCISES_ERRORS",

  GET_FOODS_SUCCESS: "GET_FOODS_SUCCESS",
  GET_FOODS_ERRORS: "GET_FOODS_ERRORS",

  GET_GOALS_SUCCESS: "GET_GOALS_SUCCESS",
  GET_GOALS_ERRORS: "GET_GOALS_ERRORS",

  ADD_EXERCISE_SUCCESS: "ADD_EXERCISE_SUCCESS",
  ADD_EXERCISE_ERROR: "ADD_EXERCISE_ERROR",

  ADD_FOOD_SUCCESS: "ADD_FOOD_SUCCESS",
  ADD_FOOD_ERROR: "ADD_FOOD_ERROR",

  ADD_GOAL_SUCCESS: "ADD_GOAL_SUCCESS",
  ADD_GOAL_ERROR: "ADD_GOAL_ERROR",

  DELETE_GOAL_SUCCESS: "DELETE_GOAL_SUCCESS",
  DELETE_FOOD_SUCCESS: "DELETE_FOOD_SUCCESS",
  DELETE_EXERCISE_SUCCESS: "DELETE_EXERCISE_SUCCESS",

  DELETE_GOAL_ERROR: "DELETE_GOAL_ERROR",
  DELETE_FOOD_ERROR: "DELETE_FOOD_ERROR",
  DELETE_EXERCISE_ERROR: "DELETE_EXERCISE_ERROR",

  SET_LOADING: "SET_LOADING",
};
export const EXERCISEDATA = [
  {
    exercise: "Running",
    caloriesPerMinute: 10,
  },
  {
    exercise: "Cycling",
    caloriesPerMinute: 8,
  },
  {
    exercise: "Swimming",
    caloriesPerMinute: 9,
  },
  {
    exercise: "Jumping Rope",
    caloriesPerMinute: 12,
  },
  {
    exercise: "Yoga",
    caloriesPerMinute: 3,
  },
  {
    exercise: "Strength Training",
    caloriesPerMinute: 5,
  },
  {
    exercise: "Walking",
    caloriesPerMinute: 6,
  },
  {
    exercise: "Pilates",
    caloriesPerMinute: 4,
  },
  {
    exercise: "Hiking",
    caloriesPerMinute: 7,
  },
  {
    exercise: "Dancing",
    caloriesPerMinute: 8,
  },
  {
    exercise: "Rowing",
    caloriesPerMinute: 10,
  },
  {
    exercise: "Basketball",
    caloriesPerMinute: 9,
  },
  {
    exercise: "Tennis",
    caloriesPerMinute: 7,
  },
  {
    exercise: "Soccer",
    caloriesPerMinute: 8,
  },
  {
    exercise: "Elliptical Trainer",
    caloriesPerMinute: 7,
  },
  {
    exercise: "Martial Arts",
    caloriesPerMinute: 11,
  },
  {
    exercise: "Rock Climbing",
    caloriesPerMinute: 9,
  },
  {
    exercise: "Skiing",
    caloriesPerMinute: 10,
  },
  {
    exercise: "Snowboarding",
    caloriesPerMinute: 9,
  },
  {
    exercise: "CrossFit",
    caloriesPerMinute: 13,
  },
];
