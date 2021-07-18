import { useSelector } from 'react-redux';

const CommentList = () => {
	const comments = useSelector((state) => state.comments);

	const commentList = comments.map((comment, index) => (
		<li key={index}>{comment}</li>
	));

	return (
		<div>
			<ul>{commentList}</ul>
		</div>
	);
};

export default CommentList;
