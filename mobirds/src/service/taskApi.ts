import { API_URL } from "../utils/constants";
import {Task, TaskFormData} from "../types";

async function ErrorMessage(response: Response, fallback : string): Promise<string> {
    try{
        const data = await response.json();
        return data.error || fallback;
    }catch {
        return fallback;
    }
}

async function fetchAllTasks(signal? : AbortSignal) : Promise<Task[]> {
    const response = await fetch(API_URL, { signal });
    if(!Response.ok) throw new Error("Erro ao carregar tarefas");
    return response.json();
}

async function crateTaskRequest(taskData: TaskFormData): Promise<Task> {

}