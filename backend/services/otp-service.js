const crypto = require("crypto");
const hashService = require("./hash-service");

const smsSid = "AC59b1f60f073e7911ffb9ce19646c1ac1";
const smsAuthToken = "c71ec6925f62f55a98e9e0a322e36c93";
const twilio = require("twilio")(smsSid, smsAuthToken, {
  lazyLoading: true,
});
class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: "+14179002049",
      body: `Your codershouse OTP is ${otp}`,
    });
  }

  verifyOtp(hashedOtp, data) {
    let computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();
