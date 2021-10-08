export const PostComment = ({ comment }) => {
	const { name, email, body } = comment;
	return (
		<div className="row">
			<div className="col s12 ">
				<div>
					<span className="material-icons">account_circle</span> {name}
				</div>
				<div>
					<span className="material-icons">email</span> {email}
				</div>
				<div>
					<span className="material-icons">comment</span> {body}
				</div>
			</div>
		</div>
	);
};
