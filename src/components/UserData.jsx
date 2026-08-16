
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "./cookieUtils";
import Menu from "./Menu";
import Footer from "./Footer";
import { FaRegCheckCircle } from "react-icons/fa";

export default function UserData() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData({
      firstName: getCookie("firstName"),
      lastName: getCookie("lastName"),
      gender: getCookie("gender"),
      birthDate: getCookie("birthDate"),
      address: getCookie("address"),
    });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  }

  function validate() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "نام رو وارد کن";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "نام خانوادگی رو وارد کن";
    }

    if (!formData.gender) {
      newErrors.gender = "جنسیت رو انتخاب کن";
    }

    if (formData.birthDate) {
      const selectedDate = new Date(formData.birthDate);
      const today = new Date();
      if (selectedDate > today) {
        newErrors.birthDate = "تاریخ تولد نمی‌تونه تو آینده باشه";
      }
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundErrors = validate();
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      setSaved(false);
      return;
    }

    setCookie("firstName", formData.firstName);
    setCookie("lastName", formData.lastName);
    setCookie("gender", formData.gender);
    setCookie("birthDate", formData.birthDate);
    setCookie("address", formData.address);

    setSaved(true);
  }

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[17px]">اطلاعات کاربری</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-3 mt-3"
        >
          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-gray-600">نام:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`border-2 rounded-[5px] w-[300px] h-[30px] ${
                errors.firstName ? "border-red-500" : "border-second"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-[12px]">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-gray-600">نام خانوادگی:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`border-2 rounded-[5px] w-[300px] h-[30px] ${
                errors.lastName ? "border-red-500" : "border-second"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-[12px]">{errors.lastName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-gray-600">جنسیت:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`border-2 rounded-lg px-5 py-1 outline-none ${
                errors.gender ? "border-red-500" : "border-four"
              }`}
            >
              <option value="">انتخاب کنید</option>
              <option value="female">زن</option>
              <option value="male">مرد</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-[12px]">{errors.gender}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-gray-600">تاریخ تولد:</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={`border-2 rounded-[5px] w-[300px] h-[30px] ${
                errors.birthDate ? "border-red-500" : "border-second"
              }`}
            />
            {errors.birthDate && (
              <p className="text-red-500 text-[12px]">{errors.birthDate}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-gray-600">آدرس:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="border-2 border-four rounded-lg px-10 py-2 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-second text-black rounded-lg py-2 px-4 cursor-pointer hover:bg-maintext hover:text-white transition-colors duration-300 mt-2 text-[14px]"
          >
            ذخیره اطلاعات
          </button>

          {saved && (
            <p className="text-green-600 text-center mt-4 flex flex-row items-center justify-center gap-1">
              <FaRegCheckCircle />
              اطلاعات با موفقیت ذخیره شد
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}