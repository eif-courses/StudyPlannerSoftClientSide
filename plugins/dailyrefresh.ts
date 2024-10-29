
export default defineNuxtPlugin(() => {
    const setDailyRefresh = (): void => {
        const now = new Date();
        const targetHourUTC = 2; // 5 AM in UTC+2 or 6 AM in UTC+3

        const nextRefresh = new Date(now);
        nextRefresh.setUTCHours(targetHourUTC, 0, 0, 0);

        // If we've already passed the target time today, set it for tomorrow
        if (nextRefresh <= now) {
            nextRefresh.setDate(nextRefresh.getDate() + 1);
        }

        const timeUntilRefresh = nextRefresh.getTime() - now.getTime();

        setTimeout(() => {
            location.reload(); // Refresh at the specified time
            setDailyRefresh(); // Schedule the next daily refresh
        }, timeUntilRefresh);
    };

    setDailyRefresh();
});
