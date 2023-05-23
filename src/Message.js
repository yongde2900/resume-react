import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { request } from "./api";
import MoreAction from "./MoreAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Message(props) {
  const [user, setUser] = useState({});
  const [editComment, setEditComment] = useState(null);
  useEffect(() => {
    (async function () {
      const result = await request.post("http://localhost:80/api/auth/me");
      setUser(result.data);
    })();
  }, []);
  const comments = props.comments;

  function handleDelete(commentId) {
    (async function () {
      const result = await request.delete(
        `http://localhost:80/api/comments/${commentId}`
      );
    })();
    const newComments = comments.filter((comment) => comment.id !== commentId);
    props.setComments(newComments);
  }

  function handleEdit(event) {
    event.preventDefault();
    (async function () {
      const result = await request.put(
        `http://localhost:80/api/comments/${editComment}`,
        { message: event.target.comment.value }
      );
    })();
    const newComments = comments.map((comment) => {
      if (comment.id === editComment) {
        comment.message = event.target.comment.value;
      }
      return comment;
    });
    props.setComments(newComments);
    setEditComment(null);
  }
  return (
    <div className="bg-white">
      <div>
        <div className="-my-10">
          {comments.map((comment, commentIdx) => (
            <div
              key={comment.id}
              className="flex space-x-4 text-sm text-gray-500"
            >
              <div
                className={classNames(
                  commentIdx === 0 ? "" : "border-t border-gray-200",
                  "flex-1 py-10"
                )}
              >
                <div className="justify-between flex">
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900 text-left">
                      {comment.user.name}
                    </h3>
                    <p>
                      <time dateTime={comment.created_at}>
                        {comment.created_at}
                      </time>
                    </p>
                  </div>
                  <div className="text-right">
                    {user.id === comment.user.id ? (
                      <MoreAction
                        handleDelete={() => {
                          handleDelete(comment.id);
                        }}
                        setEditComment={() => {
                          setEditComment(comment.id);
                        }}
                      />
                    ) : null}
                  </div>
                </div>

                <div className=" mt-4  text-gray-500 text-left w-full">
                  {comment.id === editComment ? (
                    <form onSubmit={handleEdit}>
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={comment.message}
                      />
                      <div className="flex justify-end mt-4 ">
                        <button
                          type="submit"
                          className=" rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    <p>{comment.message}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
