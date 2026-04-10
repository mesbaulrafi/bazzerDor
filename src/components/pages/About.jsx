import React from "react";
import Containar from "../Containar";

const About = () => {
  return (
    <>
      <div className="bg-[#fffbeb] text-black py-10">
        <Containar>
          <h2 className="text-center font-bold text-4xl py-10">About </h2>
          <div class="  p-8">
            <h2 class="text-xl font-bold mb-4">আমাদের উদ্দেশ্য</h2>

            <p class="mb-4">
              বাজারে পণ্যের দাম প্রতিনিয়ত পরিবর্তনশীল। অনেক সময় সঠিক দাম না
              জানার কারণে ক্রেতারা বিভ্রান্ত হন। চাষি বাজার-এর মাধ্যমে আমরা
              চেষ্টা করি:
            </p>

            <ul class="list-disc list-inside space-y-4 ml-2">
              <li>
                <span class="font-bold">সঠিক বাজারদর:</span> প্রতিদিনের চাল,
                ডাল, তেল, সবজিসহ অন্যান্য জরুরি পণ্যের বর্তমান দাম প্রদর্শন করা।
              </li>
              <li>
                <span class="font-bold">স্বচ্ছতা বজায় রাখা:</span> আগের দিনের
                তুলনায় দাম বেড়েছে নাকি কমেছে, তা শতাংশের (Percentage) হিসেবে
                পরিষ্কারভাবে তুলে ধরা।
              </li>
              <li>
                <span class="font-bold">সহজ এক্সেস:</span> মোবাইল এবং ডেস্কটপ
                উভয় ডিভাইসে সহজে ব্যবহারযোগ্য একটি ইন্টারফেস প্রদান করা যাতে যে
                কেউ দ্রুত তথ্য পেতে পারেন।
              </li>
            </ul>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default About;
