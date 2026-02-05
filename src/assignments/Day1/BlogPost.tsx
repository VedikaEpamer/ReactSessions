type BlogPostProps = {
  title: string;
  content: string;
  isPublished: boolean;
};

const BlogPost = ({ title, content, isPublished }: BlogPostProps) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        border: "2px black",
        borderRadius: "5px",
        borderStyle: "dashed",
        backgroundColor: "cyan",
      }}
    >
      <h2>{title}</h2>

      {/* Ternary conditional rendering */}
      {isPublished ? (
        <p>{content}</p>
      ) : (
        <p style={{ color: "red" }}>This blog is not published yet.</p>
      )}

      {/* Logical AND conditional rendering */}
      {isPublished && <small style={{ color: "green" }}> Published</small>}
    </div>
  );
};

export default BlogPost;
