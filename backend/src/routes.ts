import { Router } from "express";
import portfolioItemsController from "./controllers/portfolio-items.controller";
import notificationsController from "./controllers/notifications.controller";
import authLogsController from "./controllers/auth-logs.controller";

const router = Router();

router.use("/portfolio-items", portfolioItemsController);
router.use("/notifications", notificationsController);
router.use("/auth-logs", authLogsController);


export default router;

