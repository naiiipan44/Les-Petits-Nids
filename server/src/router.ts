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

/* ************************************************************************* */

// get children from database

import childrenActions from "./modules/children/childrenActions";

/* ************************************************************************* */

// get userApp  from database

// Import files for routes

import bookingActions from "./modules/booking/bookingActions";
import parentActions from "./modules/parent/parentActions";
import userActions from "./modules/user/userActions";
import validate, {
  bookingValidator,
  childrenFolderValidator,
  parentFolderValidator,
} from "./service/validate";

// nursery routes
router.get("/api/nursery", nurseryActions.browse);
router.get("/api/nursery/:id", nurseryActions.read);

/***************************************************************/

// User routes

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

// parent routes --> need to be authenticated
router.use("/api/parent", authentificationActions.verifyToken);

router.put("/api/parent/:id", parentActions.edit);
router.get("/api/parent", parentActions.browse);
router.post(
  "/api/parent",
  parentFolderValidator,
  validate.validate,
  parentActions.add,
);
router.delete("/api/parent/:id", parentActions.destroy);
router.get("/api/parent/:id", parentActions.read);

// children routes --> need to be authenticated
router.use("/api/children", authentificationActions.verifyToken);

router.get("/api/children/:id", childrenActions.browse);
router.post(
  "/api/children",
  childrenFolderValidator,
  validate.validate,
  childrenActions.add,
);
router.delete("/api/children/:id", childrenActions.destroy);
router.put("/api/children/:id", childrenActions.edit);

// nursery routes
router.post("/api/nursery", nurseryActions.add);

// Booking routes --> need to be authenticated
router.use("/api/booking", authentificationActions.verifyToken);

router.get("/api/booking", bookingActions.browse);
router.get("/api/booking/parent", bookingActions.read);
router.post(
  "/api/booking/:id",
  bookingValidator,
  validate.validate,
  bookingActions.add,
);
router.post("/api/booking", bookingActions.add);
router.get("/api/booking/parent", bookingActions.readByParentId);
router.get("/api/booking/nursery", bookingActions.readByNurseryId);

/* Authentication wall */

export default router;
