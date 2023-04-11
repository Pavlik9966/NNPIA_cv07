import {Task} from "../data/init-data";
import TaskCard from "./TaskCard";
import React from "react";
import {Col, Row} from "react-bootstrap";

interface Props {
    tasks: Array<Task>;
}

const TaskList = ({tasks}: Props) => {
    const taskClickHandle = (task: Task) => {
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
                {tasks.filter(task => !task.done)
                    .map(task => <TaskCard key={task.id} task={task} onClick={taskClickHandle}/>)}
            </Col>
            <Col>
                <h2>Done tasks</h2>
                {tasks.filter(task => task.done)
                    .map(task => <TaskCard key={task.id} task={task} onClick={taskClickHandle}/>)}
            </Col>
        </Row>
    </section>
};

export default TaskList;