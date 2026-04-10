import React from "react";
import Containar from "../Containar";

const About = () => {
  return (
    <>
      <div className="bg-[#fffbeb] text-black py-10">
        <Containar>
            <h2 className="text-center font-bold text-4xl py-10">About </h2>
          <div className="">
            <p className="">
              চাষি বাজার একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম, যার লক্ষ্য হলো নিত্যপ্রয়োজনীয় পণ্যের সঠিক এবং হালনাগাদ বাজারদর সাধারণ মানুষের হাতের নাগালে পৌঁছে দেওয়া। প্রতিদিনের বাজারের অস্থিরতা এবং সঠিক তথ্যের অভাবে সাধারণ ক্রেতাদের যে সমস্যার সম্মুখীন হতে হয়, তা নিরসনেই আমাদের এই ক্ষুদ্র প্রচেষ্টা।
            </p>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default About;
