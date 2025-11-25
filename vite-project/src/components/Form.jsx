import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Form.css";

export default function Form() {
  const navigate = useNavigate();

  const formDefaultState = {
    user: "",
    email: "",
    password: "",
    country: "",
  };

  const formErrorDefaultState = {
    userError: "",
    emailError: "",
    passwordError: "",
    countryError: "",
  };

  const [form, setForm] = useState(formDefaultState);
  const [formError, setFormError] = useState(formErrorDefaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...formErrorDefaultState };

    for (const key in form) {
      if (form[key].trim() === "") {
        newErrors[`${key}Error`] = `Error on field ${key}`;
      }
    }

    setFormError(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err.length > 0);
    if (hasErrors) return;

    console.log("Valid form:", form);
    navigate("/shopping");
  };

  const handleReset = () => {
    setForm(formDefaultState);
    setFormError(formErrorDefaultState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="user"
            value={form.user}
            onChange={handleChange}
            autoComplete="username"
          />
          {formError.userError && (
            <span className="error">{formError.userError}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {formError.emailError && (
            <span className="error">{formError.emailError}</span>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {formError.passwordError && (
            <span className="error">{formError.passwordError}</span>
          )}
        </div>

        {/* Country Select */}
        <div className="form-group">
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="country-select"
          >
            <option value="">Select your country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {formError.countryError && (
            <span className="error">{formError.countryError}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="button-row">
          <button type="submit" className="btn primary">
            Send
          </button>
          <button type="button" className="btn secondary" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

/* Full Country List */
const countries = [
  "Argentina", "Australia", "Austria", "Belgium", "Bolivia", "Brazil", "Canada",
  "Chile", "China", "Colombia", "Costa Rica", "Cuba", "Denmark", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Finland", "France", "Germany", "Greece",
  "Guatemala", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
  "Ireland", "Israel", "Italy", "Japan", "Kenya", "Luxembourg", "Mexico",
  "Netherlands", "New Zealand", "Nicaragua", "Norway", "Panama", "Paraguay",
  "Peru", "Poland", "Portugal", "Romania", "Russia", "South Africa", "South Korea",
  "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom",
  "United States", "Uruguay", "Venezuela"
];
