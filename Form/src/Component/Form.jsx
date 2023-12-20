import React, { useState } from 'react';

const Form = () => {
     const [comment, setComment] = useState('');
     const [commentsList, setCommentsList] = useState([]);

     const handleInputChange = (event) => {
          setComment(event.target.value);
     };

     const handleSubmit = (event) => {
          event.preventDefault();
          if (comment.trim() !== '') {
               setCommentsList([...commentsList, comment]);
               setComment('');
          }
     };

     return (
          <div className='text-center' >
               <form onSubmit={handleSubmit}>
                    <table border={1}  className=' bg-info h-50 w-25'>
                         <textarea
                              rows={4}
                              cols={30}
                              className='mt-5'
                              placeholder="your comment..."
                              value={comment}
                              onChange={handleInputChange}
                         ></textarea><br /><br />
                         <button className='btn btn-dark mb-2 px-5 fw-bold '           type="submit">Submit</button>
                    </table>
               </form>

               <div>
                    <h3 className='mt-2'>Comments</h3>
                    {commentsList.length === 0 ? (
                         <p>No comments yet.</p>
                    ) : (
                         <ul className='fw-bold fs-2'>
                              {commentsList.map((c, index) => (
                                   <p key={index}>{c}</p>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
};

export default Form;