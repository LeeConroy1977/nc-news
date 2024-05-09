import { useState } from "react";
import styles from "../styles/userForm.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const UserForm = ({
  userAvatarSelection,
  setUserAvatarSelection,
  setUserSelection,
  userObj,
}) => {
  const { avatar_url, name, username } = userAvatarSelection;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserAvatarSelection((obj) => (obj = { ...obj, [name]: value }));
  }

  console.log(userAvatarSelection);

  function handleSubmit(e) {
    e.preventDefault();
    if (avatar_url && name && username) {
      setUser(userAvatarSelection);
      console.log(user);
      setUserAvatarSelection(userObj);
    }
  }

  function handleNavagtionClick() {
    navigate(-1);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="Image_url">Image URL</label>
      <input
        type="text"
        placeholder={avatar_url}
        disabled
        name="avatar_url"
        id="avatar_url"
        value={avatar_url}
      />
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        placeholder={name}
        disabled
        name="name"
        id="Name"
        value={name}
      />
      <label htmlFor="UserName">UserName</label>
      <input
        type="text"
        required
        name="username"
        id="userName"
        value={userAvatarSelection.username}
        onChange={handleChange}
      />
      <button className={styles.formBtn} onClick={handleNavagtionClick}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;
