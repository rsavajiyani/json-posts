import { Link } from 'react-router-dom';
import { PostCardProps } from './compiler/types';

export const PostCard = ({ post }: PostCardProps) => {
	const { id, title, body } = post;
	return (
		<div className="col s12 m6">
			<div className="card">
				<div className="card-content ">
					<Link to={{ pathname: `post/${id}`, state: { post } }}>
						<span className="card-title">{title}</span>
					</Link>
					<p>{body}</p>
				</div>
			</div>
		</div>
	);
};
