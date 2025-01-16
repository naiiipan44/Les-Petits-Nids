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

import nurseryActions from "./modules/nursery/nurseryActions";

router.get("/api/nursery", nurseryActions.browse);
router.get("/api/nursery/:id", nurseryActions.read);

/* ************************************************************************* */

// get userApp  from database

import userAppActions from "./modules/userApp/userAppActions";
import userLoginActions from "./modules/userLogin/userLoginActions";

router.get("/api/userApp", userAppActions.browse);

// Parent registration

router.get("/api/userLogin", userLoginActions.browse);
router.post(
  "/api/userLogin",
  userLoginActions.validation,
  userLoginActions.add,
);

export default router;
