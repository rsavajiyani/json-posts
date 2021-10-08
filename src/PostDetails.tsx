import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PostCard } from './PostCard';
import { PostComment } from './PostComment';
import { Comments, PostDetailsProps } from './compiler/types';
import { Breadcrumb, Col, Preloader } from 'react-materialize';

export const PostDetails = (props: PostDetailsProps) => {
	const [postComments, setPostComments] = useState<Comments[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	//@ts-ignore
	const { post } = props.location.state;

	useEffect(() => {
		getComments(post.id);
		setIsLoading(false);
	}, [post]);

	const getComments = async (postId?: number) => {
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
			.then((response) => response.json())
			.then((json) => {
				setPostComments(json);
				setIsLoading(false);
			})
			.catch((e) => {
				Swal.fire({
					title: 'Error fetching post details',
					text: e.message,
					icon: 'error',
				});
			});
	};

	return (
		<div className="container">
			<div className="post-details">
				<Breadcrumb className="blue-grey darken-1" cols={12}>
					<Link to="/">Posts</Link>
					<a>Post {post.id} Details</a>
				</Breadcrumb>
				{isLoading ? (
					<div className="center">
						<Col s={4}>
							<Preloader active color="blue" flashing={false} size="small" />
						</Col>
					</div>
				) : (
					<div>
						<PostCard post={post} />
						<h4
							className="light-blue-text darken-1
"
						>
							Comments
						</h4>
						{postComments.map((comment) => (
							<PostComment comment={comment} key={comment.id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};
