import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!/^09\d{9}$/.test(phone)) {
      newErrors.phone = "شماره موبایل باید ۱۱ رقم و با 09 شروع بشه";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "فرمت ایمیل درست نیست";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundErrors = validate();
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      login();
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col border-3 border-maintext mt-[100px] md:px-[100px] md:py-[40px] px-[50px] py-[30px] rounded-[10px] bg-pink-100">
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-maintext">ورود یا ثبت نام</h2>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="mt-[20px] mb-2">
              لطفا شماره موبایل خود را وارد کنید
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`border-2 rounded-[5px] p-1 ${
                errors.phone ? "border-red-500" : "border-four"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[12px]">{errors.phone}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mt-[20px] mb-2">
              ایمیل خود را وارد کنید (اختیاری)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border-2 rounded-[5px] p-1 ${
                errors.email ? "border-red-500" : "border-four"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="border-2 border-second px-7 rounded-[5px] py-1 mt-7 hover:bg-three transition-colors duration-300 cursor-pointer"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
