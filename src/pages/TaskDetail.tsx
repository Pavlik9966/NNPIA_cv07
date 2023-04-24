import {useEffect, useState} from "react";
import {Task} from "../data/init-data";
import TaskCard from "../components/TaskCard"
import {useParams} from "react-router";

const TaskDetail = () => {
    const [data, setData] = useState<Task | undefined>();
    const {id} = useParams<'id'>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        debugger;
        fetchData(id!!);
    }, []);

    const fetchData = async (id: number | string) => {
        const backendUrl = import.meta.env.BACKEND_URL;
        const result = await fetch(`${backendUrl}/task/${id}`);

        setData(await (result.json()));
        setLoading(false);
    };

    return <div>
        {loading && <div>Loading...</div>}
        {data && <TaskCard task={data} onClick={() => {
        }}/>}
    </div>
};

export default TaskDetail;