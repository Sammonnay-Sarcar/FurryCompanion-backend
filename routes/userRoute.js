const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getUserDetailAdmin,
  updateUserRole,
  deleteUser,
  addAdress,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/addAddress").post(isAuthenticatedUser, addAdress);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/allUsers")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getUserDetailAdmin)
  .put(isAuthenticatedUser, authorizeRoles("Admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteUser);
module.exports = router;
