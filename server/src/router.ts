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

// get userApp  from database

// Import files for routes

import authentificationActions from "./modules/authentification/authentificationActions";
import bookingActions from "./modules/booking/bookingActions";
import childrenActions from "./modules/children/childrenActions";
import nurseryActions from "./modules/nursery/nurseryActions";
import parentActions from "./modules/parent/parentActions";
import userActions from "./modules/user/userActions";
import validate, {
  childrenFolderValidator,
  parentFolderValidator,
} from "./service/validate";

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
router.get("/api/user/me", authentificationActions.updateOrGetUserToken);

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
router.post(
  "/api/children",
  childrenFolderValidator,
  validate.validate,
  childrenActions.add,
);
router.delete("/api/children/:id", childrenActions.destroy);
router.put("/api/children/:id", childrenActions.edit);

// Booking routes --> need to be authenticated
router.get("/api/booking", bookingActions.browse);
router.get("/api/booking/parent", bookingActions.read);
router.post("/api/booking", bookingActions.add);

export default router;
