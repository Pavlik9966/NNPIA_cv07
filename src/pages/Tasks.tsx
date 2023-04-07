import {Task} from "../data/init-data";
import TaskCard from "../components/TaskCard";
import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";

interface Props {
    tasks: Array<Task>;
}

const Tasks = ({tasks}: Props) => {
    const [taskList, setTaskList] = useState<Array<Task>>(tasks)

    const taskClickHandle = (task: Task) => {
        task.done = !task.done;
        setTaskList([...taskList]);
    }

    return <section>
        <Row className="text-center">
            <Col>
                <h1>TODO List</h1>
            </Col>
        </Row>
        <Row className="text-center">
            <Col>
                <h2>Current tasks</h2>
                {taskList.filter(task => !task.done)
                    .map(task => <TaskCard key={task.id} task={task} onClick={taskClickHandle}/>)}
            </Col>
            <Col>
                <h2>Done tasks</h2>
                {taskList.filter(task => task.done)
                    .map(task => <TaskCard key={task.id} task={task} onClick={taskClickHandle}/>)}
            </Col>
        </Row>
    </section>
};

export default Tasks;