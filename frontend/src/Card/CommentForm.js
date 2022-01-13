import { useRef } from "react";

const CommentForm = ({ onSubmit }) => {
  const commentRef = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(commentRef.current.value);
        commentRef.current.value = "";
      }}
      className="flex px-5 py-1 mt-2 border-t"
    >
      <input
        ref={commentRef}
        type="text"
        className="py-2 w-full outline-none text-neutral-600"
        placeholder="Add a comment..."
      />

      <input
        type="submit"
        value="Post"
        className="cursor-pointer font-medium text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-400"
      />
    </form>
  );
};

export default CommentForm;
