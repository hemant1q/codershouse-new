const jwt = require("jsonwebtoken");
const refreshModel = require("../models/refresh-model");
const accessTokenSecret =
  "ae5a5fc8ad7261f253533affe31bd4ebedb904b8fe8507812492a4b5a9ad30b9a66b7bcb238e0705557c4f39f8ebba11f27edd242390419eb4a7c5d80918318e";
const refreshTokenSecret =
  "9736379f926fe4b66c591decf29af4c0ea8bd9a40e60e5bba35415cda10190409bfb1183749a5107204786b53cf63c7c65ddf79f36ece4b0da8f3fec1b7acac1";

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  }

  async storeRefreshToken(token, userId) {
    try {
      await refreshModel.create({
        token,
        userId,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  async verifyAccessToken(token) {
    return jwt.verify(token, accessTokenSecret);
  }
  async verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, refreshTokenSecret);
  }
  async findRefreshToken(userId, refreshToken) {
    return await refreshModel.findOne({
      userId: userId,
      token: refreshToken,
    });
  }

  async updateRefreshToken(userId, refreshToken) {
    return await refreshModel.updateOne(
      { userId: userId },
      { token: refreshToken }
    );
  }
  async removeToken(req, res, refreshToken) {
    await refreshModel.deleteOne({ token: refreshToken });
  }
}

module.exports = new TokenService();
