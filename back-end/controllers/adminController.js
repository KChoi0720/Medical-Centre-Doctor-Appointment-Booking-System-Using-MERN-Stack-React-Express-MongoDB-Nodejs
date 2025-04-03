import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'


// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // console.log({name, email, password, speciality, degree, experience, about, fees,address }, imageFile)


        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // validating password format
        if ( password.length < 8 ) {
            return res.status(400).json({ message: "Password must be more than 8 parameters" });
        }
         
        // hashting doctor password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary
        // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'});
        // const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            // image:imageUrl,
            date:Date.now()
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({success:true, message: "Doctor added successfully" });



    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message })
    }
};


export { addDoctor }




