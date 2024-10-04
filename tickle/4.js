function couponGenerator() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const coupon = {
                code: require("node:crypto").randomBytes(8).toString('hex'),
                available: Math.random() > 0.7
            };
            resolve(coupon);
        }, 50);
    });
}

function collectCoupons(n) {
    return new Promise(async (resolve, reject) => {
        const coupons = [];

        while (coupons.length < n) {
            try {
                const coupon = await couponGenerator();
                if (coupon.available) {
                    coupons.push(coupon.code);
                }
            } catch (error) {
                reject(error);
                return;
            }
        }

        resolve(coupons);
    });
}

collectCoupons(5).then(codes => {
    console.log("Collected coupon codes:", codes);
}).catch(error => {
    console.error("Error collecting coupons:", error);
});
