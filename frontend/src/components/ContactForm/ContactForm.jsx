import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState();

  async function addToDB(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    if (name.length < 3) {
      alert("Имя должно содержать не менее 3 символов");
      return;
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Номер телефона должен содержать 10 цифр");
      return;
    }

    let response = axios
      .post("http://127.0.0.1:5000/api/addClient", data)
      .then(function (response) {
        alert("Форма отправлена!");
        return response.data;
      })
      .catch(function (error) {
        alert(error.response.data.message);
        return error.response.data;
      });

    let result = await response;
    return result;
  }

  return (
    <form
      className=" max-h-[500px] bg-[#979292]/50 flex flex-col rounded-3xl items-center justify-around text-xl p-4"
      onSubmit={addToDB}
    >
      <input
        type="text"
        name="name"
        className="w-2/3 max-h-[110px] my-4 bg-[#c4c4c4] rounded-full p-4 mt-4 focus:outline-none focus:ring focus:border-orange-500"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="phone"
        className="w-2/3 max-h-[110px] my-4 bg-[#c4c4c4] rounded-full p-4 mt-4 focus:outline-none focus:ring focus:border-orange-500"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        type="submit"
        className="w-2/3 max-h-[75px]  bg-[#c4c4c4] rounded-lg p-4 mt-4 hover:outline-none hover:ring hover:border-[#ff6600]-500 active:text-white transition-all duration-200"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;
