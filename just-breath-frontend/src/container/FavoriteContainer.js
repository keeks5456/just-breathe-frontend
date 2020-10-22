import React from "react";
import { connect } from "react-redux";
import { postBlogFavorites } from "../actions/favorite_blog_action";
import { authReducer } from "../reducers/index";
import { blogsReducer } from "../reducers/blogs_reducer";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import ReactPlayer from "react-player";
//transitions
import { AnimatePresence, motion } from "framer-motion";
import {pageTransitions} from '../pageTransition';

class UserFavorites extends React.Component {
  render() {

    console.log(this.props.favorite_blogs);
    const favExercises = this.props.favorite_exercises.map((exercise) =>(
      <div className="exercise-card-favorite" key={exercise.id}>
      <h3>{exercise.title}</h3>
      {
        <ReactPlayer
          className="react-player"
          url={exercise.img_url}
          width="100%"
          height="100%"
        />
      }
      <p>{exercise.description}</p>
      </div>
    ))
    const favBlogs = this.props.favorite_blogs.map((blog) => (
      <div className="blogs-card-favorite" key={blog.id}>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
          <FrontSide>
            <h3>{blog.title}</h3>
            <img className="blog-image" src={blog.img_url} alt={blog.name} />
          </FrontSide>

          <BackSide>
            <p>{blog.description}</p>
            <a href="null">Read More</a>
          </BackSide>
        </Flippy>
        {/*end of blogs div */}
        </div>
      )
    );
    return (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
         className="favorites-container">
        <h1 className="blogs-header">Favorite Blogs</h1>
        <div className="favorite-blogs">
          {favBlogs}
        </div>

        <h1 className="exercises-header">Favorite Exercises</h1>
          {favExercises}
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorite_blogs: state.authReducer.user.blogs,
    favorite_exercises: state.authReducer.user.exercises
  };
};

export default connect(mapStateToProps, { postBlogFavorites })(UserFavorites);
