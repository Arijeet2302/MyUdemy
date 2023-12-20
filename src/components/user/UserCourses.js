import React, { useContext, useEffect, useState } from 'react'
import "../user/usercourses.css";
import UserContext from '../../services/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Star, StarHalf } from '@mui/icons-material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const UserCourses = () => {

    const [courseItems, setCourseItems] = useState([]);
    const { User } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://myudemy-backend.vercel.app/user/course/show/", {
                    params: {
                        uid: User?.uid,
                    }
                });
                setCourseItems(res.data);
            } catch (e) {
                console.error("Error while fetching: ", e);
            }
        }
        fetchData();
    })

    const handlecourse = () => {
        navigate("/course");
    }

    return (
        <div className="course-container">
            <h2>Your Courses</h2>
            {courseItems.length === 0 ? (
                <>
                    <p className="course-empty">No courses yet</p>
                    <button className='new-btn' onClick={() => navigate("/")}>Add new courses</button>
                </>
            ) : (
                <div>
                    {courseItems.map((item) => (
                        <div key={item.course_name} className="course-item" onClick={handlecourse}>
                            <img src={item.image} alt={item.course_name} />
                            <div className='course-details'>
                                <p className="course-item-content">{item.course_name}</p>
                                <p className="course-item-content">By : {item.author_name}</p>
                                <div className='rating'>
                                    <p className="course-item-content">{item.rating}</p>
                                    <span className="stars">
                                        {Array.from({ length: parseInt(item.rating) }, (_, index) => (
                                            <div id='star' key={index}>
                                                <Star/>
                                            </div>
                                        ))}
                                        <StarHalf id='halfstar'/>
                                    </span>
                                </div>
                                <p className="course-item-content">Duration: 3:00:00hrs</p>
                            </div>
                            <div className='arrow'><ArrowForwardIosRoundedIcon /></div>
                        </div>
                    ))}
                    <div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserCourses
