import Pet from "../pet/pet.model.js";
import Appointment from "../appointment/appointment.model.js";
import { parse } from "date-fns";

export const saveAppointment = async (req, res) => {

  try {
    const data = req.body;

    const isoDate = new Date(data.date);

    if (isNaN(isoDate.getTime())) {
      return res.status(400).json({
        success: false,
        msg: "Fecha inválida",
      });
    }

    const pet = await Pet.findOne({ _id: data.pet });
    if (!pet) {
      return res.status(404).json({ 
        success: false, 
        msg: "No se encontró la mascota" 
      });
    }

    const existAppointment = await Appointment.findOne({
      pet: data.pet,
      user: data.user,
      date: {
        $gte: new Date(isoDate).setHours(0, 0, 0, 0),
        $lt: new Date(isoDate).setHours(23, 59, 59, 999),
      },
    });

    if (existAppointment) {
      return res.status(400).json({
        success: false,
        msg: "El usuario y la mascota ya tienen una cita para este día",
      });
    }

    const appointment = new Appointment({ ...data, date: isoDate });
    await appointment.save();

    return res.status(200).json({
      success: true,
      msg: `Cita creada exitosamente en fecha ${data.date}`,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      msg: "Error al crear la cita", 
      error 
    });
  }
};

export const getAppoint = async (req, res) => {
  try{
    const {limit = 5, desde = 0} = req.query
    const query = {status: true}
    
    const [total, pet ] = await Promise.all([
      Pet.countDocuments(query),
      Pet.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
    ])

    return res.status(200).json({
      success: true,
      total,
      pet
  })

  }catch(err){
    return res.status(200).json({
      success: false,
      message: "Error al obtener las citas",
      error: err.message
    })
  }
}

export const updateAppoint = async (req, res) =>{
  try{
      const { num } = req.params;
      const data = req.body;

      const appoint = await Appointment.findByIdAndUpdate(num, data, {new: true});

      res.status(200).json({
        success: true,
        msg: 'Cita actualizada',
        appoint,
      });
  }catch(err){
    res.status(500).json({
      succes: false,
      msg: 'Error al actualizar una cita',
      error: err.message
    })
  }
}


export const deleteAppoint = async (req, res) => {
  try{
    const { num } = req.params

    const appoint = await Appointment.findByIdAndUpdate(num, {status: false}, {new:true})

    return res.status(200).json({
      succes:true,
      message: "La cita se actualizo",
      appoint
    })
    
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error al cancelar su cita",
      error: err.message
    })
  }
}