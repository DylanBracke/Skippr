import Exercise from "./excerciseModel";

interface ActiveExercise {
    id: number;
    duration: number;
    exercise: Exercise;
}

export default ActiveExercise;