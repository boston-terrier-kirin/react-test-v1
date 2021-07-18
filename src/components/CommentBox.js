import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment } from 'actions/commentAction';

const CommentBox = () => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const handleChange = (event) => {
		setComment(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(saveComment(comment));
		setComment('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Add a Comment</h4>
			<textarea value={comment} onChange={handleChange} />
			<div>
				<button>Submit Comment</button>
			</div>
		</form>
	);
};

export default CommentBox;
