const crypto = require("crypto");

async function generateHash(data, secret) {
  const hash = crypto.createHmac("sha256", secret).update(data).digest("hex");
  return hash;
}

let otpData = {};
async function generateOtp({
  digits = 4,
  expirySeconds = 30,
  identifier = "",
  secret = "",
} = {}) {
  const max = 10 ** digits;
  const min = 10 ** (digits - 1);
  const otp = crypto.randomInt(min, max);

  if (!identifier) {
    return otp;
  }

  const data = identifier + otp;
  const hash = await generateHash(data, secret);
  const otpExpiryMilliseconds = expirySeconds * 1000;

  otpData[identifier] = {
    hash,
    expiry: Date.now() + otpExpiryMilliseconds,
  };

  setTimeout(async () => {
    delete (await otpData[identifier]);
  }, otpExpiryMilliseconds);

  return otp;
}

async function verifyOtp({ identifier, otp, secret }) {
  const storedData = otpData[identifier];
  if (storedData) {
    if (storedData.expiry < Date.now()) return false;
    const generatedHash = await generateHash(identifier + otp, secret);
    if (generatedHash === storedData.hash) {
      return true;
    }
  }
  return false;
}


module.exports = {
  generateOtp,
  verifyOtp,
};
