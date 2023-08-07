import React from 'react';

type ProfileInfoType = {

}
const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHRzP0QJoXUth7GgmlDljIchrMAqR0eUTQA&usqp=CAU" alt=""/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;