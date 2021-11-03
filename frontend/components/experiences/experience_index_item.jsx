import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ExperienceIndexItem = ({ experience, currentUser, match }) => {
    const editButton = currentUser == match.params.id ? (
        <button className='edit-exp-but'>
            <i className="fas fa-pencil-alt"></i>
        </button>
    ) : null; 

    let strStart;
    let strEnd; 
    let expTime;
        // console.log(experience);
    if (experience.startDate) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const startDateExp = new Date(`${experience.startDate}`);

        const endDateExp = new Date(`${experience.endDate}`);

        const startMonth = months[startDateExp.getMonth()];
        const startYear = startDateExp.getFullYear();
        const endMonth = months[endDateExp.getMonth()];
        const endYear = endDateExp.getFullYear();

        strStart = `${startMonth} ${startYear}`;
        strEnd = experience.endDate ? `${endMonth} ${endYear}` : 'Present';

        expTime = <p className='exp-time'>{strStart} - {strEnd}</p>;
    };

    return (
        <div>
            <p className='exp-title'>{experience.title}</p>
            <p className='exp-type'>{experience.type}</p>
            <p className='exp-company'>{experience.company} <span className='gray-shade'>{experience.employmentType}</span></p>
            {expTime}
            <p className='exp-location'>{experience.location}</p>
            <p className='exp-description'>{experience.description}</p>
            {editButton}
        </div>
    )
    
}



const mSTP = ({ session: { currentUser } }) => ({
    currentUser
});

const mDTP = dispatch => ({

});

const ExperienceIndexItemContainer = withRouter(connect(mSTP, mDTP)(ExperienceIndexItem));

export default ExperienceIndexItemContainer;