import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
		deadline: '',
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id, state.deadline));
		setState({
			task: '',
			deadline: '',
		});
	};

	return (
		<div>
			<div className='addtask'>
				<form action='' onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						placeholder='project name'
						onChange={handleChange}
						value={state.task}
					/>
					<input
						type='text'
						name='deadline'
						placeholder='project deadline'
						onChange={handleChange}
						value={state.deadline}
					/>
					
					<button className='button'>Add</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;
