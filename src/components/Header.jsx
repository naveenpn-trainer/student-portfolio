import profileImg from '../assets/react.svg';
function Header() {
    return (
        <header>
            <img src={profileImg} alt="Profile"  />
            <h1>Naveen PN</h1>
            <p>Corporate Trainer | Data Engineer | Mentor</p>
        </header>
    );
}

export default Header;
