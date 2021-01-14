import React from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {homeObjFour} from '../../pages/Home/data';
import {
    BlogContainer,
    BlogItem,
    BlogImage,
    PostTime,
    Title,
    BlogCont,
    BlogContent,
    BlogTitle,
    BlogDesc
} from'./Blog.elements'

function Blog() {

    return (
        <>
            <BlogCont>
                <Title>Latest Sermons Notes</Title>
                <BlogContainer>
                    {
                        homeObjFour.map((blog) => {
                            return (
                                <BlogItem>
                                    <BlogImage src={blog.BLoging} alt={blog.blog_title} />
                                    <PostTime><FaRegCalendarAlt /> {blog.time}</PostTime>
                                    <BlogContent>
                                        <BlogTitle>{blog.blog_title}</BlogTitle>
                                        <BlogDesc>{blog.Desc}</BlogDesc>
                                    </BlogContent>
                                </BlogItem>                           
                            )
                        })
                    }
                </BlogContainer>
            </BlogCont>
        </>
    )
}

export default Blog
