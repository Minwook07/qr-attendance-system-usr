export function maskEmail(email) {
    if (!email) return "";

    const [user, domain] = email.split("@");

    // Keep first 3 characters, mask the rest
    const visiblePart = user.slice(0, 3);
    const maskedPart = "*".repeat(Math.max(user.length - 3, 3)); // at least 3 stars

    return `${visiblePart}${maskedPart}@${domain}`;
}
