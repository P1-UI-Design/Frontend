import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [parentCommentId, setParentCommentId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchComments = async (page = 1) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/comments/?shelter_id=${id}&page=${page}`);
            setComments(response.data);
            // You might need to update pagination data here, depending on the API response structure
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments(currentPage);
    }, [id, currentPage]);

    const postComment = async () => {
        try {
            const payload = {
                shelter_id: id,
                contents: newComment,
                ...(parentCommentId && { parent_id: parentCommentId }),
            };
            await axios.post('http://127.0.0.1:8000/comments/', payload);
            setNewComment('');
            setParentCommentId(null);
            fetchComments(); // Refresh comments list
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                        {/* Add more comment details as needed */}
                    </div>
                ))}
            </div>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here"
                />
                <button onClick={postComment}>Post Comment</button>
            </div>
            {/* Pagination controls */}
            <div>
                <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage}</span>
                <button onClick={() => setCurrentPage(p => p + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Comment;
