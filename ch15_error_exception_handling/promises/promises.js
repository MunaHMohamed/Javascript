const phonePromise = new Promise((resolve, reject) => {

    console.log("👩 Mom: Let's wait one week...");

    setTimeout(() => {

        const behavedWell = true;

        if (behavedWell) {
            resolve("📱 You behaved! Here's your new phone.");
        } else {
            reject("❌ You didn't behave. No phone.");
        }

    }, 7000); // 7 seconds instead of 7 days

});

phonePromise
    .then((phone) => {
        console.log(phone);

        return "🎮 Installing games...";
    })
    .then((games) => {
        console.log(games);

        return "📱 Phone is ready!";
    })
    .then((ready) => {
        console.log(ready);
    })
    .catch((error) => {
        console.log(error);
    });


