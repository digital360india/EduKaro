"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

const FormEduKaro = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "EduKaro - www.edukaro.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const airtablePayload = [
      {
        fields: {
          Name: formData.name,
          Mobile: formData.phone,
          Url: window.location.href,
        },
      },
    ];
    try {
      await base("counsellorForm").create(
        airtablePayload,
        function (err, records) {
          if (err) {
            console.error("Airtable Error:", err);
            alert("Airtable submission failed. Please try again.");
            return;
          }

          records.forEach(() => {
            console.log("Airtable submission successful!");
          });
        }
      );

      const emailResponse = await axios.post(
        "https://goedunodemailer.onrender.com/send-email",
        formData
      );

      if (emailResponse.status === 200) {
        toast.success("Form Submitted Successfully!");
        setFormData({
          name: "",
          phone: "",
          source: "EduKaro - www.edukaro.com",
        });
      } else {
        alert("Email submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[539px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/formbg.png"
            alt="School choice"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 md:w-fit w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="md:hidden block w-[226px] text-[20px]">
            Confuse to choose the Best School?
          </div>
          <h3 className="md:text-xl text-[12px] my-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7">
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded lg:w-[498px] sm:border-[#D9D9D9]"
            />
            <div className="flex w-full lg:w-[498px]">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  borderBottom: "2px solid #D9D9D9",
                }}
                buttonStyle={{
                  border: "2px solid #D9D9D9",
                }}
              />
            </div>

            <div className="md:pt-2 pt-8 cursor-pointer text-center">
              <button
                type="submit"
                disabled={loading}
                className={`md:w-[160px] md:h-[50px] md:px-0 px-8  bg-background-dark text-white p-2 rounded-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-[#442B6F]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormEduKaro;
