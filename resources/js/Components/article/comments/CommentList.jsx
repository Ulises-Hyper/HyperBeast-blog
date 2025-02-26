// import React, { useState } from "react";

// const CommentItem = ({ comment, onReply, onEdit, onDelete }) => {
//   const [likes, setLikes] = useState(comment.likes || 0);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newContent, setNewContent] = useState(comment.content);
//   const [showReplyBox, setShowReplyBox] = useState(false);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleEdit = () => {
//     setIsEditing(false);
//     onEdit(comment.id, newContent);
//   };

//   const handleDelete = () => {
//     onDelete(comment.id);
//   };

//   const handleReply = (replyContent) => {
//     setShowReplyBox(false);
//     onReply(comment.id, replyContent);
//   };

//   return (
//     <div className="border border-gray-200 rounded-lg p-4 my-4 bg-white shadow-sm">
//       <div className="flex items-center space-x-4">
//         <img
//           src={comment.avatar}
//           alt="Avatar"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <strong className="text-lg text-gray-900">{comment.username}</strong>
//           <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleString()}</p>
//         </div>
//       </div>
//       <div className="mt-4">
//         {isEditing ? (
//           <textarea
//             value={newContent}
//             onChange={(e) => setNewContent(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
//           />
//         ) : (
//           <p className="text-gray-700 text-base leading-relaxed">{comment.content}</p>
//         )}
//       </div>
//       <div className="mt-4 flex items-center space-x-4 text-sm">
//         <button
//           onClick={handleLike}
//           className="flex items-center text-gray-500 hover:text-blue-500 transition-colors"
//         >
//           <span className="material-icons mr-1">thumb_up</span>
//           Like ({likes})
//         </button>
//         <button
//           onClick={() => setShowReplyBox(!showReplyBox)}
//           className="flex items-center text-gray-500 hover:text-blue-500 transition-colors"
//         >
//           <span className="material-icons mr-1">reply</span>
//           Reply
//         </button>
//         <button
//           onClick={() => setIsEditing(true)}
//           className="flex items-center text-gray-500 hover:text-green-500 transition-colors"
//         >
//           <span className="material-icons mr-1">edit</span>
//           Edit
//         </button>
//         <button
//           onClick={handleDelete}
//           className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <span className="material-icons mr-1">delete</span>
//           Delete
//         </button>
//         {isEditing && (
//           <button
//             onClick={handleEdit}
//             className="flex items-center text-gray-500 hover:text-blue-500 transition-colors"
//           >
//             <span className="material-icons mr-1">save</span>
//             Save
//           </button>
//         )}
//       </div>

//       {showReplyBox && (
//         <div className="mt-4">
//           <textarea
//             placeholder="Write a reply..."
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
//             onBlur={(e) => handleReply(e.target.value)}
//           />
//         </div>
//       )}

//       <div className="mt-4 pl-6">
//         {comment.replies.map((reply) => (
//           <CommentItem
//             key={reply.id}
//             comment={reply}
//             onReply={onReply}
//             onEdit={onEdit}
//             onDelete={onDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const CommentList = () => {
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       username: "John Doe",
//       avatar: "https://via.placeholder.com/40",
//       content: "This is a comment",
//       likes: 0,
//       replies: [],
//       date: Date.now(),
//     },
//   ]);

//   const addReply = (parentId, replyContent) => {
//     const newComments = comments.map((comment) => {
//       if (comment.id === parentId) {
//         return {
//           ...comment,
//           replies: [
//             ...comment.replies,
//             {
//               id: Date.now(),
//               username: "Jane Doe",
//               avatar: "https://via.placeholder.com/40",
//               content: replyContent,
//               likes: 0,
//               replies: [],
//               date: Date.now(),
//             },
//           ],
//         };
//       } else if (comment.replies.length > 0) {
//         return {
//           ...comment,
//           replies: comment.replies.map((reply) =>
//             reply.id === parentId
//               ? {
//                   ...reply,
//                   replies: [
//                     ...reply.replies,
//                     {
//                       id: Date.now(),
//                       username: "Jane Doe",
//                       avatar: "https://via.placeholder.com/40",
//                       content: replyContent,
//                       likes: 0,
//                       replies: [],
//                       date: Date.now(),
//                     },
//                   ],
//                 }
//               : reply
//           ),
//         };
//       }
//       return comment;
//     });

//     setComments(newComments);
//   };

//   const editComment = (id, newContent) => {
//     const newComments = comments.map((comment) => {
//       if (comment.id === id) {
//         return { ...comment, content: newContent };
//       } else if (comment.replies.length > 0) {
//         return {
//           ...comment,
//           replies: comment.replies.map((reply) =>
//             reply.id === id ? { ...reply, content: newContent } : reply
//           ),
//         };
//       }
//       return comment;
//     });
//     setComments(newComments);
//   };

//   const deleteComment = (id) => {
//     const deleteRecursive = (commentsArray) => {
//       return commentsArray.filter((comment) => {
//         if (comment.replies.length > 0) {
//           comment.replies = deleteRecursive(comment.replies);
//         }
//         return comment.id !== id;
//       });
//     };

//     setComments(deleteRecursive(comments));
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
//       {comments.map((comment) => (
//         <CommentItem
//           key={comment.id}
//           comment={comment}
//           onReply={addReply}
//           onEdit={editComment}
//           onDelete={deleteComment}
//         />
//       ))}
//     </div>
//   );
// };

// export default CommentList;
