import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { PropTypes } from 'prop-types';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.dataFromParent}</h1>
        <table>
          <thead>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Tag</th>
            <th>Date</th>
          </thead>
          <tbody>
            {this.props.tasks.map((task) => {
              return (
                <div>
                  <tr>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>{task.tag}</td>
                    <td>{task.date}</td>
                    <td>{task.due}</td>
                  </tr>
                </div>
              )
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export const TaskPrint = () => {
  const { projectId } = useParams();
  const projects = useSelector((state) => state.project);
  const project = projects.find((item) => item.id === projectId);

  const tasks = [...project.tasks];

  // const state = { data: "helo" }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="container">
        <button className="btn btn-primary" type="button" onClick={handlePrint}>
          <i className="fas fa-download"></i>Download
        </button>
      </div>
      <ComponentToPrint dataFromParent='state' tasks={tasks} ref={componentRef} />
    </>
  );
};

ComponentToPrint.propTypes = {
  dataFromParent: PropTypes.string,
  tasks: PropTypes.arrayOf,
}

ComponentToPrint.defaultProps = {
  dataFromParent: '',
  tasks: []
}

TaskPrint.propTypes = {
};

TaskPrint.defaultProps = {
};

export default TaskPrint;
