import ActiveExercise from "./activeExcerciseModel";

interface Workout {
    id: number;
    name: string;
    picture: string;
    isspecial: boolean;
    times_used: number;
    created_at: string;
    last_used: string;
    rest_period: number;
    exercises: ActiveExercise[];
}

export default Workout;