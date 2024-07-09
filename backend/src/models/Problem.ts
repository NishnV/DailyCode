import { model, Schema } from "mongoose";

interface Problem {
    problem_id: number;
    name: string;
    difficulty: string;
    description: string;
}

const problemSchema = new Schema<Problem>({
    problem_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true }
});

export const Problem = model<Problem>('Problem', problemSchema);