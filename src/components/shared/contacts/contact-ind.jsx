import UserProfileImage from '../../../assets/media/avatars/300-1.jpg';

const IndividualContact = (props) => {
    return (
        <div className="d-flex align-items-center mb-5">
            <div className="symbol symbol-circle symbol-50px">
                <img src={UserProfileImage} alt="" />
            </div>
            <div className="d-flex flex-column ms-3">
                <a className="text-gray-800 text-hover-primary mb-1">{props.ind.name}</a>
                <span>{props.ind.email}</span>
            </div>
        </div>
    );
};

export default IndividualContact;
