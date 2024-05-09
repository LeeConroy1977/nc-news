import { useState } from "react";
import styles from "../styles/userForm.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const UserForm = ({ userAvatarSelection, setUserAvatarSelection, userObj }) => {
  const { avatar_url, name, username } = userAvatarSelection;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (avatar_url && name && username) {
      setUser(userAvatarSelection);

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
        disabled
        placeholder={username}
        name="username"
        id="userName"
        value={username}
      />
      <button className={styles.formBtn} onClick={handleNavagtionClick}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;
