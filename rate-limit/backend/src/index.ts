import express from "express";

const app = express();

app.use(express.json());

const otpStore: Record<string, string> = {};

app.post("/generate-otp", (req, res) => {
    const email = req.body.email;
    if (!email || Array.isArray(email)) {
        return res.status(400).send("A single email address is required");
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp.toString();
    console.log(`OTP for ${email}: ${otp}`);
    return res.status(200).send("OTP generated successfully");
});

app.get("/verify-otp", (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;
    if (!email || Array.isArray(email)) {
        return res.status(400).send("A single email address is required");
    }
    if (!otp || Array.isArray(otp)) {
        return res.status(400).send("A single OTP is required");
    }
    if (otpStore[email] === otp) {
        return res.status(200).send("OTP verified successfully");
    }
    return res.status(400).send("Invalid OTP");
});

app.post('/reset-password', (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;
    const newPassword = req.body.password;
    if (!email || !otp || !newPassword) {
        return res.status(400).send("All fields are required");
    }
    if (otpStore[email] !== otp) {
        return res.status(400).send("Invalid OTP");
    }
    if (otpStore[email] == otp) {
        console.log(`Password reset for ${email}`);
        delete otpStore[email];
        return res.status(200).send("Password reset successfully");
    } else {
        return res.status(400).send("Invalid OTP");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
