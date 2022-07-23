// SQL Commands

module.exports = {
    // Authentication Commands
    INSERT_INTO_USERS : "INSERT INTO users (username, password, firstName, lastName, email, dateOfBirth, role) VALUES (? ,? , ?, ?, ?, ?, ?)",
    LOGIN_USER:"SELECT username, password, firstName, lastName, email, dateOfBirth, role FROM users WHERE username = ? AND password = ?",
    USER_ALREADY_EXIST:"SELECT username FROM users WHERE username = ?",
    // Get Details
    GET_USER_BY_USERNAME:"SELECT * FROM users WHERE username = ?",
    GET_ALL_USERS:"SELECT * FROM GET_USERS_WITH_DETAILS",
    DELETE_USER_BY_USERNAME:"DELETE FROM users WHERE username = ?"
} 