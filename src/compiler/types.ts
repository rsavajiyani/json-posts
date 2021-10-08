import { RouteComponentProps } from 'react-router-dom';
export type Post = { userId: number; id: number; title: string; body: string };
export type PostCardProps = { post: Post };
export type Comments = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};
export interface PostDetailsProps extends RouteComponentProps {}
