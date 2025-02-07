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

// get nursery  from database
import authentificationActions from "./modules/authentification/authentificationActions";
import nurseryActions from "./modules/nursery/nurseryActions";

router.get("/api/nursery", nurseryActions.browse);
router.get("/api/nursery/:id", nurseryActions.read);
router.post("/api/nursery", nurseryActions.add);

/* ************************************************************************* */

// get children from database

import childrenActions from "./modules/children/childrenActions";

router.get("/api/children/:id", childrenActions.browse);
router.post(
  "/api/children",
  childrenFolderValidator,
  validate.validate,
  childrenActions.add,
);
router.delete("/api/children/:id", childrenActions.destroy);
router.put("/api/children/:id", childrenActions.edit);

/* ************************************************************************* */

// get userApp  from database

// Import files for routes

import bookingActions from "./modules/booking/bookingActions";
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

// User routes
router.get("/api/parent", parentActions.browse);

router.put("/api/parent/:id", parentActions.edit);

router.post(
  "/api/parent",
  authentificationActions.verifyToken,
  parentFolderValidator,
  validate.validate,
  parentActions.add,
  authentificationActions.verifyToken,
);

router.delete("/api/parent/:id", parentActions.destroy);

router.get("/api/user", userActions.browse);

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
