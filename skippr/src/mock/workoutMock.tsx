import Workout from "../model/workoutModel";
import ACTIVE_EXCERCISE_MOCK from "./activeExcersiceMock";

const WORKOUT_MOCK : Workout[] = [{
    id: 1,
    name: "Chest Day",
    picture: "https://www.muscleandfitness.com/wp-content/uploads/2019/10/Chest-Workout-Header.jpg",
    isspecial: false,
    times_used: 0,
    created_at: "2021-07-01",
    last_used: "2021-07-01",
    rest_period: 60,
    exercises: [
        ACTIVE_EXCERCISE_MOCK[0],
    ]
}];

export default WORKOUT_MOCK;