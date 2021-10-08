import { useEffect, useState } from 'react';
import { Breadcrumb, Col, Preloader } from 'react-materialize';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Post } from './compiler/types';
import { PostCard } from './PostCard';

export const PostList = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				setPosts(json);
				setIsLoading(false);
			})
			.catch((e) => {
				Swal.fire({
					title: 'Error fetching posts',
					text: e.message,
					icon: 'error',
				});
			});
	};

	return (
		<div className="container">
			<Breadcrumb className="blue-grey darken-1" cols={12}>
				<Link to="/">Posts</Link>
			</Breadcrumb>
			<h1 className="title center">Posts</h1>
			{isLoading ? (
				<div className="center">
					<Col s={4}>
						<Preloader active color="blue" flashing={false} size="small" />
					</Col>
				</div>
			) : (
				<div>
					{posts.map((post) => (
						<PostCard post={post} key={post.id} />
					))}
				</div>
			)}
		</div>
	);
};
