import React, { useState, useEffect } from "react";

const InputFormV2 = ({
  label,
  unit,
  value,
  setValue,
  name,
  small,
  invalidFields,
  setInvalidFields,
  direction,
}) => {
  const [formattedValue, setFormattedValue] = useState("");

  // Hàm định dạng số theo hàng nghìn, triệu
  const formatNumber = (number) => {
    return new Intl.NumberFormat("vi-VN").format(number);
  };

  // Cập nhật giá trị được định dạng khi `value` thay đổi
  useEffect(() => {
    if (name === "priceNumber" || name === "areaNumber") {
      // Định dạng số cho 'priceNumber' và 'areaNumber'
      if (value) {
        const numericValue = value.toString().replace(/\./g, ""); // Xóa dấu chấm
        if (!isNaN(numericValue)) {
          setFormattedValue(formatNumber(numericValue)); // Định dạng số
        }
      } else {
        setFormattedValue(""); // Trường hợp giá trị rỗng
      }
    } else {
      // Trường hợp chuỗi text, không cần định dạng
      setFormattedValue(value || "");
    }
  }, [value, name]);

  // Xử lý sự kiện khi người dùng nhập liệu
  const handleInputChange = (e) => {
    const rawValue = e.target.value;

    if (name === "priceNumber" || name === "areaNumber") {
      // Xử lý định dạng cho trường số
      const numericValue = rawValue.replace(/\./g, ""); // Xóa dấu chấm
      if (numericValue === "") {
        setValue((prev) => ({ ...prev, [name]: "" })); // Xóa hết
      } else if (!isNaN(numericValue)) {
        setValue((prev) => ({ ...prev, [name]: numericValue })); // Cập nhật số
      }
    } else {
      // Xử lý cho trường text
      setValue((prev) => ({ ...prev, [name]: rawValue }));
    }
  };

  return (
    <div className={`flex ${direction ? direction : "flex-col"}`}>
      <label className="w-48 flex-none" htmlFor={name}>
        {label}
      </label>
      <div className="flex flex-auto flex-col items-center">
        <div className="flex w-full items-center">
          <input
            type="text"
            id={name}
            className={`${
              unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
            } outline-none border flex-auto border-gray-300 p-2`}
            value={formattedValue}
            onChange={handleInputChange}
            onFocus={() => setInvalidFields && setInvalidFields([])}
          />
          {unit && (
            <span className="p-2 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md bg-gray-200">
              {unit}
            </span>
          )}
        </div>
        {invalidFields?.some((item) => item.name === name) && (
          <small className="text-red-500 block w-full">
            {invalidFields?.find((item) => item.name === name)?.message}
          </small>
        )}
      </div>
      {small && <small className="opacity-70 whitespace-nowrap">{small}</small>}
    </div>
  );
};

export default InputFormV2;
