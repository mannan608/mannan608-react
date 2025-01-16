import Lottie from 'lottie-react';
import React from 'react';

const AnimationSkill = ({ animationPath }) => {
    return (
        <div onClick={() => null}>
            <Lottie
                animationData={animationPath}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};

export default AnimationSkill;
