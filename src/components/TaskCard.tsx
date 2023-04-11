import {Task} from "../data/init-data";
import React from "react";
import {Card, Form, Table} from "react-bootstrap";

interface Props {
    onClick: (task: Task) => void;
    task: Task;
}

const TaskCard = ({onClick, task}: Props) => {
    const checkboxChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.done = event.target.checked;

        onClick(task);

        console.table(task);
    };

    return <Card className="m-3">
        <Card.Header>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
        </Card.Header>
        <Card.Body>
            <Table bordered>
                <thead>
                <tr>
                    <th>Date of creation</th>
                    <th>Date of update</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{new Date(task.creationDate).toISOString()}</td>
                    <td>{new Date(task.updateDate).toISOString()}</td>
                </tr>
                </tbody>
            </Table>
        </Card.Body>
        <Card.Footer className="text-start">
            <Form>
                <Form.Check
                    label={task.done ? "Done" : ""}
                    type="checkbox"
                    name="myCheckbox"
                    value="myCheckbox"
                    checked={task.done}
                    onChange={checkboxChangeHandle}
                    id="myCheckbox"
                />
            </Form>
        </Card.Footer>
    </Card>
};

export default TaskCard;