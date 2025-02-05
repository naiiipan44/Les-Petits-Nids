import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Import files for routes
import parentActions from "./modules/parent/parentActions";
import authentificationActions from "./modules/authentification/authentificationActions";
import bookingActions from "./modules/booking/bookingActions";
import userActions from "./modules/user/userActions";
import validate, { parentFolderValidator } from "./service/validate";
import nurseryActions from "./modules/nursery/nurseryActions";
import childrenActions from "./modules/children/childrenActions";

// nursery routes
router.get("/api/nursery", nurseryActions.browse);
router.get("/api/nursery/:id", nurseryActions.read);

/***************************************************************/

// user routes
router.get("/api/user", userActions.browse); // only for test purposes
// registration feature
router.post(
  "/api/user/registration",
  userActions.validation,
  authentificationActions.hashPassword,
  userActions.add,
);

// login feature
router.post("/api/user/login", authentificationActions.login);

// cookie retrieving
router.get("/api/user/me", authentificationActions.getUser);

/***************************************************************/

/* Authentication wall */
router.use(authentificationActions.verifyToken);

// parent routes --> need to be authenticated
router.get("/api/parent", parentActions.browse); // only for test purposes
router.post(
  "/api/parent",
  parentFolderValidator,
  validate.validate,
  parentActions.add,
);
router.delete("/api/parent/:id", parentActions.destroy);

// children routes --> need to be authenticated
router.get("/api/children/:id", childrenActions.browse);
router.post("/api/children", childrenActions.add);

// Booking routes --> need to be authenticated
router.get("/api/booking", bookingActions.browse);
router.get("/api/booking/parent", bookingActions.read);
router.post("/api/booking", bookingActions.add);

export default router;
