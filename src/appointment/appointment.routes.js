import { Router } from "express";
import { saveAppointment, getAppoint, updateAppoint, deleteAppoint } from "./appointment.controller.js";
import { createAppointmentValidator, deleteAppointValidator, updateAppointValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.post("/", getAppoint)

router.put("/updateAppoint/:num", updateAppointValidator,  updateAppoint)

router.put("/deleteAppoint/:num", deleteAppointValidator, deleteAppoint)
export default router;