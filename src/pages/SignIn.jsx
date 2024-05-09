import { useState } from "react";
import AvatarList from "../components/AvatarList";
import SignInCard from "../components/SignInCard";
import styles from "../styles/signIn.module.css";

const avatars = [
  {
    id: 1,
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
  },
  {
    id: 2,
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
    name: "Paul Grump",
  },
  {
    id: 3,
    avatar_url:
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
    name: "Amy Happy",
  },
  {
    id: 4,

    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
    name: "Peter Messy",
  },
  {
    id: 5,
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
    name: "Gemma Bump",
  },
  {
    id: 6,
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    name: "Jess Jelly",
  },
];

const userObj = {
  avatar_url: "",
  name: "",
  username: "",
};

const SignIn = () => {
  const [userSelection, setUserSelection] = useState(userObj);
  const [userAvatarSelection, setUserAvatarSelection] = useState({
    avatar_url: "",
    name: "",
    username: "",
  });

  function handleClick(id) {
    console.log(typeof id);
    avatars.map((avatar) => {
      if (id === avatar.id) {
        setUserAvatarSelection(
          (obj) =>
            (obj = { ...obj, avatar_url: avatar.avatar_url, name: avatar.name })
        );
      }
    });
  }

  return (
    <div className={styles.signIn}>
      <SignInCard
        avatars={avatars}
        handleClick={handleClick}
        userAvatarSelection={userAvatarSelection}
        setUserAvatarSelection={setUserAvatarSelection}
        setUserSelection={setUserSelection}
        userObj={userObj}
      />
    </div>
  );
};

export default SignIn;
