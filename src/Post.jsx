export default function Post({ post }) {
  const { title, body } = post;
  return (
    <div className="postbox">
      <h3>Title: {title}</h3>
      <p>Description: {body}</p>
    </div>
  );
}
