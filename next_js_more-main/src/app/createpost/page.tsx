"use client";
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
  
      if (response.ok) {
        // หลังจากสร้างโพสต์เรียบร้อย
        console.log('Post created successfully');
        // ทำการเปลี่ยนเส้นทางหรือทำอย่างอื่นตามต้องการ
      } else {
        // กรณีเกิดข้อผิดพลาดในการสร้างโพสต์
        console.error('Failed to create post');
      }
    } catch (error) {
      // กรณีเกิดข้อผิดพลาดในการเรียก API
      console.error('Error creating post:', error);
    }
  };
  

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
