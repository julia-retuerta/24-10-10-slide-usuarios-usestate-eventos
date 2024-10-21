import { useState } from 'react';
import { USERS } from '../../constants/users';
import User from '../user/User';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const user = USERS[currentIndex];

  const firstUser = currentIndex === 0;
  const lastUser = currentIndex === USERS.length - 1;

  return (
    <div>
      <User
        key={user.userId}
        profileImage={user.profileImage}
        name={user.name}
        username={user.username}
        email={user.email}
      />

      <button onClick={() => previousUser(currentIndex, setCurrentIndex)} disabled={firstUser}>
        Previous
      </button>
      <button onClick={() => nextUser(currentIndex, setCurrentIndex)} disabled={lastUser}>
        Next
      </button>
    </div>
  );
};

const previousUser = (currentIndex, setCurrentIndex) => {
  setCurrentIndex(currentIndex - 1);
};

const nextUser = (currentIndex, setCurrentIndex) => {
  setCurrentIndex(currentIndex + 1);
};

export default Slider;
