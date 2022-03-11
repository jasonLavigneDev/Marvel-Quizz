import React from 'react';

const ProgressBar = ({ idQuestion, maxQuestions }) => {

    const getWidth = (totalQuestions, questionId) => {
        return (100 / totalQuestions) * questionId;
    };

    const actualQuestion = idQuestion + 1;
    const progressPercent = getWidth(maxQuestions, actualQuestion);
    console.log(progressPercent);

    return (
        <>
            <div className="percentage">
                <div class="progressPercent">{`Question : ${actualQuestion} / ${maxQuestions}`}</div>
                <div class="progressPercent">{`Progression: ${progressPercent}%`}</div>
            </div>
            <div className="progressBar">
                <div class="progressBarChange" style={{ width: `${progressPercent}%` }}></div>
            </div>
        </>
    );
};

export default React.memo(ProgressBar);