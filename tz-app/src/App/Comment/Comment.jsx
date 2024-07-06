import './Comment.css';

function Comment({ userName, userMail, userImage, massage,hidenComment }) {
    return (
        <div className={`${hidenComment ? 'comment_hiden' : `comment comment_${userName}`} `}>

            <div className='comment__user-container'>
                <img className='comment__user-image' src={userImage}></img>
                <div className='comment__user-info'>
                    <span className='comment__user-name'>{userName}</span>
                    <span className='comment__user-mail'>{userMail}</span>
                </div>
            </div>
            <p className='comment__massage'>{massage}</p>

        </div>
    )
};

export default Comment;