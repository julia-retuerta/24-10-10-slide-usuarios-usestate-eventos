const User = ({ profileImage, name, username, email }) => {
  return (
    <div>
      <img src={profileImage} alt='' />
      <h1>Name: {name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
