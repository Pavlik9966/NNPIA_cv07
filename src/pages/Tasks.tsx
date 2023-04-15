import {Task} from "../data/init-data";
import {useEffect, useState} from "react";
import TaskList from "../components/TaskList";
import axios from "axios/index";

interface Props {
    tasks: Array<Task>;
}

/*
 * CORS (Cross-Origin Resource Sharing) is a web browser security policy that controls how websites can communicate
 * with resources on other domains. CORS allows websites to access limited resources on other sources based on
 * defined rules. This mechanism prevents Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks by
 * enforcing policies that allow only appropriate sources to access restricted resources on the server. In summary,
 * CORS policy helps protect web applications from XSS and CSRF attacks by setting rules for accessing resources from
 * other domains.
 * */

const Tasks = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const backendUrl = import.meta.env.BACKEND_URL;
        // let response = null;
        let responseAxios = null;

        try {
            // response = await fetch(`${backendUrl}/task`);
            responseAxios = await axios.get(`${backendUrl}/task`);
        } catch (e: any) {
            setError(e.message);
            setTasks([]);
        }

        setLoading(false);

        // if (response && response.ok) {
        //     const tasks = await response.json();
        //     setTasks(tasks);
        // }

        if (responseAxios && responseAxios.status === 200) {
            const tasksAxios = await responseAxios.data as Array<Task>;
            setTasks(tasksAxios)
        }
    };

    return <div>
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-danger">Loading...</div>}
        <TaskList tasks={tasks}/>
    </div>
};

export default Tasks;