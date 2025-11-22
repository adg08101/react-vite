import { useState } from "react";

export default function Form() {
  const formDefaultState = {
    user: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formDefaultState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleReset = () => {
    setForm(formDefaultState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handActivation = (e) => {
    const message = "activated";
    e.stopPropagation();
    console.log(`${e.target} ${message}`);
  };

  return (
    <div
      onClick={handActivation}
      className="p-6 max-w-sm mx-auto"
      style={{
        padding: "1.5rem",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginTop: "5%",
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        onClick={handActivation}
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={form.user}
          name="user"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={form.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
          onClick={handActivation}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={form.password}
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
        <button
          type="reset"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleReset}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
