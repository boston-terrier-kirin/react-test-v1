import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment, fetchComments } from 'actions/commentAction';

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

	const handleFetchComments = () => {
		dispatch(fetchComments());
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea value={comment} onChange={handleChange} />
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
			<button className="fetch-comments" onClick={handleFetchComments}>
				Fetch Comments
			</button>
		</div>
	);
};

export default CommentBox;
