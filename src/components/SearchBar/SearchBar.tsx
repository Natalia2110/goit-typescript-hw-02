// import React from "react";
import { useState, FormEvent, FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [notification, setNotification] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.input.value.trim();
    // console.log(event.currentTarget.elements.input.value);

    if (inputValue === "") {
      setNotification(true);
    } else {
      setNotification(false);
      onSubmit(inputValue);
      form.reset();
    }
  };

  const notify = () =>
    toast.error("Введіть текст для пошуку зображень, форма порожня", {
      duration: 2000,
    });

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="input"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn} onClick={notify}>
          <IoSearchOutline size="24" className={css["search-icon"]} />
        </button>
      </form>
      {notification && (
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      )}
    </header>
  );
};

export default SearchBar;
