import dotenv from "dotenv";
dotenv.config();

export const OTP_LENGTH = 6;
export const OTP_CONFIG = {
  upperCaseAlphabets: false,
  specialChars: false,
};

export const MAIL_SETTINGS = {
  service: "gmail",
  auth: {
    user: "devbhohra9720@gmail.com",
    pass: "enfmncjxwynkormp",
  },
};
